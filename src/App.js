import {React ,useState} from 'react'
import Home from "./component/Home"
import Header from  "./component/Header"
import ProductCart from './component/ProductCart'
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom"
import ContextProvider from './context/ContextProvider'
function App() {


  return (
    
      <BrowserRouter>
       <ContextProvider>
            <Header/> 
            <Routes>
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="/home" element={<Home />} />
              <Route path="/cart" element={<ProductCart />} />
            </Routes>
            </ContextProvider>
      </BrowserRouter>
    
    
  )
}

export default App

