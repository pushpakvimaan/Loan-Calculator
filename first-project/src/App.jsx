import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import LoanCalculator from './LoanCalculator';
import Navbar from './Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
    <LoanCalculator/>
        {/* <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p> */}
    
    </>
  )
}

export default App
