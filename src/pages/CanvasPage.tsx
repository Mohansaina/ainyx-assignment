import React from 'react'
import { TopBar } from '../components/layout/TopBar'
import { LeftRail } from '../components/layout/LeftRail'
import { Canvas } from '../components/canvas/Canvas'
import { RightPanel } from '../components/layout/RightPanel'

export const CanvasPage: React.FC = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <TopBar />
      <div className="flex flex-1 overflow-hidden">
        <LeftRail />
        <Canvas />
        <RightPanel />
      </div>
    </div>
  )
}