import React, { useEffect } from "react";
import EnglishKeyboard from "@/components/shared/EnglishKeyboard";
import MobileLetterInput from "@/components/shared/MobileLetterInput";
import LoadingSpinner from "@/components/shared/LoadingSpinner";
import { LevelCompleteScreen } from "@/components/core";
import HintDisplay from "./HintDisplay";
import WordDisplay from "./WordDisplay";
import WrongLettersDisplay from "./WrongLettersDisplay";
import { useWordHintGame } from "@/hooks/useWordHintGame";
import { type Difficulty, type Category } from "@/constants/wordBank";

interface WordHintGameProps {
  difficulty: Difficulty;
  category: Category;
  onGameComplete: (score: { correct: number; wrong: number }) => void;
  onBack?: () => void;
  totalRounds?: number; // จำนวนรอบทั้งหมด (default = 5 สำหรับ Quick Play)
}

const WordHintGame = ({
  difficulty,
  category,
  onGameComplete,
  onBack,
  totalRounds = 5,
}: WordHintGameProps) => {
  const {
    currentHint,
    userGuess,
    gameStatus,
    attempts,
    maxAttempts,
    currentRound,
    totalRounds: actualTotalRounds,
    score,
    wrongLetters,
    correctLetters,
    isComplete,
    showSuccess,
    isLoading,
    timeLeft,
    timerActive,
    handleLetterInput,
  } = useWordHintGame(difficulty, category, totalRounds);

  useEffect(() => {
    if (isComplete) {
      onGameComplete(score);
    }
  }, [isComplete, score, onGameComplete]);

  const handleBackspace = () => {
    return;
  };

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (gameStatus !== "playing") return;

      const key = event.key.toUpperCase();

      if (/^[A-Z]$/.test(key)) {
        event.preventDefault();
        if (!wrongLetters.has(key) && !correctLetters.has(key)) {
          handleLetterInput(key);
        }
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [gameStatus, wrongLetters, correctLetters, handleLetterInput]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isComplete) {
    return (
      <LevelCompleteScreen
        correctAnswers={score.correct}
        totalQuestions={totalRounds}
        onRestart={() => window.location.reload()}
        onBack={onBack}
      />
    );
  }

  return (
    <div className="min-h-[600px] flex items-center justify-center px-2 py-4">
      <div className="max-w-4xl w-full">
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-slate-100 p-4 sm:p-6 space-y-4 sm:space-y-6">
          {/* Header row with back button, round info, and timer */}
          <div className="flex items-center justify-between gap-2">
            <div className="flex-1 min-w-0">
              {onBack && (
                <button
                  onClick={onBack}
                  className="inline-flex items-center text-sm text-slate-600 hover:text-slate-800 
                         transition-colors duration-200 px-2 py-1 active:scale-95"
                >
                  Back
                </button>
              )}
            </div>

            {actualTotalRounds > 1 && (
              <div className="flex-1 text-center text-slate-600 min-w-0">
                <div className="text-sm sm:text-base md:text-lg font-medium whitespace-nowrap">
                  Round {currentRound} of {actualTotalRounds}
                </div>
              </div>
            )}

            {/* Timer Display */}
            <div className="flex-1 flex justify-end min-w-0">
              <div
                className={`inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm ${
                  timeLeft <= 3
                    ? "bg-red-100 text-red-700 border border-red-200"
                    : timeLeft <= 6
                      ? "bg-orange-100 text-orange-700 border border-orange-200"
                      : "bg-blue-100 text-blue-700 border border-blue-200"
                }`}
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="font-medium">{timeLeft}s</span>
              </div>
            </div>
          </div>

          {/* Score Info */}
          <div className="text-center text-slate-600 text-xs sm:text-sm space-y-1">
            <div>
              Score: {score.correct} correct, {score.wrong} wrong
            </div>
            <div>
              Wrong attempts: {attempts}/{maxAttempts}
            </div>
          </div>

          <HintDisplay hint={currentHint} />

          <WordDisplay userGuess={userGuess} gameStatus={gameStatus} />

          <div className="text-center text-xs sm:text-sm text-slate-500 px-2">
            <span className="md:hidden">
              Use your device keyboard to type letters
            </span>
            <span className="hidden md:inline">
              Type letters using your keyboard or click the virtual keyboard
              below
            </span>
          </div>

          <WrongLettersDisplay wrongLetters={wrongLetters} />

          {/* Mobile Letter Input */}
          <MobileLetterInput
            onLetterPress={handleLetterInput}
            onBackspace={handleBackspace}
            disabled={gameStatus !== "playing"}
            gameStatus={gameStatus}
          />

          {/* Virtual Keyboard - Show on Desktop, Hide on Mobile */}
          <div className="hidden md:block">
            <EnglishKeyboard
              onLetterPress={handleLetterInput}
              onBackspace={handleBackspace}
              disabled={gameStatus !== "playing"}
              wrongLetters={wrongLetters}
              correctLetters={correctLetters}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordHintGame;
