import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/sidebar'
import Topbar from './components/Topbar'
import Mailcard from './Mailcard'

function App() {
  

  return (
    <>
    <div className="">
      <Navbar />
      <div className=" ">
          <div className="flex mx-1 my-0 py-10">
            <Sidebar />
            <Topbar />
            <div className=" flex mx-10 my-8">
              <Mailcard />
            </div> 
          </div>   
          
      </div>
    </div>  
    </>
  )
}

export default App
