# ValScrim.Tools

A modern, fast, and responsive scrim toolkit for **VALORANT** custom games and tournament play.

🚀 **Live Site:** [https://sersah.github.io/valscrims.tool/](https://sersah.github.io/valscrims.tool/)

---

## Features

- **Map Picker**: Randomly generate map pools for Best of 1 (BO1), Best of 3 (BO3), or Best of 5 (BO5) series.
  - **Instant Generate**: Skip roulette animation for instant results.
  - **Rolling Animation**: Dramatic cycling roulette through the map pool with pause and resume controls.
  - **Map Exclusions**: Ban specific maps while enforcing format minimums.
  - **Copy Maps**: One-click copy map list to clipboard.
- **Team Generator**: Randomly balance up to 10 players into two 5-person squads.
  - **Bulk Add**: Paste entire player lists with automatic deduplication.
  - **Instant Draw**: Quick split into Team 1 and Team 2.
  - **Interactive Wheel Spin**: Visual spinning wheel draft with real-time draft board.
  - **Discord-Ready Export**: Formatted team output ready to paste into Discord channels.
- **Coin Toss & Side Selection**: Built-in interactive coin flip for Attacker (T) and Defender (CT) side selection.

## Tech Stack

- [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Lucide React](https://lucide.dev/) (Icons)
- [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti)

## Getting Started

### Prerequisites

- Node.js (v20 or higher)
- npm

### Installation & Development

```bash
# Clone the repository
git clone https://github.com/sersah/valscrims.tool.git
cd valscrims.tool

# Install dependencies
npm install

# Start development server
npm run dev
```

### Building for Production

```bash
npm run build
```

The compiled output will be generated in the `dist/` directory.

## Deployment

This site automatically deploys to GitHub Pages on every push to `main` via the GitHub Actions workflow in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

*Not affiliated with Riot Games. VALORANT is a registered trademark of Riot Games, Inc.*
