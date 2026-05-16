import React, { useState } from 'react';
import { Sparkles, Loader2, BookOpen } from 'lucide-react';

export default function NotesInput({ onSubmit, isLoading }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onSubmit(text);
    }
  };

  return (
    <div className="bento-card flex flex-col h-full min-h-[400px]">
      <div className="flex items-center gap-2 mb-6">
        <div className="bg-primary/5 p-2 rounded-lg">
          <BookOpen className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h2 className="text-xs font-geist font-semibold tracking-[0.08em] uppercase text-secondary">
            Knowledge Intake
          </h2>
          <p className="text-sm font-geist text-on-surface-variant">Paste your lecture notes to generate a study deck.</p>
        </div>
      </div>
      
      <form onSubmit={handleSubmit} className="flex flex-col flex-grow">
        <textarea
          className="flex-grow w-full bg-surface-container-low border border-surface-container-highest rounded-xl p-4 font-geist text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 resize-none transition-all mb-4"
          placeholder="e.g. The mitochondria is the powerhouse of the cell..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          disabled={isLoading}
        ></textarea>
        
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={!text.trim() || isLoading}
            className={`btn-primary flex items-center gap-2 ${
              isLoading ? 'opacity-80 cursor-not-allowed ai-glow' : ''
            }`}
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Synthesizing...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 text-ai-accent" />
                <span>Generate Flashcards</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
