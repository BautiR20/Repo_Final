import React from 'react'
import "../../styles/contacto.css"
function Contacto() {
  return (
    <>
    <div class="contacto">
      <h2>Complete el siguiente formulario</h2>
      <div class="grid-container">
        <div class="grid-item">
          <label for="Nombre">Nombre: </label><input type="text" />
        </div>
        <div class="grid-item">
          <label for="Nombre">Email: </label><input type="text" />
        </div>
        <div class="grid-item">
          <label for="Nombre">Teléfono: </label><input type="number" />
        </div>
        <div class="grid-item">
          <label for="comentario">Comentario: </label>
          <textarea name="comentario" id="txt1"></textarea>
        </div>
        <div class="grid-item">
          <label for="ayudante">Me comunico para: </label>
          <select name="select1" id="select1">
            <option value="">--Selecciona una opción--</option>
            <option value="1">Averiguar Stock</option>
            <option value="2">Quiero ser distribuidor</option>
            <option value="3">Quiero trabajar para la empresa</option>
            <option value="4">Presentar queja</option>
          </select>
        </div>
        <div class="grid-item">
          <label for="quejas" id="label-quejas">Que pestaña deberiamos mejorar?</label>
          <label>
            <input type="checkbox" name="lenguajes[]" value="Python" id="check" />
            Inicio</label>
            <br />
          <label
            ><input type="checkbox" name="lenguajes[]" value="JavaScript" id="check"/>
            Catálogo</label>
            <br />
          <label
            ><input type="checkbox" name="lenguajes[]" value="C#" id="check"/> Nuestros Locales</label>
            <br />
          <label
            ><input type="checkbox" name="lenguajes[]" value="Java" id="check"/>
            Contacto</label>
        </div>
        <div class="grid-item buttons">
          <button type="submit">Enviar</button>
        </div>
        <div class="grid-item buttons"><button type="reset">Reset</button></div>
      </div>
      </div>

    </>
  )
}

export default Contacto
