import { useQuery } from '@tanstack/react-query'
import { getGraph } from '../mocks/api'

export const useGraph = (appId: string | null) => {
  return useQuery({
    queryKey: ['graph', appId],
    queryFn: () => appId ? getGraph(appId) : Promise.reject(new Error('No app selected')),
    enabled: !!appId,
    staleTime: 1000 * 60 * 1, // 1 minute
  })
}