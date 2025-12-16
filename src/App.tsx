import { CanvasPage } from './pages/CanvasPage'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CanvasPage />
    </QueryClientProvider>
  )
}

export default App