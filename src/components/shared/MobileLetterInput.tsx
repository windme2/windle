import React, { useRef, useEffect, useState } from 'react';
import { getDeviceType } from '@/lib/deviceDetection';

interface MobileLetterInputProps {
  onLetterPress: (letter: string) => void;
  onBackspace: () => void;
  disabled: boolean;
  gameStatus: 'playing' | 'won' | 'lost';
}

const MobileLetterInput = ({ onLetterPress, onBackspace, disabled, gameStatus }: MobileLetterInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState('');
  const deviceType = getDeviceType();

  // Auto-focus the hidden input on mobile
  useEffect(() => {
    if (deviceType === 'mobile' && !disabled && gameStatus === 'playing') {
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [disabled, gameStatus, deviceType]);

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toUpperCase();
    const lastChar = value.slice(-1);
    
    if (value.length > inputValue.length) {
      // Character added
      if (lastChar.match(/[A-Z]/)) {
        onLetterPress(lastChar);
      }
    } else if (value.length < inputValue.length) {
      // Character removed (backspace)
      onBackspace();
    }
    
    setInputValue('');
    e.target.value = '';
  };

  // Handle special keys
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace') {
      e.preventDefault();
      onBackspace();
    }
  };

  // Re-focus when game state changes
  useEffect(() => {
    if (deviceType === 'mobile' && gameStatus === 'playing' && !disabled) {
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [gameStatus]);

  if (deviceType !== 'mobile') {
    return null; // Don't render on desktop/tablet
  }

  return (
    <div className="relative">
      {/* Hidden input for mobile keyboard */}
      <input
        ref={inputRef}
        type="text"
        className="absolute opacity-0 pointer-events-none -z-10"
        style={{ left: '-9999px' }}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        disabled={disabled || gameStatus !== 'playing'}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="characters"
        spellCheck={false}
      />
      
      {/* Visible prompt for mobile users */}
      {gameStatus === 'playing' && !disabled && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
          <div className="flex items-center justify-center text-blue-800">
            <div className="text-2xl mr-2">📱</div>
            <div className="text-center">
              <p className="font-medium">Type on your keyboard</p>
              <p className="text-sm text-blue-600">Use your device keyboard to enter letters</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileLetterInput;