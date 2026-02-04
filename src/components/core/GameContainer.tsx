import React, { useState } from "react";
import GameMenu from "./GameMenu";
import GameModeSelector from "./GameModeSelector";
import GameModeInfo from "./GameModeInfo";
import CategorySelector from "./CategorySelector";
import DifficultySelection from "./DifficultySelection";
import LevelCompleteScreen from "./LevelCompleteScreen";
import SurvivalModeGame from "./SurvivalModeGame";
import FillMissingLettersGame from "@/games/fill-missing/FillMissingLettersGame";
import WordHintGame from "@/games/word-hint/WordHintGame";
import type { Difficulty, Category } from "@/constants/wordBank";

type GameMode = "fill-missing" | "word-hint";
type PlayMode = "quick" | "survival";
type GameScreen =
  | "menu"
  | "mode-select"
  | "tutorial"
  | "category"
  | "difficulty"
  | "playing"
  | "complete";

const GameContainer = () => {
  // Game navigation state
  const [gameScreen, setGameScreen] = useState<GameScreen>("menu");
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Game configuration state
  const [selectedMode, setSelectedMode] = useState<GameMode | null>(null);
  const [selectedPlayMode, setSelectedPlayMode] = useState<PlayMode | null>(
    null,
  );
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null,
  );
  const [selectedDifficulty, setSelectedDifficulty] =
    useState<Difficulty | null>(null);

  // Game result state
  const [levelScore, setLevelScore] = useState({ correct: 0, wrong: 0 });
  const [totalRounds, setTotalRounds] = useState(1);

  // Smooth transition between screens
  const transitionToScreen = (screen: GameScreen) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setGameScreen(screen);
      setIsTransitioning(false);
    }, 200);
  };

  // Navigation handlers
  const handleGameSelect = (mode: GameMode) => {
    setSelectedMode(mode);
    transitionToScreen("mode-select");
  };

  const handlePlayModeSelect = (playMode: PlayMode) => {
    setSelectedPlayMode(playMode);
    transitionToScreen("tutorial");
  };

  const handleTutorialContinue = () => {
    transitionToScreen("category");
  };

  const handleCategorySelect = (category: Category) => {
    setSelectedCategory(category);
  };

  // Conditional navigation - Survival mode skips difficulty selection
  const handleCategoryContinue = () => {
    if (selectedPlayMode === "survival") {
      transitionToScreen("playing");
    } else {
      transitionToScreen("difficulty");
    }
  };

  const handleDifficultySelect = (difficulty: Difficulty) => {
    setSelectedDifficulty(difficulty);
  };

  // Quick play completion
  const handleGameComplete = (score: { correct: number; wrong: number }) => {
    setLevelScore(score);
    setTotalRounds(5);
    transitionToScreen("complete");
  };

  const handleSurvivalGameComplete = (result: {
    correct: number;
    wrong: number;
    totalRounds: number;
    lives: number;
  }) => {
    setLevelScore({ correct: result.correct, wrong: result.wrong });
    setTotalRounds(result.totalRounds);
    transitionToScreen("complete");
  };

  const handlePlayAgain = () => {
    transitionToScreen("playing");
  };

  const handleBackToMenu = () => {
    transitionToScreen("menu");
    setTimeout(() => {
      setSelectedMode(null);
      setSelectedPlayMode(null);
      setSelectedCategory(null);
      setSelectedDifficulty(null);
      setLevelScore({ correct: 0, wrong: 0 });
    }, 200);
  };

  const handleBackFromModeSelect = () => {
    transitionToScreen("menu");
    setTimeout(() => setSelectedMode(null), 200);
  };

  const handleBackFromTutorial = () => {
    transitionToScreen("mode-select");
  };

  const handleBackFromCategory = () => {
    transitionToScreen("tutorial");
  };

  const handleBackFromDifficulty = () => {
    transitionToScreen("category");
  };

  const handleBackFromGame = () => {
    transitionToScreen("difficulty");
  };

  return (
    <div>
      {gameScreen !== "menu" && (
        <div className="fixed top-2 left-2 sm:top-4 sm:left-4 z-50">
          <button
            onClick={handleBackToMenu}
            className="flex items-center gap-1 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/90 backdrop-blur-sm 
                       rounded-lg sm:rounded-xl shadow-md border border-slate-200 
                       hover:bg-white hover:shadow-lg transition-all duration-200
                       text-slate-800 hover:text-blue-600 active:scale-95\"
          >
            <span className="text-xl sm:text-2xl">🎯</span>
            <span className="text-base sm:text-xl font-bold">Windle</span>
          </button>
        </div>
      )}

      <div
        className={`transition-opacity duration-200 ${isTransitioning ? "opacity-0" : "opacity-100"}`}
      >
        {gameScreen === "menu" && <GameMenu onGameSelect={handleGameSelect} />}

        {gameScreen === "mode-select" && selectedMode && (
          <GameModeSelector
            gameType={selectedMode}
            onModeSelect={handlePlayModeSelect}
            onBack={handleBackFromModeSelect}
          />
        )}

        {gameScreen === "tutorial" && selectedMode && selectedPlayMode && (
          <GameModeInfo
            gameMode={selectedMode}
            onContinue={handleTutorialContinue}
            onBack={handleBackFromTutorial}
          />
        )}

        {gameScreen === "category" && selectedMode && selectedPlayMode && (
          <CategorySelector
            selectedCategory={selectedCategory || "animals"}
            onCategoryChange={handleCategorySelect}
            onContinue={handleCategoryContinue}
            onBack={handleBackFromCategory}
          />
        )}

        {gameScreen === "difficulty" &&
          selectedMode &&
          selectedPlayMode === "quick" &&
          selectedCategory && (
            <DifficultySelection
              gameMode={selectedMode}
              onDifficultySelect={(diff) => {
                handleDifficultySelect(diff);
                transitionToScreen("playing");
              }}
              onBack={handleBackFromDifficulty}
            />
          )}

        {gameScreen === "playing" &&
          selectedMode &&
          selectedPlayMode &&
          selectedCategory && (
            <>
              {selectedPlayMode === "quick" && selectedDifficulty && (
                <>
                  {selectedMode === "fill-missing" && (
                    <FillMissingLettersGame
                      difficulty={selectedDifficulty}
                      category={selectedCategory}
                      totalRounds={5}
                      onGameComplete={handleGameComplete}
                      onBack={handleBackFromGame}
                    />
                  )}
                  {selectedMode === "word-hint" && (
                    <WordHintGame
                      difficulty={selectedDifficulty}
                      category={selectedCategory}
                      totalRounds={5}
                      onGameComplete={handleGameComplete}
                      onBack={handleBackFromGame}
                    />
                  )}
                </>
              )}

              {selectedPlayMode === "survival" && (
                <SurvivalModeGame
                  gameMode={selectedMode}
                  category={selectedCategory}
                  onGameComplete={handleSurvivalGameComplete}
                  onBack={handleBackFromGame}
                />
              )}
            </>
          )}

        {gameScreen === "complete" && (
          <LevelCompleteScreen
            correctAnswers={levelScore.correct}
            totalQuestions={totalRounds}
            onRestart={handlePlayAgain}
            onBack={handleBackToMenu}
          />
        )}
      </div>
    </div>
  );
};

export default GameContainer;
