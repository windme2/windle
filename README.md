# 🎯 Windle

A modern word puzzle game built with React and TypeScript. Challenge yourself with different game modes and difficulty levels!

> **🚀 [Live Demo](#)** - *Coming Soon*

---

## ⚙️ Tech Stack

- **Frontend:** React 18, TypeScript, Vite
- **Styling:** TailwindCSS, shadcn/ui, Radix UI
- **Icons:** Lucide React
- **State Management:** React Hooks

---

## ✨ Features

### 🎮 Game Modes
- 🔤 **Fill Missing Letters** - Complete words by filling in missing letters
- 💡 **Word Hint** - Guess words from given hints
- ⚡ **Quick Play** - 5 rounds at your chosen difficulty
- 🏆 **Survival Mode** - 20 rounds with progressive difficulty (3 lives)

### 🎯 Game Features
- 🎨 **Dark/Light Mode** - Choose your preferred theme or use auto mode
- 📊 **Statistics Tracking** - Track performance, streaks, and high scores
- 🔥 **Streak System** - Build up combos by answering correctly
- ⏱️ **Timer** - Track your solving speed
- 💡 **Hint System** - Get help when stuck (limited hints)
- 🎵 **Sound Effects** - Audio feedback for correct/wrong answers
- 🌟 **Daily Challenge** - New word puzzle every day

### 📚 Categories & Difficulty
- 🎯 **Multiple Categories** - Animals, Food, Sports, Nature, Technology, and more
- 📈 **3 Difficulty Levels** - Easy, Medium, Hard
- 📱 **Mobile Friendly** - Touch-optimized controls and responsive design

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm
- Modern web browser

### Clone the repository
```bash
git clone https://github.com/yourusername/windle.git
cd windle
```

### Install dependencies
```bash
npm install
```

### Start development server
```bash
npm run dev
```
App will be available at `http://localhost:5173`

### Build for production
```bash
npm run build
npm run preview
```

---

## 🎯 How to Play

### Quick Play Mode
1. Choose a game mode (Fill Missing Letters or Word Hint)
2. Select a category (Animals, Food, Sports, etc.)
3. Pick difficulty level (Easy, Medium, Hard)
4. Play 5 rounds and track your score

### Survival Mode
- 20 rounds total with 3 lives
- Progressive difficulty:
  - Rounds 1-7: Easy
  - Rounds 8-14: Medium
  - Rounds 15-20: Hard
- Lose a life for each wrong answer
- Game ends when all lives are lost or 20 rounds completed

---

## 🔧 Configuration

| File | Description |
|------|-------------|
| `vite.config.ts` | ⚡ Vite bundler configuration |
| `tailwind.config.ts` | 🎨 TailwindCSS customization |
| `postcss.config.js` | 🎯 PostCSS plugins setup |
| `tsconfig.json` | 📘 TypeScript compiler options |
| `components.json` | 🧩 shadcn/ui component configuration |

---

## 🏗️ Project Structure

```
src/
├── games/              # Game implementations
│   ├── fill-missing/  # Fill Missing Letters game
│   └── word-hint/     # Word Hint game
├── components/
│   ├── core/          # Core game components
│   ├── shared/        # Reusable components
│   └── ui/            # UI components
├── hooks/             # Custom React hooks
├── constants/         # Game data and word banks
└── lib/               # Utility functions
```

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Development Workflow
1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open Pull Request

---

## 📝 License

This project is licensed under the MIT License.
