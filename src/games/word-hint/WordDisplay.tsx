
import React from 'react';

interface WordDisplayProps {
  userGuess: string[];
  gameStatus: 'playing' | 'won' | 'lost';
}

const WordDisplay = ({ userGuess, gameStatus }: WordDisplayProps) => {
  const renderLetterBox = (letter: string, index: number) => {
    let bgColor = 'bg-white border-2 border-slate-200';
    let textColor = 'text-slate-700';
    
    if (gameStatus === 'won') {
      bgColor = 'bg-emerald-50 border-emerald-300';
      textColor = 'text-emerald-700';
    } else if (gameStatus === 'lost') {
      bgColor = 'bg-red-50 border-red-300';
      textColor = 'text-red-700';
    } else if (letter !== '_') {
      bgColor = 'bg-blue-50 border-blue-200';
      textColor = 'text-blue-800';
    }

    const wordLength = userGuess.length;
    let sizeClasses = '';
    
    if (wordLength <= 4) {
      sizeClasses = 'w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-lg sm:text-xl md:text-2xl';
    } else if (wordLength <= 6) {
      sizeClasses = 'w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-base sm:text-lg md:text-xl';
    } else if (wordLength <= 8) {
      sizeClasses = 'w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-sm sm:text-base md:text-lg';
    } else {
      sizeClasses = 'w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-xs sm:text-sm md:text-base';
    }

    return (
      <div
        key={index}
        className={`
          ${sizeClasses} flex items-center justify-center
          font-bold rounded-lg transition-all duration-300
          ${bgColor} ${textColor}
          ${letter !== '_' ? 'animate-scale-in' : ''}
        `}
      >
        {letter === '_' ? '' : letter}
      </div>
    );
  };

  return (
    <div className="flex justify-center items-center gap-2 mb-8 px-4 overflow-x-auto">
      <div className="flex gap-2 min-w-fit">
        {userGuess.map((letter, index) => renderLetterBox(letter, index))}
      </div>
    </div>
  );
};

export default WordDisplay;
