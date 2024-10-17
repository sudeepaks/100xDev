import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/sidebar'

function App() {
  

  return (
    <>
      <Navbar />
      <div className="relative flex py-10 px-2">
        <Sidebar />
      </div>
      
    </>
  )
}

export default App
