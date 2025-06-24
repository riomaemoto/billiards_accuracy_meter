# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Dev server**: `npm run dev` (with Turbopack enabled)
- **Build**: `npm run build`
- **Production**: `npm start`
- **Lint**: `npm run lint`

## Project Architecture

This is a Next.js 15 billiards/pool statistics tracking application with the following structure:

### State Management

- **Jotai** for global state management with optics integration
- Central atom store in `src/app/atom.ts` with `StatType` defining all tracked statistics
- Fine-grained atom splitting using `jotai-optics` for each stat field (left/right players)
- Each statistic has dedicated atoms (e.g., `ballsPocketedLeftAtom`, `gameScoreRightAtom`)

### Data Layer

- **Supabase** integration via `src/app/supabase.ts`
- Core functions: `fetchStatsData()`, `sendStatsData()`, `upDateStatsData()`
- Environment variables: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- Database table: `statsData` with auto-managed `id`, `created_at`, `updated_at` fields

### Application Flow

1. **Home page** (`src/app/page.tsx`): Lists historical game records with "New Stat" and "View Stat" functionality
2. **Score sheet** (`src/app/scoreSheet/page.tsx`): Main statistics entry/editing interface with edit mode toggle
3. **Component hierarchy**: Specialized components for different stat types (`Rowbox`, `PercentageRowbox`, `BamScore`, etc.)

### Key Data Structure

`StatType` tracks comprehensive billiards statistics with left/right player format:

- Game metrics (score, breaks, streaks)
- Shot accuracy (balls pocketed/missed, with safety considerations)
- Error tracking (unforced, safety, kicking errors)
- Break statistics (dry breaks, scratches, balls made on break)

### Routing Pattern

- Root `/` displays game history and navigation
- `/scoreSheet` handles both new game creation and existing game editing
- State persistence through Jotai atoms between route transitions

### Styling

- **Tailwind CSS** with PostCSS configuration
- Responsive design with mobile-first approach
- Component-based styling patterns
