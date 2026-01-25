# Fill Missing Letters Game

เกมเติมตัวอักษรที่หายไป - ผู้เล่นต้องเติมตัวอักษรลงในช่องว่างเพื่อสร้างคำที่ถูกต้อง

## Components

- **FillMissingLettersGame.tsx** - Main game component

## Props

```typescript
interface FillMissingLettersGameProps {
  difficulty: Difficulty;  // 'easy' | 'medium' | 'hard'
  category: Category;      // Word category
  onGameComplete: (score: { correct: number; wrong: number }) => void;
  onBack?: () => void;
}
```

## Features

- แสดงคำที่ซ่อนตัวอักษรบางตัว (จำนวนขึ้นกับระดับความยาก)
- รองรับ keyboard และ mobile input
- นับคะแนนถูก/ผิด
- จำกัดจำนวนครั้งที่ตอบผิด (3 ครั้ง)
- 5 รอบต่อเกม

## Usage

```tsx
import FillMissingLettersGame from '@/games/fill-missing';

<FillMissingLettersGame
  difficulty="medium"
  category="animals"
  onGameComplete={(score) => console.log(score)}
/>
```
