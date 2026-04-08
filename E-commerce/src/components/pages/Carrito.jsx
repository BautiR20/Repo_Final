import React from 'react'
import "../../styles/carrito.css"

function Carrito() {
  return (
    <>
    <div class="carrito">
      <h2>Carrito de Compras</h2>
      <div class="grid-container">
        <div class="grid-item container">
          <div class="grid-item producto"></div>
        </div>
        <div class="grid-item buttons">
          <button type="submit">Comprar</button>
        </div>
        <div class="grid-item buttons"><button type="reset">Borrar</button></div>
      </div>
      </div>

    </>
  )
}

export default Carrito
