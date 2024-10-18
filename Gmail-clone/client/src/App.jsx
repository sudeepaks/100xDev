import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './components/shared/Navbar'
import Sidebar from './components/Sidebar'
import Body from './components/Body'
import Inbox from './components/Inbox'
import Mail from './components/Mail'

const router = createBrowserRouter([
  { 
    path: "/",
    element:<Body/>,
    children: [
      {
        path: "/",
        element:<Inbox />
      },
      {
        path: "/mail/:id",
        element: <Mail />
      }
    ]
  }
])

function App() {
  

  return (
    <div className="bg-[#F6F8FC] h-screen w-screen overflow-hidden">
      <Navbar />
      <RouterProvider router={router} />
      <Sidebar />
    </div>
  )
}

export default App
