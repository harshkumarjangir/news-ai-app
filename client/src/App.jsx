import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Categories from './pages/Categories'
import Channel from './pages/Channel'
import About from './pages/About'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/channel" element={<Channel />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App