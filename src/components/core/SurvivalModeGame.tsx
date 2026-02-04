import React, { useState, useCallback, useEffect } from "react";
import FillMissingLettersGame from "@/games/fill-missing/FillMissingLettersGame";
import WordHintGame from "@/games/word-hint/WordHintGame";
import LoadingSpinner from "@/components/shared/LoadingSpinner";
import type { Difficulty, Category } from "@/constants/wordBank";

type GameMode = "fill-missing" | "word-hint";

interface SurvivalModeGameProps {
  gameMode: GameMode;
  category: Category;
  onGameComplete: (score: {
    correct: number;
    wrong: number;
    totalRounds: number;
    lives: number;
  }) => void;
  onBack: () => void;
}

const SurvivalModeGame = ({
  gameMode,
  category,
  onGameComplete,
  onBack,
}: SurvivalModeGameProps) => {
  const [currentRound, setCurrentRound] = useState(1);
  const [totalRounds] = useState(20);
  const [lives, setLives] = useState(3);
  const [score, setScore] = useState({ correct: 0, wrong: 0 });
  const [isTransitioning, setIsTransitioning] = useState(false);

  // คำนวณ difficulty ตาม round ปัจจุบัน
  const getCurrentDifficulty = (): Difficulty => {
    if (currentRound <= 7) return "easy";
    if (currentRound <= 14) return "medium";
    return "hard";
  };

  const handleRoundComplete = useCallback(
    (roundScore: { correct: number; wrong: number }) => {
      setScore((prevScore) => {
        const newScore = {
          correct: prevScore.correct + roundScore.correct,
          wrong: prevScore.wrong + roundScore.wrong,
        };

        // ลด lives ถ้าตอบผิด
        if (roundScore.wrong > 0) {
          setLives((prevLives) => {
            const newLives = prevLives - 1;

            // Game Over ถ้า lives หมด
            if (newLives <= 0) {
              onGameComplete({
                ...newScore,
                totalRounds: currentRound,
                lives: 0,
              });
              return 0;
            }

            // ตรวจสอบว่าจบ 20 รอบหรือยัง
            if (currentRound >= totalRounds) {
              onGameComplete({
                ...newScore,
                totalRounds: currentRound,
                lives: newLives,
              });
              return newLives;
            }

            // ไปรอบถัดไป
            setIsTransitioning(true);
            setTimeout(() => {
              setCurrentRound((prev) => prev + 1);
              setIsTransitioning(false);
            }, 1000);

            return newLives;
          });
        } else {
          // ไม่มีการตอบผิด
          // ตรวจสอบว่าจบ 20 รอบหรือยัง
          if (currentRound >= totalRounds) {
            setLives((prevLives) => {
              onGameComplete({
                ...newScore,
                totalRounds: currentRound,
                lives: prevLives,
              });
              return prevLives;
            });
            return newScore;
          }

          // ไปรอบถัดไป
          setIsTransitioning(true);
          setTimeout(() => {
            setCurrentRound((prev) => prev + 1);
            setIsTransitioning(false);
          }, 1000);
        }

        return newScore;
      });
    },
    [currentRound, totalRounds, onGameComplete],
  );

  if (isTransitioning) {
    return <LoadingSpinner />;
  }

  const currentDifficulty = getCurrentDifficulty();

  return (
    <div className="min-h-[600px] flex items-center justify-center px-2 py-4">
      <div className="max-w-4xl w-full space-y-3 sm:space-y-4">
        {/* Survival Mode Status Bar */}
        <div className="bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg sm:rounded-xl p-3 sm:p-4 text-white shadow-lg">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
            <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl">🏆</span>
                <div>
                  <div className="text-xs font-medium opacity-90">
                    SURVIVAL MODE
                  </div>
                  <div className="text-base sm:text-lg font-bold">
                    Round {currentRound} / {totalRounds}
                  </div>
                </div>
              </div>

              <div className="h-6 sm:h-8 w-px bg-white/30 hidden sm:block"></div>

              <div>
                <div className="text-xs font-medium opacity-90">DIFFICULTY</div>
                <div className="text-xs sm:text-sm font-bold uppercase">
                  {currentDifficulty}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 sm:gap-6 w-full sm:w-auto justify-between sm:justify-end">
              <div className="text-left sm:text-right">
                <div className="text-xs font-medium opacity-90">SCORE</div>
                <div className="text-base sm:text-lg font-bold">
                  {score.correct} / {totalRounds}
                </div>
              </div>

              <div className="text-left sm:text-right">
                <div className="text-xs font-medium opacity-90">LIVES</div>
                <div className="text-xl sm:text-2xl">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <span key={i}>{i < lives ? "❤️" : "🖤"}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Game Component */}
        {gameMode === "fill-missing" && (
          <FillMissingLettersGame
            key={`round-${currentRound}`}
            difficulty={currentDifficulty}
            category={category}
            totalRounds={1}
            onGameComplete={handleRoundComplete}
            onBack={onBack}
          />
        )}

        {gameMode === "word-hint" && (
          <WordHintGame
            key={`round-${currentRound}`}
            difficulty={currentDifficulty}
            category={category}
            totalRounds={1}
            onGameComplete={handleRoundComplete}
            onBack={onBack}
          />
        )}
      </div>
    </div>
  );
};

export default SurvivalModeGame;
