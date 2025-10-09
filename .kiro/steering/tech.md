# Technology Stack

## Core Technologies

- **Devvit**: Reddit's developer platform for building apps
- **Phaser.js**: 2D graphics library for WebGL rendering
- **TypeScript**: Primary language with strict type checking
- **Vite**: Build tool for both client and server bundles
- **Express**: Server-side HTTP framework
- **Redis**: Data persistence layer (via Devvit)

## Build System

- **Vite** handles compilation for both client and server
- **TypeScript** project references for modular compilation
- **ESLint** with TypeScript rules for code quality
- **Prettier** for consistent code formatting

## Common Commands

```bash
# Development (runs client, server, and devvit in parallel)
npm run dev

# Build for production
npm run build

# Deploy to Reddit
npm run deploy

# Publish for review
npm run launch

# Code quality checks
npm run check

# Individual builds
npm run build:client
npm run build:server
```

## Development Workflow

- Use `npm run dev` for live development with hot reloading
- Client builds to `dist/client` with HTML entry point
- Server builds to `dist/server` as CommonJS module
- Devvit playtest provides live Reddit integration testing

## Dependencies

- **Runtime**: @devvit/web, phaser, express
- **Development**: TypeScript, ESLint, Prettier, Vite, Vitest
