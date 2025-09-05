import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home';
import Agence from './pages/Agence';
import Project from './pages/Project';

function App() {
  return (
    <div className='text-white' >

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/agence' element={<Agence/>}  />
        <Route path='/project' element={<Project />}  />
      </Routes>

    </div>
  )
}

export default App