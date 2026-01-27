
import React, { useState } from 'react';
import { 
  GameMenu,
  GameModeInfo, 
  DifficultySelection, 
  CategorySelector, 
  LevelCompleteScreen
} from './core';
import FillMissingLettersGame from '@/games/fill-missing';
import WordHintGame from '@/games/word-hint';
import { useToast } from '@/hooks/use-toast';
import { type Difficulty, type Category } from '@/constants/wordBank';

type GameMode = 'fill-missing' | 'word-hint';
type GameState = 'menu' | 'tutorial' | 'category-selection' | 'difficulty-selection' | 'playing' | 'complete';

const WordGuessingGame = () => {
  const [gameState, setGameState] = useState<GameState>('menu');
  const [gameMode, setGameMode] = useState<GameMode>('fill-missing');
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [difficulty, setDifficulty] = useState<Difficulty>('easy');
  const [score, setScore] = useState({ correct: 0, wrong: 0 });
  const { toast } = useToast();

  const handleGameSelect = (mode: GameMode) => {
    setGameMode(mode);
    setGameState('tutorial');
  };

  const handleTutorialContinue = () => {
    setGameState('category-selection');
  };

  const handleTutorialBack = () => {
    setGameState('menu');
  };

  const handleCategorySelect = (category: Category) => {
    setSelectedCategory(category);
  };

  const handleCategoryContinue = () => {
    setGameState('difficulty-selection');
  };

  const handleDifficultySelect = (diff: Difficulty) => {
    setDifficulty(diff);
    setScore({ correct: 0, wrong: 0 });
    setGameState('playing');
  };

  const handleGameComplete = (finalScore: { correct: number; wrong: number }) => {
    setScore(finalScore);
    setGameState('complete');
    toast({
      title: "🎊 Level Complete!",
      description: `Score: ${finalScore.correct}/5 correct answers`,
    });
  };

  const restartLevel = () => {
    setScore({ correct: 0, wrong: 0 });
    setGameState('playing');
  };

  const goToMenu = () => {
    setGameState('menu');
    setScore({ correct: 0, wrong: 0 });
  };

  const goBackToCategory = () => {
    setGameState('category-selection');
  };

  const goBackToMenu = () => {
    setGameState('menu');
  };

  const goBackToTutorial = () => {
    setGameState('tutorial');
  };

  const goBackToGame = () => {
    setGameState('playing');
  };

  // Game menu state
  if (gameState === 'menu') {
    return <GameMenu 
      onGameSelect={handleGameSelect} 
    />;
  }

  // Tutorial state
  if (gameState === 'tutorial') {
    return (
      <GameModeInfo 
        gameMode={gameMode}
        onContinue={handleTutorialContinue}
        onBack={handleTutorialBack}
      />
    );
  }

  // Category selection state
  if (gameState === 'category-selection') {
    return (
      <CategorySelector 
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategorySelect}
        onContinue={handleCategoryContinue}
        onBack={goBackToTutorial}
      />
    );
  }

  // Difficulty selection state
  if (gameState === 'difficulty-selection') {
    return (
      <DifficultySelection 
        gameMode={gameMode}
        onDifficultySelect={handleDifficultySelect}
        onBack={goBackToCategory}
      />
    );
  }

  // Level complete state
  if (gameState === 'complete') {
    return (
      <div className="space-y-4">
        <div className="text-center">
          <button
            onClick={goToMenu}
            className="inline-flex items-center text-slate-600 hover:text-slate-800 mb-4
                       transition-all duration-200 shadow-md hover:shadow-lg px-3 py-2 rounded-lg"
          >
            Back to Menu
          </button>
        </div>
        <LevelCompleteScreen 
          correctAnswers={score.correct}
          totalQuestions={5}
          onRestart={restartLevel}
          onBack={() => setGameState('menu')}
        />
      </div>
    );
  }

  // Playing state
  return (
    <div className="max-w-4xl mx-auto space-y-4">
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
        {gameMode === 'fill-missing' ? (
          <FillMissingLettersGame 
            difficulty={difficulty}
            category={selectedCategory}
            onGameComplete={handleGameComplete}
            onBack={goToMenu}
          />
        ) : (
          <WordHintGame 
            difficulty={difficulty}
            category={selectedCategory}
            onGameComplete={handleGameComplete}
            onBack={goToMenu}
          />
        )}
      </div>
    </div>
  );
};

export default WordGuessingGame;
