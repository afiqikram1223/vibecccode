import React from 'react';

export default function Flashcard({ card, isFlipped, onFlip }) {
  if (!card) return null;

  return (
    <div 
      className="w-full max-w-md aspect-[4/3] cursor-pointer group transform-style-3d transition-transform duration-500 ease-in-out relative"
      style={{ transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
      onClick={onFlip}
    >
      {/* Front of Card (Question) */}
      <div className="absolute inset-0 backface-hidden bg-surface-bright border border-surface-container-highest rounded-[20px] shadow-sm flex items-center justify-center p-8 group-hover:border-primary/30 transition-colors">
        <div className="absolute top-4 left-4 text-xs font-geist font-semibold tracking-[0.08em] uppercase text-primary/60">
          Question
        </div>
        <h3 className="text-xl md:text-2xl font-geist font-medium text-center text-on-surface leading-snug">
          {card.question}
        </h3>
      </div>

      {/* Back of Card (Answer) */}
      <div className="absolute inset-0 backface-hidden bg-paper border border-outline-variant rounded-[20px] shadow-sm flex items-center justify-center p-8 rotate-y-180">
        <div className="absolute top-4 left-4 text-xs font-geist font-semibold tracking-[0.08em] uppercase text-primary">
          Answer
        </div>
        <p className="text-lg md:text-xl font-geist text-center text-on-surface-variant leading-relaxed">
          {card.answer}
        </p>
      </div>
    </div>
  );
}
