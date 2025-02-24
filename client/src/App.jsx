import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import '@mantine/core/styles.css';
import Login from './pages/Login';
import Register from './pages/Register';
import Preferences from './pages/Preference';
import { Toaster } from 'sonner'

const App = () => {
  return (
    <div>
      <Toaster />
      <Navbar />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      <Preferences />
    </div>
  )
}

export default App