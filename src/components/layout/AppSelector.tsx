import React from 'react'
import { useApps } from '../../hooks/useApps'
import { useUIStore } from '../../stores/uiStore'

export const AppSelector: React.FC = () => {
  const { data: apps, isLoading, error } = useApps()
  const selectedAppId = useUIStore(state => state.selectedAppId)
  const setSelectedAppId = useUIStore(state => state.setSelectedAppId)
  
  if (isLoading) {
    return (
      <div className="p-4">
        <div className="text-gray-500">Loading apps...</div>
      </div>
    )
  }
  
  if (error) {
    return (
      <div className="p-4">
        <div className="text-red-500">Error loading apps: {error.message}</div>
      </div>
    )
  }
  
  return (
    <div className="p-4">
      <label htmlFor="app-select" className="block text-sm font-medium text-gray-700 mb-2">
        Select Application
      </label>
      <select
        id="app-select"
        className="w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        value={selectedAppId || ''}
        onChange={(e) => setSelectedAppId(e.target.value || null)}
      >
        <option value="">Choose an application</option>
        {apps?.map((app) => (
          <option key={app.id} value={app.id}>
            {app.name}
          </option>
        ))}
      </select>
      {selectedAppId && (
        <div className="mt-4 p-3 bg-blue-50 rounded-md">
          <h3 className="text-sm font-medium text-blue-800">{apps?.find(a => a.id === selectedAppId)?.name}</h3>
          <p className="mt-1 text-sm text-blue-700">
            {apps?.find(a => a.id === selectedAppId)?.description}
          </p>
        </div>
      )}
    </div>
  )
}