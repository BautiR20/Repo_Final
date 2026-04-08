import React from 'react'
import "../../styles/logueo.css"
function Logueo() {
  return (
    <>
    <div class="logueo">
      <h2>Log In</h2>
      <div class="grid-container">
        <div class="grid-item datos">
          <label for="Nombre">Usuario: </label><input type="text" />
          <label for="Nombre">Contraseña: </label><input type="text" />
        </div>
        <div class="grid-item buttons">
          <button type="submit">Ingresar</button>
        </div>
        <div class="grid-item buttons"> <a href="/crearCuenta"><button type="reset" >Crear</button></a></div>
      </div>
      </div>

    </>
  )
}

export default Logueo
