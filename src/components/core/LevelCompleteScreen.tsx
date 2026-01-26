
import React from 'react';
import type { Difficulty, Category } from '@/constants/wordBank';

interface LevelCompleteScreenProps {
  correctAnswers: number;
  totalQuestions: number;
  onRestart: () => void;
  onBack?: () => void;
  difficulty?: Difficulty;
  category?: Category;
  mode?: 'quick' | 'survival';
  timeTaken?: number;
  maxStreak?: number;
  lives?: number;
}

const LevelCompleteScreen = ({ 
  correctAnswers, 
  totalQuestions, 
  onRestart, 
  onBack
}: LevelCompleteScreenProps) => {
  const percentage = Math.round((correctAnswers / totalQuestions) * 100);
  const wrongAnswers = totalQuestions - correctAnswers;
  
  return (
    <div className="min-h-[600px] flex items-center justify-center bg-slate-50">
      <div className="max-w-4xl w-full p-4">
        <div className="bg-white rounded-2xl shadow-sm p-8 border border-slate-100">
        {/* Back to Menu button */}
        {onBack && (
          <div className="mb-6">
            <button
              onClick={onBack}
              className="inline-flex items-center text-sm text-slate-600 hover:text-slate-800
                         transition-colors duration-200 px-2 py-1"
            >
              Back to Menu
            </button>
          </div>
        )}
        
        <div className="text-center">
          {/* Title */}
          <div className="mb-6">
            <h2 className="text-4xl font-bold text-slate-800 mb-2">
              🎊 Level Complete!
            </h2>
          </div>

          {/* Main Score Display */}
          <div className="text-2xl text-slate-600 mb-8">
            Final Score: {correctAnswers}/{totalQuestions} ({percentage}%)
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 mb-8 max-w-md mx-auto">
            <div className="text-center p-4 bg-emerald-50 rounded-xl border border-emerald-200">
              <div className="text-3xl font-bold text-emerald-600">{correctAnswers}</div>
              <div className="text-emerald-600 text-sm font-medium">Correct</div>
            </div>

            <div className="text-center p-4 bg-red-50 rounded-xl border border-red-200">
              <div className="text-3xl font-bold text-red-600">{wrongAnswers}</div>
              <div className="text-red-600 text-sm font-medium">Wrong</div>
            </div>
          </div>

          {/* Action Button */}
          <button
            onClick={onRestart}
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 
                       text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl 
                       transition-all duration-200 transform hover:scale-105"
          >
            🎮 Play Again
          </button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default LevelCompleteScreen;
