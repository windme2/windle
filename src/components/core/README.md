# Core Components

This folder contains core game orchestration and navigation components that handle the game flow and user interface for game selection, configuration, and completion screens.

## Components

### GameMenu.tsx
Main menu component for game mode selection.
- Displays available game modes (Fill Missing Letters, Word Hint)
- Handles game mode selection
- Entry point for the game

### CategorySelector.tsx
Category selection interface.
- Shows available word categories (Animals, Food, Technology, etc.)
- Allows single or all-category selection
- Passes selected category to game

### DifficultySelection.tsx
Difficulty level selection screen.
- Three difficulty levels: Easy, Medium, Hard
- Shows description for each level
- Themed with purple gradient to match Play Again button

### LevelCompleteScreen.tsx
Results screen shown after completing a level.
- Displays final score and statistics
- Shows correct/wrong answer breakdown
- Play Again button to restart

### GameTutorial.tsx
Tutorial component for new players.
- Step-by-step guide on how to play
- Interactive walkthrough
- Can be skipped by experienced players

## Usage

These components are imported from the barrel export:

```typescript
import { 
  GameMenu, 
  CategorySelector, 
  DifficultySelection, 
  LevelCompleteScreen,
  GameTutorial 
} from '@/components/core';
```

## Design Patterns

- **State Management**: Components receive state and callbacks via props
- **Composition**: Used by `WordGuessingGame.tsx` orchestrator
- **Consistent UI**: All use Tailwind CSS with shared color scheme
- **Responsive**: Mobile-first design approach

## Adding New Core Components

1. Create component in this folder
2. Add export to `index.ts`
3. Import from `@/components/core` in parent components
4. Follow existing naming and styling conventions
