import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CreatePost from './components/CreatePost'
import Dashboard from './pages/dashboard/Dashboard'
import Chessgame from './components/Chess/Chessgame'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'

function App() {
  

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Chessgame />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
