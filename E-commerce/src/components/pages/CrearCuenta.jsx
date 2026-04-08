import React from 'react'
import "../../styles/crearCuenta.css"
function CrearCuenta() {
  return (
    <>
    <div class="crearCuenta">
      <h2>Log In</h2>
      <div class="grid-container">
        <div class="grid-item datos">
          <label for="Nombre">Usuario: </label><input type="text" />
          <label for="Nombre">Contraseña: </label><input type="text" />
          <label for="Nombre">Email: </label><input type="text" />
        </div>
        <div class="grid-item buttons"><button type="reset">Crear</button></div>
      </div>
      </div>

    </>
  )
}

export default CrearCuenta
