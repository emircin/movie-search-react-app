import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Main from '../pages/Main'

const Router = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path='/' exact element={<Main/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default Router