import React, { useState, useEffect, useCallback } from "react";
import EnglishKeyboard from "@/components/shared/EnglishKeyboard";
import MobileLetterInput from "@/components/shared/MobileLetterInput";
import LoadingSpinner from "@/components/shared/LoadingSpinner";
import { useToast } from "@/hooks/use-toast";
import {
  getWordsByCategoryAndDifficulty,
  type Difficulty,
  type Category,
} from "@/constants/wordBank";

interface FillMissingLettersGameProps {
  difficulty: Difficulty;
  category: Category;
  onGameComplete: (score: { correct: number; wrong: number }) => void;
  onBack?: () => void;
  totalRounds?: number; // จำนวนรอบทั้งหมด (default = 5 สำหรับ Quick Play)
}

const FillMissingLettersGame = ({
  difficulty,
  category,
  onGameComplete,
  onBack,
  totalRounds = 5,
}: FillMissingLettersGameProps) => {
  const [currentWord, setCurrentWord] = useState("");
  const [currentHint, setCurrentHint] = useState("");
  const [displayWord, setDisplayWord] = useState("");
  const [userGuess, setUserGuess] = useState("");
  const [gameStatus, setGameStatus] = useState<"playing" | "won" | "lost">(
    "playing",
  );
  const [usedWords, setUsedWords] = useState<Set<string>>(new Set());
  const [currentRound, setCurrentRound] = useState(1);
  const [score, setScore] = useState({ correct: 0, wrong: 0 });
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [wrongAttempts, setWrongAttempts] = useState(0);
  const [maxWrongAttempts] = useState(3);
  const { toast } = useToast();

  const getWordsForDifficultyAndCategory = (
    diff: Difficulty,
    cat: Category,
  ) => {
    return getWordsByCategoryAndDifficulty(cat, diff);
  };

  const generateWordWithMissingLetters = (
    word: string,
    difficulty: Difficulty,
  ) => {
    let lettersToHide = 0;

    switch (difficulty) {
      case "easy":
        lettersToHide = 2; // Always hide exactly 2 letters
        break;
      case "medium":
        lettersToHide = Math.min(4, Math.max(3, Math.floor(word.length * 0.5))); // Hide 3-4 letters
        break;
      case "hard":
        lettersToHide = Math.min(6, Math.max(5, Math.floor(word.length * 0.6))); // Hide 5-6 letters
        break;
    }

    const indices = Array.from({ length: word.length }, (_, i) => i);
    const shuffledIndices = indices.sort(() => Math.random() - 0.5);
    const hiddenIndices = shuffledIndices.slice(0, lettersToHide);

    let displayWord = "";
    for (let i = 0; i < word.length; i++) {
      if (hiddenIndices.includes(i)) {
        displayWord += "_";
      } else {
        displayWord += word[i];
      }
    }

    return displayWord;
  };

  const selectNewWord = useCallback(() => {
    const availableWords = getWordsForDifficultyAndCategory(
      difficulty,
      category,
    ).filter((item) => !usedWords.has(item.word));

    if (availableWords.length === 0) {
      setUsedWords(new Set());
      const allWords = getWordsForDifficultyAndCategory(difficulty, category);
      if (allWords.length === 0) {
        console.warn("No words available for this category and difficulty");
        return;
      }
      const randomIndex = Math.floor(Math.random() * allWords.length);
      const selectedWord = allWords[randomIndex];
      setCurrentWord(selectedWord.word);
      setCurrentHint(selectedWord.hint);
      const wordWithMissing = generateWordWithMissingLetters(
        selectedWord.word,
        difficulty,
      );
      setDisplayWord(wordWithMissing);
      setUserGuess(wordWithMissing);
      setUsedWords(new Set([selectedWord.word]));
    } else {
      const randomIndex = Math.floor(Math.random() * availableWords.length);
      const selectedWord = availableWords[randomIndex];
      setCurrentWord(selectedWord.word);
      setCurrentHint(selectedWord.hint);
      const wordWithMissing = generateWordWithMissingLetters(
        selectedWord.word,
        difficulty,
      );
      setDisplayWord(wordWithMissing);
      setUserGuess(wordWithMissing);
      setUsedWords((prev) => new Set(prev).add(selectedWord.word));
    }

    setGameStatus("playing");
  }, [difficulty, category, usedWords]); // Add usedWords back to track properly

  // Auto-focus management for mobile
  useEffect(() => {
    // Prevent zoom on iOS when focusing input
    const viewport = document.querySelector("meta[name=viewport]");
    const originalContent = viewport?.getAttribute("content");

    if (viewport && /iPhone|iPad|iPod/i.test(navigator.userAgent)) {
      viewport.setAttribute(
        "content",
        "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
      );
    }

    return () => {
      if (viewport && originalContent) {
        viewport.setAttribute("content", originalContent);
      }
    };
  }, []);

  useEffect(() => {
    if (userGuess && !userGuess.includes("_") && gameStatus === "playing") {
      if (userGuess === currentWord) {
        setGameStatus("won");
        const newScore = { ...score, correct: score.correct + 1 };
        setScore(newScore);
        toast({
          title: "🎉 Correct!",
          description: `The word is "${currentWord}"`,
        });

        // Auto progress to next round after winning
        setTimeout(() => {
          if (currentRound >= totalRounds) {
            onGameComplete(newScore);
          } else {
            setIsTransitioning(true);
            setTimeout(() => {
              setCurrentRound((prev) => prev + 1);
              selectNewWord();
              setWrongAttempts(0);
              setIsTransitioning(false);
            }, 2000);
          }
        }, 2000);
      } else {
        const newWrongAttempts = wrongAttempts + 1;
        setWrongAttempts(newWrongAttempts);

        if (newWrongAttempts >= maxWrongAttempts) {
          setGameStatus("lost");
          const newScore = { ...score, wrong: score.wrong + 1 };
          setScore(newScore);
          toast({
            title: "😢 Game Over",
            description: `The correct word was "${currentWord}"`,
            variant: "destructive",
          });

          // Auto progress to next round after losing
          setTimeout(() => {
            if (currentRound >= totalRounds) {
              onGameComplete(newScore);
            } else {
              setIsTransitioning(true);
              setTimeout(() => {
                setCurrentRound((prev) => prev + 1);
                selectNewWord();
                setWrongAttempts(0);
                setIsTransitioning(false);
              }, 2000);
            }
          }, 2000);
        } else {
          toast({
            title: "❌ Wrong answer",
            description: `Try again! ${maxWrongAttempts - newWrongAttempts} attempts left`,
            variant: "destructive",
          });
          // Reset the guess to display word for another attempt
          setUserGuess(displayWord);
        }
      }
    }
  }, [
    userGuess,
    currentWord,
    toast,
    gameStatus,
    wrongAttempts,
    maxWrongAttempts,
    displayWord,
    currentRound,
    totalRounds,
    score,
    onGameComplete,
    selectNewWord,
  ]);

  // Initialize game when difficulty or category changes
  useEffect(() => {
    setUsedWords(new Set());
    setCurrentRound(1);
    setScore({ correct: 0, wrong: 0 });
    setWrongAttempts(0);

    // Call selectNewWord directly instead of using it in dependencies
    const initializeGame = () => {
      const availableWords = getWordsForDifficultyAndCategory(
        difficulty,
        category,
      );
      if (availableWords.length === 0) {
        console.warn("No words available for this category and difficulty");
        return;
      }
      const randomIndex = Math.floor(Math.random() * availableWords.length);
      const selectedWord = availableWords[randomIndex];
      setCurrentWord(selectedWord.word);
      setCurrentHint(selectedWord.hint);
      const wordWithMissing = generateWordWithMissingLetters(
        selectedWord.word,
        difficulty,
      );
      setDisplayWord(wordWithMissing);
      setUserGuess(wordWithMissing);
      setUsedWords(new Set([selectedWord.word]));
      setGameStatus("playing");
    };

    initializeGame();
  }, [difficulty, category]);

  const handleLetterInput = (letter: string) => {
    if (gameStatus !== "playing" || isTransitioning) return;

    // หาตำแหน่ง _ ตัวแรกที่ว่างอยู่
    const underscoreIndex = userGuess.indexOf("_");
    if (underscoreIndex !== -1) {
      // แทนที่ _ ด้วยตัวอักษรที่พิมพ์
      const newGuess =
        userGuess.substring(0, underscoreIndex) +
        letter +
        userGuess.substring(underscoreIndex + 1);
      setUserGuess(newGuess);
    }
  };

  const handleBackspace = () => {
    if (gameStatus !== "playing" || isTransitioning) return;

    const guessArray = userGuess.split("");
    for (let i = guessArray.length - 1; i >= 0; i--) {
      if (guessArray[i] !== "_" && displayWord[i] === "_") {
        const newGuess =
          userGuess.substring(0, i) + "_" + userGuess.substring(i + 1);
        setUserGuess(newGuess);
        break;
      }
    }
  };

  // Add keyboard event listener
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (gameStatus !== "playing" || isTransitioning) return;

      const key = event.key.toUpperCase();

      if (event.key === "Backspace") {
        event.preventDefault();
        // Backspace logic
        const guessArray = userGuess.split("");
        for (let i = guessArray.length - 1; i >= 0; i--) {
          if (guessArray[i] !== "_" && displayWord[i] === "_") {
            const newGuess =
              userGuess.substring(0, i) + "_" + userGuess.substring(i + 1);
            setUserGuess(newGuess);
            break;
          }
        }
      } else if (/^[A-Z]$/.test(key)) {
        event.preventDefault();
        // Letter input logic
        const underscoreIndex = userGuess.indexOf("_");
        if (underscoreIndex !== -1) {
          const newGuess =
            userGuess.substring(0, underscoreIndex) +
            key +
            userGuess.substring(underscoreIndex + 1);
          setUserGuess(newGuess);
        }
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [gameStatus, isTransitioning, userGuess, displayWord]);

  const renderLetterBox = (letter: string, index: number) => {
    const isOriginalLetter = displayWord[index] !== "_";
    const isUserInput = !isOriginalLetter && letter !== "_";

    // When lost, show the correct answer in the boxes
    const displayLetter = gameStatus === "lost" ? currentWord[index] : letter;
    const isCorrectAnswer = gameStatus === "lost" && displayWord[index] === "_";

    let bgColor = "bg-white border-2 border-slate-200";
    let textColor = "text-slate-700";

    if (gameStatus === "won") {
      bgColor = "bg-emerald-50 border-emerald-300";
      textColor = "text-emerald-700";
    } else if (gameStatus === "lost") {
      if (isCorrectAnswer) {
        // Show correct answer in RED for missed letters
        bgColor = "bg-red-100 border-red-400";
        textColor = "text-red-700";
      } else {
        // Original hint letters stay normal (not red)
        bgColor = "bg-slate-100 border-slate-300";
        textColor = "text-slate-800";
      }
    } else if (isOriginalLetter) {
      // Hint letters in black
      bgColor = "bg-slate-100 border-slate-300";
      textColor = "text-black";
    } else if (isUserInput) {
      // User input letters in blue
      bgColor = "bg-blue-50 border-blue-200";
      textColor = "text-blue-600";
    }

    const wordLength = userGuess.length;
    let sizeClasses = "";

    if (wordLength <= 4) {
      sizeClasses = "w-14 h-14 sm:w-16 sm:h-16 text-xl sm:text-2xl";
    } else if (wordLength <= 6) {
      sizeClasses = "w-12 h-12 sm:w-14 sm:h-14 text-lg sm:text-xl";
    } else if (wordLength <= 8) {
      sizeClasses = "w-10 h-10 sm:w-12 sm:h-12 text-base sm:text-lg";
    } else {
      sizeClasses = "w-8 h-8 sm:w-10 sm:h-10 text-sm sm:text-base";
    }

    return (
      <div
        key={index}
        className={`
          ${sizeClasses} flex items-center justify-center
          font-bold rounded-lg transition-all duration-300
          ${bgColor} ${textColor}
          ${displayLetter !== "_" ? "animate-scale-in" : ""}
        `}
      >
        {displayLetter === "_" ? "" : displayLetter}
      </div>
    );
  };

  if (isTransitioning) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-[600px] flex items-center justify-center px-2 py-4">
      <div className="max-w-4xl w-full">
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-slate-100 p-4 sm:p-6 space-y-4 sm:space-y-6">
          {/* Header with Back button and Round info */}
          <div className="flex items-center justify-between">
            <div className="flex-1">
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

            {totalRounds > 1 && (
              <div className="flex-1 text-center text-slate-600">
                <div className="text-sm sm:text-base md:text-lg font-medium">
                  Round {currentRound} of {totalRounds}
                </div>
              </div>
            )}

            <div className="flex-1"></div>
          </div>

          {/* Score Info */}
          <div className="text-center text-slate-600 text-xs sm:text-sm space-y-1">
            <div>
              Score: {score.correct} correct, {score.wrong} wrong
            </div>
            <div>
              Wrong attempts: {wrongAttempts}/{maxWrongAttempts}
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-lg sm:rounded-xl p-4 sm:p-6">
            <h3 className="text-base sm:text-lg font-semibold text-blue-800 mb-2">
              Hint:
            </h3>
            <p className="text-sm sm:text-base text-blue-700">{currentHint}</p>
          </div>

          <div className="flex justify-center items-center gap-2 mb-4 sm:mb-8 px-2 sm:px-4 overflow-x-auto">
            <div className="flex gap-1 sm:gap-2 min-w-fit">
              {userGuess
                .split("")
                .map((letter, index) => renderLetterBox(letter, index))}
            </div>
          </div>

          <div className="text-center text-xs sm:text-sm text-slate-500 px-2">
            <span className="md:hidden">
              Use your device keyboard to type letters
            </span>
            <span className="hidden md:inline">
              Type letters using your keyboard or click the virtual keyboard
              below
            </span>
          </div>

          {/* Mobile Letter Input */}
          <MobileLetterInput
            onLetterPress={handleLetterInput}
            onBackspace={handleBackspace}
            disabled={gameStatus !== "playing"}
            gameStatus={gameStatus}
          />

          {gameStatus === "won" && (
            <div className="text-emerald-600 font-semibold text-base sm:text-lg md:text-xl text-center animate-fade-in px-2">
              🎉 Perfect! Well done!
            </div>
          )}

          {gameStatus === "lost" && (
            <div className="text-red-600 font-semibold text-base sm:text-lg md:text-xl text-center animate-fade-in px-2">
              😢 The correct answer is shown above!
            </div>
          )}

          {/* Virtual Keyboard - Show on Desktop, Hide on Mobile */}
          <div className="hidden md:block">
            <EnglishKeyboard
              onLetterPress={handleLetterInput}
              onBackspace={handleBackspace}
              disabled={gameStatus !== "playing"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FillMissingLettersGame;
