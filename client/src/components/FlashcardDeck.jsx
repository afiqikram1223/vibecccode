import React, { useState } from 'react';
import Flashcard from './Flashcard';
import { ArrowLeft, ArrowRight, RotateCcw } from 'lucide-react';

export default function FlashcardDeck({ cards, onReset }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleNext = () => {
    if (currentIndex < cards.length - 1) {
      setIsFlipped(false);
      setTimeout(() => setCurrentIndex(c => c + 1), 150);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setIsFlipped(false);
      setTimeout(() => setCurrentIndex(c => c - 1), 150);
    }
  };

  const progressPercentage = ((currentIndex + 1) / cards.length) * 100;

  return (
    <div className="bento-card flex flex-col h-full min-h-[500px]">
      <div className="flex justify-between items-center mb-6">
        <button 
          onClick={onReset}
          className="text-secondary hover:text-primary transition-colors flex items-center gap-1 text-sm font-geist"
        >
          <RotateCcw className="w-4 h-4" />
          <span>New Deck</span>
        </button>
        <div className="flex flex-col items-end gap-2 w-1/3">
          <div className="text-xs font-geist font-semibold tracking-[0.08em] uppercase text-secondary">
            {currentIndex + 1} / {cards.length}
          </div>
          <div className="w-full h-1 bg-surface-container-highest rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary transition-all duration-300 ease-out"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>
      </div>

      <div className="flex-grow flex items-center justify-center relative perspective-1000 my-8">
        <Flashcard 
          card={cards[currentIndex]} 
          isFlipped={isFlipped} 
          onFlip={() => setIsFlipped(!isFlipped)} 
        />
      </div>

      <div className="flex justify-center items-center gap-4 mt-auto">
        <button 
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="p-3 rounded-xl border border-surface-container-highest text-secondary hover:text-primary hover:border-primary disabled:opacity-30 disabled:cursor-not-allowed transition-all"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        
        <button 
          onClick={() => setIsFlipped(!isFlipped)}
          className="btn-secondary min-w-[120px]"
        >
          Flip Card
        </button>

        <button 
          onClick={handleNext}
          disabled={currentIndex === cards.length - 1}
          className="p-3 rounded-xl border border-surface-container-highest text-secondary hover:text-primary hover:border-primary disabled:opacity-30 disabled:cursor-not-allowed transition-all"
        >
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
