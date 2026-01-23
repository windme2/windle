
import React from 'react';

type GameMode = 'fill-missing' | 'word-hint';

interface GameMenuProps {
  onGameSelect: (mode: GameMode) => void;
}

const GameMenu = ({ onGameSelect }: GameMenuProps) => {

  return (
    <div className="min-h-[600px] flex items-center justify-center bg-slate-50 dark:bg-slate-900">
      <div className="max-w-4xl w-full p-4">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 p-8">
        {/* Game Title Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-800 dark:text-slate-100 mb-4">
            🎯 Windle
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Fill in the missing letters to complete the word!
          </p>
        </div>

        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-4">
            Choose Your Game
          </h2>
          <p className="text-slate-600 dark:text-slate-400">
            Select the game mode you want to play
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <button
            onClick={() => onGameSelect('fill-missing')}
            className="group p-6 border-2 border-slate-200 dark:border-slate-600 rounded-xl hover:border-blue-300 
                       hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-200 text-left"
          >
            <div className="text-4xl mb-4">🔤</div>
            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-2 group-hover:text-blue-800 dark:group-hover:text-blue-300">
              Fill Missing Letters
            </h3>
            <p className="text-slate-600 dark:text-slate-400 group-hover:text-blue-700 dark:group-hover:text-blue-400">
              Complete the word by filling in the missing letters based on the remaining letters shown
            </p>
          </button>
          
          <button
            onClick={() => onGameSelect('word-hint')}
            className="group p-6 border-2 border-slate-200 dark:border-slate-600 rounded-xl hover:border-blue-300 
                       hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-200 text-left"
          >
            <div className="text-4xl mb-4">💡</div>
            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-2 group-hover:text-blue-800 dark:group-hover:text-blue-300">
              Word Hint
            </h3>
            <p className="text-slate-600 dark:text-slate-400 group-hover:text-blue-700 dark:group-hover:text-blue-400">
              Guess the word from the given hint. Type letters one by one to find the answer
            </p>
          </button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default GameMenu;
