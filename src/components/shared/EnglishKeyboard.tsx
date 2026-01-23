
import React from 'react';

interface EnglishKeyboardProps {
  onLetterPress: (letter: string) => void;
  onBackspace: () => void;
  disabled: boolean;
  wrongLetters?: Set<string>;
  correctLetters?: Set<string>;
}

const KEYBOARD_LAYOUT = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
];

const EnglishKeyboard = ({ 
  onLetterPress, 
  onBackspace, 
  disabled, 
  wrongLetters = new Set(), 
  correctLetters = new Set() 
}: EnglishKeyboardProps) => {
  // Add haptic feedback for mobile devices
  const vibrate = (pattern: number | number[] = 10) => {
    if ('vibrate' in navigator) {
      navigator.vibrate(pattern);
    }
  };

  const handleLetterPress = (letter: string) => {
    vibrate(10); // Short vibration for letter press
    onLetterPress(letter);
  };

  const handleBackspace = () => {
    vibrate([20, 10, 20]); // Different pattern for backspace
    onBackspace();
  };

  const renderKey = (key: string) => {
    const isWrong = wrongLetters.has(key);
    const isCorrect = correctLetters.has(key);
    const isUsed = isWrong || isCorrect;
    
    let bgColor = 'bg-white hover:bg-slate-50';
    let textColor = 'text-slate-700';
    let borderColor = 'border-slate-300 hover:border-slate-400';
    
    if (isWrong) {
      bgColor = 'bg-red-100';
      textColor = 'text-red-700';
      borderColor = 'border-red-300';
    } else if (isCorrect) {
      bgColor = 'bg-emerald-100';
      textColor = 'text-emerald-700';
      borderColor = 'border-emerald-300';
    }

    return (
      <button
        key={key}
        onClick={() => handleLetterPress(key)}
        disabled={disabled || isUsed}
        className={`
          w-9 h-11 sm:w-10 sm:h-12 md:w-11 md:h-13 
          text-sm sm:text-base md:text-lg
          rounded-lg border-2 font-bold
          ${bgColor} ${textColor} ${borderColor}
          transition-all duration-150 ease-out
          active:scale-90 active:brightness-95 shadow-md hover:shadow-lg
          disabled:opacity-50 disabled:cursor-not-allowed
          touch-manipulation select-none
        `}
      >
        {key}
      </button>
    );
  };

  return (
    <div className="space-y-2 px-2">
      {KEYBOARD_LAYOUT.map((row, rowIndex) => (
        <div key={rowIndex} className="flex justify-center gap-1.5 sm:gap-2">
          {row.map(key => renderKey(key))}
        </div>
      ))}
      
      {/* Backspace key */}
      <div className="flex justify-center pt-2">
        <button
          onClick={handleBackspace}
          disabled={disabled}
          className="px-6 py-2.5 sm:px-8 sm:py-3 text-base sm:text-lg font-bold
                     rounded-lg border-2 border-slate-400 bg-slate-100 text-slate-700 
                     hover:bg-slate-200 hover:border-slate-500 active:bg-slate-300
                     transition-all duration-150 ease-out active:scale-90 
                     shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed 
                     touch-manipulation select-none"
        >
          ⌫ Backspace
        </button>
      </div>
    </div>
  );
};

export default EnglishKeyboard;
