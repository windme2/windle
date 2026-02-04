import React from "react";

type GameMode = "fill-missing" | "word-hint";

interface GameModeInfoProps {
  gameMode: GameMode;
  onContinue: () => void;
  onBack: () => void;
}

const GameModeInfo = ({ gameMode, onContinue, onBack }: GameModeInfoProps) => {
  const getGameInfo = () => {
    if (gameMode === "fill-missing") {
      return {
        icon: "🔤",
        title: "Fill Missing Letters",
        description: "Complete words by filling in the missing letters",
        howToPlay: [
          "You will see a word with some letters missing",
          "Look at the hint to understand the word meaning",
          "Type or click letters to fill in the blanks",
          "Complete 5 words to finish the level",
        ],
        tips: [
          "Read the hint carefully",
          "Start with letters you are sure about",
          "You can use backspace to correct mistakes",
        ],
      };
    } else {
      return {
        icon: "💡",
        title: "Word Hint",
        description: "Guess the complete word using hints",
        howToPlay: [
          "Read the hint about the mystery word",
          "Type letters to reveal them in the word",
          "Each wrong letter counts as a mistake",
          "Complete 5 words to finish the level",
        ],
        tips: [
          "Common letters like E, A, R, T are good starting points",
          "Pay attention to word length",
          "You have 5 wrong attempts per word",
        ],
      };
    }
  };

  const info = getGameInfo();

  return (
    <div className="min-h-[600px] flex items-center justify-center px-2 py-4">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-slate-100 p-4 sm:p-6 md:p-8">
          {/* Back button */}
          <div className="mb-4 sm:mb-6">
            <button
              onClick={onBack}
              className="inline-flex items-center text-sm text-slate-600 hover:text-slate-800 
                         transition-colors duration-200 px-2 py-1 active:scale-95"
            >
              Back
            </button>
          </div>

          {/* Header */}
          <div className="text-center mb-6 sm:mb-8">
            <div className="text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4">
              {info.icon}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-2 px-2">
              {info.title}
            </h2>
            <p className="text-base sm:text-lg text-slate-600 px-2">
              {info.description}
            </p>
          </div>

          {/* How to Play */}
          <div className="mb-6 sm:mb-8">
            <h3 className="text-lg sm:text-xl font-semibold text-slate-800 mb-3 sm:mb-4 flex items-center gap-2 px-2">
              <span>📖</span> How to Play
            </h3>
            <ol className="space-y-2 sm:space-y-3">
              {info.howToPlay.map((step, index) => (
                <li
                  key={index}
                  className="flex gap-2 sm:gap-3 text-sm sm:text-base text-slate-700 px-2"
                >
                  <span
                    className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-blue-100 text-blue-700 
                         flex items-center justify-center text-xs sm:text-sm font-semibold mt-0.5"
                  >
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Tips */}
          <div className="mb-6 sm:mb-8">
            <h3 className="text-lg sm:text-xl font-semibold text-slate-800 mb-3 sm:mb-4 flex items-center gap-2 px-2">
              <span>💡</span> Tips
            </h3>
            <ul className="space-y-2">
              {info.tips.map((tip, index) => (
                <li
                  key={index}
                  className="flex gap-2 sm:gap-3 text-sm sm:text-base text-slate-700 px-2"
                >
                  <span className="text-purple-500">•</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Continue Button */}
          <div className="text-center px-2">
            <button
              onClick={onContinue}
              className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 
                       text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold shadow-lg hover:shadow-xl 
                       transition-all duration-200 transform hover:scale-105 active:scale-95 text-sm sm:text-base"
            >
              Continue to Category Selection
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameModeInfo;
