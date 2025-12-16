import { useQuery } from '@tanstack/react-query'
import { getApps } from '../mocks/api'

export const useApps = () => {
  return useQuery({
    queryKey: ['apps'],
    queryFn: getApps,
    staleTime: 1000 * 60 * 5, // 5 minutes
  })
}