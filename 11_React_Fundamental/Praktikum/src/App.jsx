import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/LandingPage'
import CreatedPage from './pages/CreatedPage'
import Login from './pages/Login/Login'
import PrivateRoute from './Route/RoutePrivate'
import UserDetail from './pages/UserDetail'
import Register from './pages/Register/Register'

function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route path="/" Component={LandingPage}/>
        <Route path="/Register" Component={Register}/>
        <Route path="/Created" Component={CreatedPage}/>
        <Route path="/Login" Component={Login}/>
        <Route path="/Account/:id" element={<PrivateRoute component={UserDetail}/>}/>
      </Routes>   
      </Router>  
    </>
  )
}
export default App