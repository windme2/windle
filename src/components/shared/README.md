# Shared Components

Component ที่ใช้ร่วมกันระหว่างทั้งสองเกม

## Components

### EnglishKeyboard
Virtual keyboard สำหรับแสดงบน desktop
- รองรับ haptic feedback บน mobile
- แสดงสีต่างกันสำหรับตัวอักษรที่ถูก/ผิด
- มีปุ่ม Backspace

**Props:**
```typescript
interface EnglishKeyboardProps {
  onLetterPress: (letter: string) => void;
  onBackspace: () => void;
  disabled: boolean;
  wrongLetters?: Set<string>;
  correctLetters?: Set<string>;
}
```

### MobileLetterInput
Hidden input สำหรับรับ input จาก keyboard บน mobile device
- Auto-focus บน mobile
- แสดงข้อความแนะนำให้ใช้ keyboard ของเครื่อง
- ซ่อนตัวเองบน desktop/tablet

**Props:**
```typescript
interface MobileLetterInputProps {
  onLetterPress: (letter: string) => void;
  onBackspace: () => void;
  disabled: boolean;
  gameStatus: 'playing' | 'won' | 'lost';
}
```

### LoadingSpinner
แสดง loading animation ขณะโหลดข้อมูล

## Usage

```tsx
import { EnglishKeyboard, MobileLetterInput, LoadingSpinner } from '@/components/shared';

// หรือ
import EnglishKeyboard from '@/components/shared/EnglishKeyboard';
import MobileLetterInput from '@/components/shared/MobileLetterInput';
import LoadingSpinner from '@/components/shared/LoadingSpinner';
```
