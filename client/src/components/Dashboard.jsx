import React, { useState, useEffect } from 'react';
import NotesInput from './NotesInput';
import FlashcardDeck from './FlashcardDeck';
import { Layers, Clock } from 'lucide-react';

export default function Dashboard() {
  const [flashcards, setFlashcards] = useState([]);
  const [pastDecks, setPastDecks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchDecks = async () => {
    try {
      const response = await fetch('/api/decks');
      const data = await response.json();
      if (response.ok && data.decks) {
        setPastDecks(data.decks);
      }
    } catch (err) {
      console.error('Failed to fetch past decks:', err);
    }
  };

  useEffect(() => {
    fetchDecks();
  }, []);

  const handleGenerateCards = async (text) => {
    setIsLoading(true);
    setError('');
    
    try {
      const response = await fetch('/api/generate-flashcards', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text })
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to generate flashcards');
      }
      
      if (data.flashcards && data.flashcards.length > 0) {
        setFlashcards(data.flashcards);
        fetchDecks(); // Refresh past decks after saving
      } else {
        throw new Error('AI returned an empty deck.');
      }
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const loadPastDeck = (deck) => {
    if (deck.cards && deck.cards.length > 0) {
      setFlashcards(deck.cards);
      setError('');
    }
  };

  const handleReset = () => {
    setFlashcards([]);
    setError('');
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-[12px]">
      <div className="col-span-1 md:col-span-12">
        {error && (
          <div className="mb-4 p-4 rounded-xl bg-error-container text-on-error-container text-sm font-geist border border-error/20">
            {error}
          </div>
        )}
      </div>

      {/* Sidebar for Past Decks */}
      <div className="col-span-1 md:col-span-12 lg:col-span-4">
        <div className="bento-card h-full min-h-[400px]">
          <div className="flex items-center gap-2 mb-6">
            <div className="bg-primary/5 p-2 rounded-lg">
              <Layers className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h2 className="text-xs font-geist font-semibold tracking-[0.08em] uppercase text-secondary">
                Your Library
              </h2>
            </div>
          </div>
          
          <div className="flex flex-col gap-2 max-h-[500px] overflow-y-auto pr-2">
            {pastDecks.length === 0 ? (
              <p className="text-sm font-geist text-on-surface-variant italic">No saved decks yet.</p>
            ) : (
              pastDecks.map((deck) => (
                <button
                  key={deck.id}
                  onClick={() => loadPastDeck(deck)}
                  className="w-full text-left p-4 rounded-xl border border-surface-container-highest bg-surface-bright hover:border-primary/40 hover:bg-surface-container-low transition-colors group flex items-start gap-3"
                >
                  <Clock className="w-4 h-4 text-secondary group-hover:text-primary shrink-0 mt-1" />
                  <div>
                    <div className="font-geist font-medium text-sm text-on-surface line-clamp-2">
                      {deck.title}
                    </div>
                    <div className="text-xs font-geist text-on-surface-variant mt-1">
                      {new Date(deck.created_at).toLocaleDateString()} • {deck.cards?.length || 0} cards
                    </div>
                  </div>
                </button>
              ))
            )}
          </div>
        </div>
      </div>
      
      {/* Main Content Area */}
      {flashcards.length === 0 ? (
        <div className="col-span-1 md:col-span-12 lg:col-span-8">
          <NotesInput onSubmit={handleGenerateCards} isLoading={isLoading} />
        </div>
      ) : (
        <div className="col-span-1 md:col-span-12 lg:col-span-8">
          <FlashcardDeck cards={flashcards} onReset={handleReset} />
        </div>
      )}
    </div>
  );
}
