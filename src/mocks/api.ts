// Mock API implementation with simulated latency
interface App {
  id: string
  name: string
  description: string
}

interface Node {
  id: string
  type: string
  position: { x: number; y: number }
  data: {
    label: string
    status: 'Healthy' | 'Degraded' | 'Down'
    description?: string
    value?: number
  }
}

interface Edge {
  id: string
  source: string
  target: string
  animated?: boolean
}

interface Graph {
  nodes: Node[]
  edges: Edge[]
}

// Mock data
const mockApps: App[] = [
  {
    id: '1',
    name: 'E-commerce Platform',
    description: 'Main online shopping platform'
  },
  {
    id: '2',
    name: 'Analytics Dashboard',
    description: 'Business intelligence and analytics'
  },
  {
    id: '3',
    name: 'Customer Support',
    description: 'Help desk and ticketing system'
  }
]

const mockGraphs: Record<string, Graph> = {
  '1': {
    nodes: [
      {
        id: '1-1',
        type: 'service',
        position: { x: 0, y: 0 },
        data: {
          label: 'Frontend',
          status: 'Healthy',
          description: 'React-based web application',
          value: 75
        }
      },
      {
        id: '1-2',
        type: 'service',
        position: { x: 200, y: 100 },
        data: {
          label: 'API Gateway',
          status: 'Healthy',
          description: 'REST API gateway',
          value: 85
        }
      },
      {
        id: '1-3',
        type: 'database',
        position: { x: 400, y: 0 },
        data: {
          label: 'Database',
          status: 'Degraded',
          description: 'PostgreSQL database',
          value: 60
        }
      }
    ],
    edges: [
      {
        id: 'e1-1',
        source: '1-1',
        target: '1-2'
      },
      {
        id: 'e1-2',
        source: '1-2',
        target: '1-3'
      }
    ]
  },
  '2': {
    nodes: [
      {
        id: '2-1',
        type: 'service',
        position: { x: 0, y: 0 },
        data: {
          label: 'Dashboard',
          status: 'Healthy',
          description: 'Analytics dashboard',
          value: 90
        }
      },
      {
        id: '2-2',
        type: 'service',
        position: { x: 200, y: 100 },
        data: {
          label: 'Data Processor',
          status: 'Healthy',
          description: 'ETL pipeline processor',
          value: 80
        }
      },
      {
        id: '2-3',
        type: 'database',
        position: { x: 400, y: 0 },
        data: {
          label: 'Data Lake',
          status: 'Healthy',
          description: 'Amazon S3 storage',
          value: 95
        }
      }
    ],
    edges: [
      {
        id: 'e2-1',
        source: '2-1',
        target: '2-2'
      },
      {
        id: 'e2-2',
        source: '2-2',
        target: '2-3'
      }
    ]
  },
  '3': {
    nodes: [
      {
        id: '3-1',
        type: 'service',
        position: { x: 0, y: 0 },
        data: {
          label: 'Ticket System',
          status: 'Down',
          description: 'Zendesk integration',
          value: 40
        }
      },
      {
        id: '3-2',
        type: 'service',
        position: { x: 200, y: 100 },
        data: {
          label: 'Chat Service',
          status: 'Healthy',
          description: 'Live chat support',
          value: 70
        }
      },
      {
        id: '3-3',
        type: 'database',
        position: { x: 400, y: 0 },
        data: {
          label: 'Knowledge Base',
          status: 'Degraded',
          description: 'Documentation database',
          value: 55
        }
      }
    ],
    edges: [
      {
        id: 'e3-1',
        source: '3-1',
        target: '3-2'
      },
      {
        id: 'e3-2',
        source: '3-2',
        target: '3-3'
      }
    ]
  }
}

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

// Mock API functions
export const getApps = async (): Promise<App[]> => {
  await delay(500) // Simulate network delay
  // Simulate occasional errors (10% of the time)
  if (Math.random() < 0.1) {
    throw new Error('Failed to fetch apps')
  }
  return mockApps
}

export const getGraph = async (appId: string): Promise<Graph> => {
  await delay(800) // Simulate network delay
  // Simulate occasional errors (10% of the time)
  if (Math.random() < 0.1) {
    throw new Error(`Failed to fetch graph for app ${appId}`)
  }
  return mockGraphs[appId] || { nodes: [], edges: [] }
}