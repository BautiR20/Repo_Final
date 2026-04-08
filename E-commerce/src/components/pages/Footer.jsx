import React from 'react'
import "../../styles/general.css"
import { NavLink } from 'react-router-dom'
function Footer() {
  return (
    <div class="container">
      <footer class="py-3 my-4">
        <ul class="nav justify-content-center border-bottom pb-3 mb-3">
          <li class="nav-item">
            <NavLink to="/" className="FootLink"><a href="index.html" class="nav-link px-2 text-body-secondary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
</svg></a></NavLink>
          </li>
          <li class="nav-item">
            <NavLink to="/product" className="FootLink"><a  class="nav-link px-2 text-body-secondary">Catálogo</a></NavLink>
          </li>
          <li class="nav-item">
            <NavLink className="FootLink" to="/sucursales"><a  class="nav-link px-2 text-body-secondary">Locales</a></NavLink>
          </li>
          <li class="nav-item">
           <NavLink className="FootLink" to="/contacto"><a  class="nav-link px-2 text-body-secondary">Log In</a></NavLink>
          </li>
        </ul>
        <p class="text-center text-body-secondary">© 2025 NBA</p>
      </footer>
    </div>
  )
}

export default Footer
