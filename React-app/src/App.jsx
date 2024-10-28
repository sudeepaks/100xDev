import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Paste from './components/Paste'
import ViewPaste from './components/ViewPaste'

const router = createBrowserRouter(
  {
    path: "./",
    elements:
    <div>
      <Navbar />
      <Home />
    </div>
  },
  {
    path: "/pastes",
    elements:
    <div>
      <Navbar />
      <Paste />
    </div>
  },
  {
    path: "/pastes/:id",
    elements:
    <div>
      <Navbar />
      <ViewPaste />
    </div>
  }
)

function App() {
  
  return (
   <div>
      <RouterProvider router={router} />
   </div>
  )
}

export default App
