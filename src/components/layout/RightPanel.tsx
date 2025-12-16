import React from 'react'
import { useUIStore } from '../../stores/uiStore'
import { AppSelector } from './AppSelector'
import { NodeInspector } from '../inspector/NodeInspector'

export const RightPanel: React.FC = () => {
  const selectedNodeId = useUIStore(state => state.selectedNodeId)
  
  return (
    <div className="w-80 bg-white border-l border-gray-200 flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-800">Configuration</h2>
      </div>
      <div className="flex-1 overflow-y-auto">
        <AppSelector />
        {selectedNodeId && <NodeInspector />}
      </div>
    </div>
  )
}