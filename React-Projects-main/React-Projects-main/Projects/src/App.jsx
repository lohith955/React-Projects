import { useState } from 'react'
import Login1 from './Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Signup from './Signup'
import {ToastContainer} from 'react-toastify'
import Sevenupsevendown from './sevenupsevendown'
import { useEffect } from 'react'
import { auth } from './Firebase'
import { Navigate } from 'react-router-dom'
import Games from './Games'
import Expensetracker from './Expensetracker'
import Bmicalculator from './Bmicalculator'
import Resume from './Resume'
import Snakeandladder from './snakeandladder'
import Kanbanboard from './Kanbanboard'
import Stopwatch from './Stopwatch'
function App() {
  const [user,setUser]=useState()
  useEffect(()=>{
    auth.onAuthStateChanged(user=>{
      setUser(user)
    })
  })
  return (
    <Router>
      <Routes>
        <Route path="/" element={user?<Navigate to= "/Login" />:<Login1/>} />
        <Route path="/" element={<Login1 />} />
        <Route path="/login" element={<Login1 />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/sevenupsevendown.jsx" element={<Sevenupsevendown />} />
        <Route path="/Games" element={<Games/>} />
        <Route path="/Expensetracker.jsx" element={<Expensetracker/>} />
        <Route path="/Bmicalculator.jsx" element={<Bmicalculator />} />
        <Route path="/Resume.jsx" element={<Resume/>} />
        <Route path="/snakeandladder.jsx" element={<Snakeandladder/>} />
        <Route path="/Kanbanboard.jsx" element={<Kanbanboard/>} />
        <Route path="/Stopwatch.jsx" element={<Stopwatch/>} />
      </Routes>
      <ToastContainer />
    </Router>
    
  )
}

export default App