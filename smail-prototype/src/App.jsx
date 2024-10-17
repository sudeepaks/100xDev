import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/sidebar'
import Topbar from './components/Topbar'

function App() {
  

  return (
    <>
    <div className="">
      <Navbar />
      <div className=" ">
          <div className="flex mx-1 my-0 py-10">
            <Sidebar />
            <Topbar />
          </div>    
      </div>
    </div>  
    </>
  )
}

export default App
