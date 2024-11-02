import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbark from './components/Navbark'
import Home from './components/Home'
import Add from './components/Add'
import { Route, Routes } from 'react-router-dom'
import Wel from './components/Wel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbark/>
      {/* <Home/>
      <Add/> */}
      {/* <Wel/> */}
      <Routes>
        <Route path='/add' element={<Add/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/' element={<Wel/>}/>
      </Routes>
    </>
  )
}

export default App
