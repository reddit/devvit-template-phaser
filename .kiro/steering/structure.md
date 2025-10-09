# Project Structure

## Root Configuration
- `devvit.json`: Devvit app configuration with post/server entry points
- `package.json`: Dependencies and build scripts
- `tsconfig.json`: TypeScript project references (build-only)
- `eslint.config.js`: ESLint configuration with environment-specific rules

## Source Organization

### `/src/client/`
Client-side Three.js application that runs in the browser
- `main.ts`: Entry point with Three.js scene setup and API calls
- `index.html`: HTML template with canvas and UI elements
- `index.css`: Styling for the web interface
- `public/`: Static assets (Earth textures)
- `vite.config.ts`: Client build configuration
- `tsconfig.json`: Client-specific TypeScript config

### `/src/server/`
Express server that handles Reddit integration
- `index.ts`: Main server with Express routes and Devvit integration
- `core/`: Business logic modules
  - `post.ts`: Post creation functionality
- `vite.config.ts`: Server build configuration (SSR, CommonJS output)
- `tsconfig.json`: Server-specific TypeScript config

### `/src/shared/`
Shared types and utilities between client and server
- `types/api.ts`: API response type definitions
- `tsconfig.json`: Shared code TypeScript config

## Build Output
- `dist/client/`: Built client assets (HTML, JS, CSS)
- `dist/server/`: Built server bundle (`index.cjs`)

## Architecture Patterns
- **Monorepo**: Multiple TypeScript projects with project references
- **Client-Server Split**: Clear separation with shared types
- **API-First**: RESTful endpoints for client-server communication
- **Devvit Integration**: Server handles Reddit context and Redis operations