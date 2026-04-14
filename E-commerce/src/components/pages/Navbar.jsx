import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { NavLink } from 'react-router-dom'
import "../../styles/general.css"
import { ShoppingCart, LogIn, LogOut } from "lucide-react";
import logo from "../../assets/logo.png"
import { useAuth } from "../../context/AuthContext.jsx";

function Navbar() {
  
  const { isAuthenticated, logout, user, isAdmin, isSeller } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="upper-bar">
        <nav>
            <NavLink to="/"> <img src={logo} alt="logo"/> </NavLink>
            <ul className="lato-regular">
                <li><NavLink to="/"> Inicio </NavLink></li>
                <li><NavLink to="/product"> Productos </NavLink></li>
                <li><NavLink to="/sucursales">Nuestros Locales</NavLink></li>
                <li><NavLink to="/carrito"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                </svg></NavLink>
                </li>
                {isAdmin && (
                  <li>
                    <Link to="/AdminUsuarios">Usuarios</Link>
                  </li>
                )}
                {(isAdmin || isSeller) && (
                  <li>
                    <Link to="/AdminProductos">Productos</Link>
                  </li>
                )}
                {(isAdmin || isSeller) && (
                  <li>
                    <Link to="/AdminCategory">Categorias</Link>
                  </li>
                )}
            </ul>
            {isAuthenticated ? (
          <div className="user-nav-info">
             <Link to="" className="user-email-nav" title="Ver Perfil">
               {user?.email}
             </Link>
            <button
              onClick={handleLogout}
              className="action-icon logout-btn"
              title="Cerrar Sesión"
            >
              <LogOut size={24} />
            </button>
          </div>
        ) : (
          <li class="login"><NavLink to="/logueo">Log In</NavLink></li>
        )}
        </nav>
      </header>
  )
}

export default Navbar
