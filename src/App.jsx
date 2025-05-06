import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'
import LoanCalculator from './component/LoanCalculator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <LoanCalculator />
    </>
  )
}

export default App
