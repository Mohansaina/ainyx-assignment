import React, { useCallback, useEffect } from 'react'
import { 
  ReactFlow, 
  MiniMap, 
  Controls, 
  Background, 
  useNodesState, 
  useEdgesState,
  addEdge,
  Connection,
  Edge,
  Node
} from 'reactflow'
import 'reactflow/dist/style.css'
import { useUIStore } from '../../stores/uiStore'
import { useGraph } from '../../hooks/useGraph'

export const Canvas: React.FC = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([])
  const [edges, setEdges, onEdgesChange] = useEdgesState([])
  const selectedAppId = useUIStore(state => state.selectedAppId)
  const setSelectedNodeId = useUIStore(state => state.setSelectedNodeId)
  
  const { data: graph, isLoading, error } = useGraph(selectedAppId)
  
  const onConnect = useCallback(
    (params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  )
  
  // Update nodes and edges when graph data changes
  useEffect(() => {
    if (graph) {
      setNodes(graph.nodes)
      setEdges(graph.edges)
    }
  }, [graph, setNodes, setEdges])
  
  // Clear selection when app changes
  useEffect(() => {
    setSelectedNodeId(null)
  }, [selectedAppId, setSelectedNodeId])
  
  const onNodeClick = useCallback(
    (_: React.MouseEvent, node: Node) => {
      setSelectedNodeId(node.id)
    },
    [setSelectedNodeId]
  )
  
  if (isLoading) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <div className="text-gray-500">Loading graph...</div>
      </div>
    )
  }
  
  if (error) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <div className="text-red-500">Error loading graph: {error.message}</div>
      </div>
    )
  }
  
  return (
    <div className="flex-1">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeClick={onNodeClick}
        fitView
        className="bg-teal-50"
      >
        <Background color="#aaa" gap={16} />
        <MiniMap />
        <Controls />
      </ReactFlow>
    </div>
  )
}