import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import TemplateChoice from './pages/TemplateChoice'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col">
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/create" element={ <TemplateChoice /> } />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App