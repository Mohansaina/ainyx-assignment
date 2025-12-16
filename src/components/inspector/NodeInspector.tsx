import React from 'react'
import { useUIStore } from '../../stores/uiStore'

export const NodeInspector: React.FC = () => {
  const activeTab = useUIStore(state => state.activeInspectorTab)
  const setActiveTab = useUIStore(state => state.setActiveInspectorTab)
  const selectedNodeId = useUIStore(state => state.selectedNodeId)
  
  return (
    <div className="border-t border-gray-200 mt-4">
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8 px-4">
          <button
            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'config'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
            onClick={() => setActiveTab('config')}
          >
            Config
          </button>
          <button
            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'runtime'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
            onClick={() => setActiveTab('runtime')}
          >
            Runtime
          </button>
        </nav>
      </div>
      
      <div className="p-4">
        {activeTab === 'config' ? (
          <div>
            <h3 className="text-lg font-medium text-gray-900">Node Configuration</h3>
            <p className="mt-1 text-sm text-gray-500">
              Configure settings for node {selectedNodeId}
            </p>
            {/* Config content would go here */}
            <div className="mt-4 space-y-4">
              <div>
                <label htmlFor="node-name" className="block text-sm font-medium text-gray-700">
                  Node Name
                </label>
                <input
                  type="text"
                  id="node-name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  defaultValue="Sample Node"
                />
              </div>
              
              <div>
                <label htmlFor="node-description" className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  id="node-description"
                  rows={3}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  defaultValue="This is a sample node description"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Status
                </label>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 mt-1">
                  Healthy
                </span>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <h3 className="text-lg font-medium text-gray-900">Runtime Information</h3>
            <p className="mt-1 text-sm text-gray-500">
              Real-time metrics for node {selectedNodeId}
            </p>
            {/* Runtime content would go here */}
            <div className="mt-4">
              <div className="flex items-center justify-between">
                <label htmlFor="value-slider" className="block text-sm font-medium text-gray-700">
                  Performance Value
                </label>
                <span className="text-sm text-gray-500">75</span>
              </div>
              <input
                type="range"
                id="value-slider"
                min="0"
                max="100"
                defaultValue="75"
                className="mt-1 w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}