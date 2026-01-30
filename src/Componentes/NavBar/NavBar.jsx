import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import "./NavBar.css"
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
  
  <header>

    <Link to ="/">
    
    <h1>GAMERCTRL</h1>

    </Link>
        

        <nav>
            <li> <Link to="categoria/xbox">XBOX</Link></li>
            <li> <Link to="categoria/ps4yps5">PS4 Y PS5</Link></li>
            <li> <Link to="categoria/pc">PC</Link></li>
        </nav>


        <CartWidget/>
        
    </header>

    
    
    
  )
}

export default NavBar