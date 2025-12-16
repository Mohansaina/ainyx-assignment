# App Graph Builder – Frontend Intern Task

## Overview

A responsive React application that visualizes application architectures as interactive graphs using ReactFlow. Users can select different applications, view their graph structures, and inspect individual nodes to view and edit their properties.

## Tech Stack

- React + Vite
- TypeScript (strict mode)
- ReactFlow (xyflow)
- Tailwind CSS
- TanStack Query
- Zustand
- Mock APIs

## Setup & Run Instructions

```bash
npm install
npm run dev
```

Visit `http://localhost:5173` to view the application.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking

## Features

- Interactive graph visualization with ReactFlow
- Application selector with loading and error states
- Node inspection with tabbed interface
- Responsive layout with top bar, navigation rail, and side panel
- Keyboard navigation support
- Mock API with simulated latency and errors

## Key Architectural Decisions

### State Management

**Zustand** was chosen for client/UI state management because it's lightweight, has a simple API, and provides excellent TypeScript support. It manages:
- Selected application ID
- Selected node ID
- Mobile panel open/close state
- Active inspector tab

**TanStack Query** was selected for server state management because it provides built-in caching, background updates, and declarative data fetching. It handles loading, error, and success states automatically for data fetching.

### UI Framework

**Tailwind CSS** was used for styling due to its utility-first approach, which enables rapid UI development and consistent design.

### Data Layer

**Mock APIs** were implemented with setTimeout to simulate network latency and randomly throw errors to simulate real-world conditions. This allows testing loading and error states without needing a real backend.

## Known Limitations

- Uses mock data instead of a real backend
- Node editing functionality is not fully implemented
- Mobile responsiveness could be improved
- Keyboard shortcuts are not implemented
- No persistence beyond in-memory mocks