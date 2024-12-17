import React from 'react'
import { HashRouter,Routes,Route } from 'react-router-dom'
import Home from './screen/home/Home'

import { HomeContextProvider } from "./context/Mycontext"; // Import provider
function App() {
  return (
    <>
    <HomeContextProvider>
    <HashRouter>
      <Routes>
        <Route  path='/' element={<Home/>}  />
      
      </Routes>
    </HashRouter>
   
    </HomeContextProvider>

   
    </>
  )
}

export default App
