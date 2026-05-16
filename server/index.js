import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { createClient } from '@supabase/supabase-js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;
const geminiKey = process.env.GEMINI_API_KEY ? process.env.GEMINI_API_KEY.trim() : '';
const genAI = new GoogleGenerativeAI(geminiKey);

// Initialize Supabase (Will only connect if keys are provided)
const supabaseUrl = process.env.SUPABASE_URL ? process.env.SUPABASE_URL.trim() : null;
const supabaseKey = process.env.SUPABASE_KEY ? process.env.SUPABASE_KEY.trim() : null;
const supabase = (supabaseUrl && supabaseKey) ? createClient(supabaseUrl, supabaseKey) : null;

app.get('/api/decks', async (req, res) => {
  try {
    if (!supabase) {
      return res.status(200).json({ decks: [], message: 'Supabase not configured yet' });
    }
    
    const { data, error } = await supabase
      .from('decks')
      .select('id, title, created_at, cards')
      .order('created_at', { ascending: false });
      
    if (error) throw error;
    
    res.json({ decks: data });
  } catch (error) {
    console.error('Error fetching decks:', error);
    res.status(500).json({ error: 'Failed to fetch decks.' });
  }
});

app.post('/api/generate-flashcards', async (req, res) => {
  try {
    const { text } = req.body;
    
    if (!text || text.trim() === '') {
      return res.status(400).json({ error: 'Text is required to generate flashcards.' });
    }

    const model = genAI.getGenerativeModel({ 
      model: 'gemini-flash-latest',
      generationConfig: {
        responseMimeType: "application/json",
      }
    });

    const prompt = `You are a study assistant. Create exactly 10 high-quality flashcards from the following lecture text.
Return a JSON array of objects, where each object has a "question" string and an "answer" string.
If the text is too short, generate as many relevant flashcards as possible up to 10.
Make sure the answers are concise but informative.

Lecture Text:
${text}`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const textOutput = response.text();
    
    if (!textOutput) {
       return res.status(500).json({ error: 'AI returned an empty response.' });
    }
    
    let flashcards = [];
    try {
      flashcards = JSON.parse(textOutput);
    } catch (parseError) {
      console.error("Failed to parse AI output:", textOutput);
      return res.status(500).json({ error: 'AI returned malformed data.' });
    }
    
    // Save to Supabase if configured
    let savedDeck = null;
    if (supabase) {
      const title = text.split(' ').slice(0, 5).join(' ') + '...';
      const { data, error } = await supabase
        .from('decks')
        .insert([{ title, original_text: text, cards: flashcards }])
        .select()
        .single();
        
      if (error) {
        console.error("Supabase insert error:", error);
      } else {
        savedDeck = data;
      }
    }

    res.json({ 
      flashcards, 
      deckId: savedDeck ? savedDeck.id : null 
    });
  } catch (error) {
    console.error('Error generating flashcards:', error);
    res.status(500).json({ error: 'Failed to generate flashcards.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
