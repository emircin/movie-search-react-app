import React from 'react'
import './App.css'
import { MovieProvider } from './context/AuthContext'
import Router from './router/Router'

const App = () => {

  
  return (
    <div>
      <MovieProvider>
      <Router/>
      </MovieProvider>
    </div>
  )
}

export default App
