import React from 'react'
import { Route, Routes, Navigate} from 'react-router-dom'
import HomePage from './pages/HomePage'
import VideoDetailPage from './pages/VideoDetailPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/video/:id" element={<VideoDetailPage />} />
    </Routes>
  )
}

export default App;