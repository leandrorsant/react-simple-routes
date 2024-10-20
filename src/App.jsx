import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/Home'
import Pricing from './components/Pricing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="pricing" element={<Pricing/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
