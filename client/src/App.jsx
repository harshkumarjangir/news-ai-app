import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import '@mantine/core/styles.css';
import Login from './pages/Login';
import Register from './pages/Register';
import Preferences from './pages/Preference';

const App = () => {
  return (
    <div>
      <Navbar />
      <Preferences/>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  )
}

export default App