import React from 'react'
import gif from "../../../public/ball.gif"
import "../../styles/cargando.css"
function cargando() {
  return (
    <div class="cargandoDiv">
        <h2> Cargando productos... </h2>
        <img src={gif} alt="cargando" />
    </div>
  )
}

export default cargando
