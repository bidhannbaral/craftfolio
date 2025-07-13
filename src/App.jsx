import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex">
        <Routes>
          <Route path="/" element={ <Home /> } />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App