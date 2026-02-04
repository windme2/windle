import React from "react";

type Difficulty = "easy" | "medium" | "hard";
type GameMode = "fill-missing" | "word-hint";

interface DifficultySelectionProps {
  gameMode: GameMode;
  onDifficultySelect: (difficulty: Difficulty) => void;
  onBack: () => void;
}

const DifficultySelection = ({
  gameMode,
  onDifficultySelect,
  onBack,
}: DifficultySelectionProps) => {
  const getGameModeTitle = () => {
    return gameMode === "fill-missing" ? "Fill Missing Letters" : "Word Hint";
  };

  const getGameModeIcon = () => {
    return gameMode === "fill-missing" ? "🔤" : "💡";
  };

  const getDifficultyInfo = (diff: Difficulty) => {
    const info = {
      easy: {
        icon: "😊",
        title: "Easy",
        description: "Simple everyday vocabulary words",
        color: "emerald",
      },
      medium: {
        icon: "🤔",
        title: "Medium",
        description: "Intermediate level words requiring some thought",
        color: "orange",
      },
      hard: {
        icon: "🤯",
        title: "Hard",
        description: "Advanced vocabulary words that challenge your brain",
        color: "red",
      },
    };
    return info[diff];
  };

  const getColorClasses = (color: string) => {
    const colors = {
      emerald:
        "hover:border-blue-300 hover:bg-blue-50 group-hover:text-blue-800",
      orange:
        "hover:border-blue-300 hover:bg-blue-50 group-hover:text-blue-800",
      red: "hover:border-blue-300 hover:bg-blue-50 group-hover:text-blue-800",
    };
    return colors[color as keyof typeof colors] || colors.emerald;
  };

  return (
    <div className="min-h-[600px] flex items-center justify-center px-2 py-4">
      <div className="max-w-4xl w-full">
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-slate-100 p-4 sm:p-6 md:p-8">
          {/* Back button - aligned left */}
          <div className="text-left mb-4 sm:mb-6">
            <button
              onClick={onBack}
              className="inline-flex items-center text-sm text-slate-600 hover:text-slate-800 
                       transition-colors duration-200 px-2 py-1 active:scale-95"
            >
              Back
            </button>
          </div>

          <div className="text-center mb-6 sm:mb-8">
            <div className="text-3xl sm:text-4xl mb-2">{getGameModeIcon()}</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-2 px-2">
              {getGameModeTitle()}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 px-2">
              Choose difficulty level
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto">
            {(["easy", "medium", "hard"] as Difficulty[]).map((diff) => {
              const info = getDifficultyInfo(diff);
              return (
                <button
                  key={diff}
                  onClick={() => onDifficultySelect(diff)}
                  className={`group p-4 sm:p-6 border-2 border-slate-200 rounded-lg sm:rounded-xl 
                           ${getColorClasses(info.color)}
                           transition-all duration-200 text-left active:scale-95`}
                >
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">
                    {info.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-800 mb-2">
                    {info.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600">
                    {info.description}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DifficultySelection;
