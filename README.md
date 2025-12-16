# App Graph Builder – Frontend Intern Task

## Tech Stack

- React + Vite
- TypeScript (strict)
- ReactFlow (xyflow)
- Tailwind CSS (instead of shadcn/ui)
- TanStack Query
- Zustand
- Mock APIs

## Setup Instructions

```bash
npm install
npm run dev
```

## Available Scripts

- `npm run dev`
- `npm run build`
- `npm run preview`
- `npm run lint`
- `npm run typecheck`

## Key Decisions

### Why Zustand was used
Zustand was chosen for client/UI state management because it's lightweight, has a simple API, and provides excellent TypeScript support. It's perfect for managing small to medium-sized state like selected app ID, selected node ID, mobile panel state, and active inspector tab.

### Why TanStack Query was used
TanStack Query was selected for server state management because it provides built-in caching, background updates, and declarative data fetching. It handles loading, error, and success states automatically, making data fetching much easier and more reliable.

### Mock API approach
The mock API approach uses setTimeout to simulate network latency and randomly throws errors to simulate real-world conditions. This allows us to test loading and error states without needing a real backend.

## Known Limitations

- No persistence beyond in-memory mocks
- Minimal styling polish
- Static mock data
- Node editing functionality is not fully implemented
- Mobile responsiveness could be improved
- Keyboard shortcuts are not implemented