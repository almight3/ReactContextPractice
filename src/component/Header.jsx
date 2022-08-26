import React from 'react'
import {Link} from "react-router-dom"
import "./Cart.css"
function Header() {
  return (
    <div>
         <h2>Context Practice</h2> 
        <nav className='nav'>
        
            <Link to="/home" style={{color:"inherit",textDecoration:"none"}}><li>Home</li></Link>
            <Link to="/cart" style={{color:"inherit",textDecoration:"none"}}><li>Cart</li></Link>
      
    </nav>
    </div>
  )
}

export default Header