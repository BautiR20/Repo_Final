import React from 'react'

import "../../styles/cargando.css"
const gif  = "/ball.gif"
function cargando() {
  return (
    <div class="cargandoDiv">
        <h2> Cargando productos... </h2>
        <img src={gif} alt="cargando" />
    </div>
  )
}

export default cargando
