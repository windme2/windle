import React from 'react';

type PlayMode = 'quick' | 'survival';
type GameType = 'fill-missing' | 'word-hint';

interface GameModeSelectorProps {
  gameType: GameType;
  onModeSelect: (mode: PlayMode) => void;
  onBack: () => void;
}

const GameModeSelector = ({ gameType, onModeSelect, onBack }: GameModeSelectorProps) => {
  const getGameTitle = () => {
    return gameType === 'fill-missing' ? 'Fill Missing Letters' : 'Word Hint';
  };

  const getGameIcon = () => {
    return gameType === 'fill-missing' ? '🔤' : '💡';
  };

  return (
    <div className="min-h-[600px] flex items-center justify-center">
      <div className="max-w-4xl w-full">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
          {/* Back button */}
          <div className="mb-6">
            <button
              onClick={onBack}
              className="inline-flex items-center text-sm text-slate-600 hover:text-slate-800 
                         transition-colors duration-200 px-2 py-1"
            >
              Back
            </button>
          </div>

          {/* Header */}
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">{getGameIcon()}</div>
            <h2 className="text-3xl font-bold text-slate-800 mb-2">
              {getGameTitle()}
            </h2>
            <p className="text-slate-600">
              Choose your play mode
            </p>
          </div>

          {/* Mode Selection Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Quick Play Mode */}
            <button
              onClick={() => onModeSelect('quick')}
              className="group p-6 border-2 border-slate-200 rounded-xl hover:border-blue-300 
                         hover:bg-blue-50 transition-all duration-200 text-left"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl">⚡</div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-slate-800 mb-2 group-hover:text-blue-800">
                    Quick Play
                  </h3>
                  <p className="text-slate-600 group-hover:text-blue-700 text-sm mb-3">
                    Play 5 rounds at your chosen difficulty level
                  </p>
                  <div className="space-y-1 text-xs text-slate-500">
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span>Choose difficulty (Easy/Medium/Hard)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span>5 rounds only</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span>Perfect for quick practice</span>
                    </div>
                  </div>
                </div>
              </div>
            </button>

            {/* Survival Mode */}
            <button
              onClick={() => onModeSelect('survival')}
              className="group p-6 border-2 border-slate-200 rounded-xl hover:border-purple-300 
                         hover:bg-purple-50 transition-all duration-200 text-left relative overflow-hidden"
            >
              {/* "New" badge */}
              <div className="absolute top-3 right-3 bg-purple-500 
                            text-white text-xs font-bold px-2 py-1 rounded-full">
                NEW
              </div>
              
              <div className="flex items-start gap-4">
                <div className="text-4xl">🏆</div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-slate-800 mb-2 group-hover:text-purple-800">
                    Survival Mode
                  </h3>
                  <p className="text-slate-600 group-hover:text-purple-700 text-sm mb-3">
                    Progressive challenge - the difficulty increases as you advance!
                  </p>
                  <div className="space-y-1 text-xs text-slate-500">
                    <div className="flex items-center gap-2">
                      <span className="text-purple-500">✓</span>
                      <span>20 rounds total</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-purple-500">✓</span>
                      <span>Auto-progression: Easy (1-7) → Medium (8-14) → Hard (15-20)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-purple-500">✓</span>
                      <span>3 lives - survive as long as you can!</span>
                    </div>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameModeSelector;
