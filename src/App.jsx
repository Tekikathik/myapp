import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './components/Dashboard'
import StudentsPortal from './components/StudentsPortal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Dashboard/>
    {/* <StudentsPortal/> */}
    </>
  )
}

export default App
