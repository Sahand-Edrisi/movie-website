import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from "./App";
function Application() {
  return (
    <Routes>
<Route path='/movie-website' Component={App}/>
    </Routes>
    
  )
}

export default Application