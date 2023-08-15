import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import { Context } from './context/Context'

function App() {
  const {auth} = React.useContext(Context)
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          auth?.isOk ? <Home /> : <SignUp />
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
