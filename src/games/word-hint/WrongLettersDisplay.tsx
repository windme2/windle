
import React from 'react';

interface WrongLettersDisplayProps {
  wrongLetters: Set<string>;
}

const WrongLettersDisplay = ({ wrongLetters }: WrongLettersDisplayProps) => {
  if (wrongLetters.size === 0) return null;

  return (
    <div className="text-center">
      <div className="text-sm text-red-600 mb-2">Wrong letters:</div>
      <div className="flex justify-center gap-1 flex-wrap">
        {Array.from(wrongLetters).map(letter => (
          <span key={letter} className="bg-red-100 text-red-700 px-2 py-1 rounded text-sm">
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
};

export default WrongLettersDisplay;
