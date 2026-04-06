import React from 'react'
import { NavLink } from 'react-router-dom'
import "../../styles/general.css"
import logo from "../../assets/logo.png"
function Navbar() {
  return (
    <header className="upper-bar">
        <nav>
            <NavLink to="/"> <img src={logo} alt="logo"/> </NavLink>
            <ul className="lato-regular">
                <li><NavLink to="/"> Inicio </NavLink></li>
                <li><NavLink to="/product"> Productos </NavLink></li>
                <li><NavLink to="/sucursales">Nuestros Locales</NavLink></li>
                <li><NavLink to="/contacto">Contacto</NavLink></li>
            </ul>
        </nav>
      </header>
  )
}

export default Navbar
