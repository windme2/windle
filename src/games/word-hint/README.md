# Word Hint Game

เกมเดาคำจากข้อความใบ้ - ผู้เล่นต้องพิมพ์ตัวอักษรทีละตัวเพื่อเดาคำที่ถูกต้อง

## Components

- **WordHintGame.tsx** - Main game component
- **HintDisplay.tsx** - แสดงข้อความใบ้
- **WordDisplay.tsx** - แสดงคำที่กำลังเดา (แสดง/ซ่อนตัวอักษร)
- **WrongLettersDisplay.tsx** - แสดงตัวอักษรที่เดาผิด
- **GameStatusDisplay.tsx** - แสดงสถานะเกม (รอบ, คะแนน, ความพยายาม)

## Props

```typescript
interface WordHintGameProps {
  difficulty: Difficulty;  // 'easy' | 'medium' | 'hard'
  category: Category;      // Word category
  onGameComplete: (score: { correct: number; wrong: number }) => void;
  onBack?: () => void;
}
```

## Features

- แสดงข้อความใบ้ให้ผู้เล่นเดา
- พิมพ์ตัวอักษรทีละตัว เดาถูกจะแสดงในคำ
- จำกัดจำนวนครั้งที่เดาผิด (ขึ้นกับความยาว)
- แสดงตัวอักษรที่เดาผิดไปแล้ว
- รองรับ keyboard และ mobile input
- 5 รอบต่อเกม

## Usage

```tsx
import WordHintGame from '@/games/word-hint';

<WordHintGame
  difficulty="easy"
  category="food"
  onGameComplete={(score) => console.log(score)}
/>
```

## Internal Components

### HintDisplay
แสดงข้อความใบ้สำหรับคำปัจจุบัน

### WordDisplay
แสดงคำที่กำลังเดา โดยแสดงเฉพาะตัวอักษรที่เดาถูก

### WrongLettersDisplay
แสดงรายการตัวอักษรที่เดาผิดไปแล้ว

### GameStatusDisplay
แสดงข้อมูลสถานะเกม: รอบปัจจุบัน, คะแนน, จำนวนครั้งที่เดาผิด
