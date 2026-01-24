
import { useState, useCallback, useEffect } from 'react';
import { WordItem, getWordsByCategoryAndDifficulty, type Difficulty, type Category } from '@/constants/wordBank';
import { useToast } from '@/hooks/use-toast';

export const useWordHintGame = (difficulty: Difficulty, category: Category = 'all', initialTotalRounds: number = 5) => {
  const [currentWord, setCurrentWord] = useState('');
  const [currentHint, setCurrentHint] = useState('');
  const [userGuess, setUserGuess] = useState<string[]>([]);
  const [gameStatus, setGameStatus] = useState<'playing' | 'won' | 'lost'>('playing');
  const [attempts, setAttempts] = useState(0);
  const [maxAttempts] = useState(5);
  const [usedWords, setUsedWords] = useState<Set<string>>(new Set());
  const [currentRound, setCurrentRound] = useState(1);
  const [totalRounds] = useState(initialTotalRounds);
  const [score, setScore] = useState({ correct: 0, wrong: 0 });
  const [wrongLetters, setWrongLetters] = useState<Set<string>>(new Set());
  const [correctLetters, setCorrectLetters] = useState<Set<string>>(new Set());
  const [isComplete, setIsComplete] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10);
  const [timerActive, setTimerActive] = useState(false);
  const { toast } = useToast();

  const getWordsForDifficultyAndCategory = (diff: Difficulty, cat: Category): WordItem[] => {
    return getWordsByCategoryAndDifficulty(cat, diff);
  };

    const selectNewWord = useCallback(() => {
    const availableWords = getWordsForDifficultyAndCategory(difficulty, category).filter(
      item => !usedWords.has(item.word)
    );
    
    if (availableWords.length === 0) {
      // Reset used words only if we've completed a full cycle
      setUsedWords(new Set());
      const allWords = getWordsForDifficultyAndCategory(difficulty, category);
      if (allWords.length === 0) {
        console.warn('No words available for this category and difficulty');
        return;
      }
      const randomIndex = Math.floor(Math.random() * allWords.length);
      const selectedWord = allWords[randomIndex];
      setCurrentWord(selectedWord.word);
      setCurrentHint(selectedWord.hint);
      setUserGuess(new Array(selectedWord.word.length).fill('_'));
      setUsedWords(new Set([selectedWord.word]));
    } else {
      const randomIndex = Math.floor(Math.random() * availableWords.length);
      const selectedWord = availableWords[randomIndex];
      setCurrentWord(selectedWord.word);
      setCurrentHint(selectedWord.hint);
      setUserGuess(new Array(selectedWord.word.length).fill('_'));
      setUsedWords(prev => new Set(prev).add(selectedWord.word));
    }
    
    setGameStatus('playing');
    setAttempts(0);
    setWrongLetters(new Set());
    setCorrectLetters(new Set());
    setShowSuccess(false);
    setIsLoading(false);
    setTimeLeft(10);
    setTimerActive(true);
  }, [difficulty, category, usedWords]); // Add usedWords back to track properly

  const handleLetterInput = (letter: string) => {
    if (gameStatus !== 'playing') return;

    if (currentWord.includes(letter)) {
      const newGuess = [...userGuess];
      let letterFound = false;
      
      for (let i = 0; i < currentWord.length; i++) {
        if (currentWord[i] === letter && newGuess[i] === '_') {
          newGuess[i] = letter;
          letterFound = true;
        }
      }
      
      if (letterFound) {
        setUserGuess(newGuess);
        setCorrectLetters(prev => new Set(prev).add(letter));
        const toastId = toast({
          title: "✅ Correct letter!",
          description: `Letter "${letter}" is in the word`,
        });
        
        // Auto dismiss after 2 seconds
        setTimeout(() => {
          toastId.dismiss();
        }, 2000);
      }
    } else {
      const newWrongLetters = new Set(wrongLetters).add(letter);
      setWrongLetters(newWrongLetters);
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);
      
      if (newAttempts >= maxAttempts) {
        setGameStatus('lost');
        // Show the correct answer when lost
        setUserGuess(currentWord.split(''));
        const newScore = { ...score, wrong: score.wrong + 1 };
        setScore(newScore);
        const toastId = toast({
          title: "😢 You lost!",
          description: `The correct word was "${currentWord}"`,
          variant: "destructive",
        });
        
        // Auto dismiss after 3 seconds
        setTimeout(() => {
          toastId.dismiss();
        }, 3000);
        
        // Show success message after delay
        setTimeout(() => {
          setShowSuccess(true);
        }, 500);
      } else {
        const toastId = toast({
          title: "❌ Wrong letter",
          description: `Letter "${letter}" is not in the word. ${maxAttempts - newAttempts} attempts left`,
          variant: "destructive",
        });
        
        // Auto dismiss after 2 seconds
        setTimeout(() => {
          toastId.dismiss();
        }, 2000);
      }
    }
  };

  const nextRound = useCallback(() => {
    if (currentRound >= totalRounds) {
      setIsComplete(true);
      return score;
    } else {
      setCurrentRound(prev => prev + 1);
      setIsLoading(true);
      // Add delay before selecting new word to show loading
      setTimeout(() => {
        selectNewWord();
      }, 1500);
      return null;
    }
  }, [currentRound, totalRounds, score, selectNewWord]);

  // Timer countdown effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (timerActive && timeLeft > 0 && gameStatus === 'playing') {
      interval = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            setTimerActive(false);
            // Time's up - treat as wrong answer
            setGameStatus('lost');
            setUserGuess(currentWord.split(''));
            const newScore = { ...score, wrong: score.wrong + 1 };
            setScore(newScore);
            toast({
              title: "⏰ Time's up!",
              description: `The correct word was "${currentWord}"`,
              variant: "destructive",
            });
            setTimeout(() => setShowSuccess(true), 500);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timerActive, timeLeft, gameStatus, currentWord, score, toast]);

  // Check if game is complete
  useEffect(() => {
    const isWordComplete = userGuess.every(letter => letter !== '_');
    if (isWordComplete && gameStatus === 'playing') {
      setGameStatus('won');
      setTimerActive(false);
      const newScore = { ...score, correct: score.correct + 1 };
      setScore(newScore);
      
      // Only show toast if not first round
      if (currentRound > 1 || score.correct > 0 || score.wrong > 0) {
        const toastId = toast({
          title: "🎉 Perfect!",
          description: `You guessed the word "${currentWord}"!`,
        });
        
        // Auto dismiss after 3 seconds
        setTimeout(() => {
          toastId.dismiss();
        }, 3000);
      }
      
      // Show success message after delay
      setTimeout(() => {
        setShowSuccess(true);
      }, 500);
    }
  }, [userGuess, gameStatus, currentWord, score, toast]);

  // Auto-progress to next round when game ends with delay
  useEffect(() => {
    if ((gameStatus === 'won' || gameStatus === 'lost') && showSuccess) {
      const timer = setTimeout(() => {
        setShowSuccess(false);
        const finalScore = nextRound();
        if (finalScore) {
          setIsComplete(true);
        }
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [gameStatus, showSuccess, nextRound]);

  // Initialize game when difficulty or category changes
  useEffect(() => {
    setUsedWords(new Set());
    setCurrentRound(1);
    setScore({ correct: 0, wrong: 0 });
    setIsComplete(false);
    setShowSuccess(false);
    setIsLoading(false);
    
    // Call selectNewWord logic directly
    const initializeGame = () => {
      const allWords = getWordsForDifficultyAndCategory(difficulty, category);
      if (allWords.length === 0) {
        console.warn('No words available for this category and difficulty');
        return;
      }
      const randomIndex = Math.floor(Math.random() * allWords.length);
      const selectedWord = allWords[randomIndex];
      setCurrentWord(selectedWord.word);
      setCurrentHint(selectedWord.hint);
      setUserGuess(new Array(selectedWord.word.length).fill('_'));
      setUsedWords(new Set([selectedWord.word]));
      setGameStatus('playing');
      setAttempts(0);
      setWrongLetters(new Set());
      setCorrectLetters(new Set());
      setShowSuccess(false);
      setIsLoading(false);
      setTimeLeft(10);
      setTimerActive(true);
    };
    
    initializeGame();
  }, [difficulty, category]);

  return {
    currentWord,
    currentHint,
    userGuess,
    gameStatus,
    attempts,
    maxAttempts,
    currentRound,
    totalRounds,
    score,
    wrongLetters,
    correctLetters,
    isComplete,
    showSuccess,
    isLoading,
    timeLeft,
    timerActive,
    handleLetterInput,
    nextRound
  };
};
