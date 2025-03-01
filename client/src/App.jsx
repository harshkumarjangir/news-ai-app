import React, { lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import '@mantine/core/styles.css';
import Login from './pages/Login';
import Register from './pages/Register';
import Preference from './pages/Preference';
import { Toaster } from 'sonner'
// import Homepage from './pages/Homepage';
const Homepage = lazy(() => import('./pages/Homepage'));
import ProtectedRoutes from './components/ProtectedRoutes';
import About from './pages/About';
import { Loader } from '@mantine/core';
import LoadingSpiner from './components/LoadingSpiner';

const App = () => {
  return (
    <div>
      <Toaster />
      <Navbar />

      {/* <Suspense fallback={<div className='h-screen w-full flex justify-center items-center'><Loader size={30} color='blue' /></div>}> */}
      <Suspense fallback={<LoadingSpiner />}>

        <Routes>

          <Route element={<ProtectedRoutes />}>
            <Route path='/' element={<Homepage />} />
            <Route path='/preference' element={<Preference />} />
          </Route>

          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>

      </Suspense>
    </div>
  )
}

export default App