import React from 'react'
import "../../styles/errorPage.css"
// import gif from "../../../public/shaq.gif"
const gif = "/shaq.gif"
function ErrorPage() {
  return (
    <div class="errorDiv">
                <div class="errortext">
                <h1>Error 204</h1>
                <h2> Página no encontrada </h2>
                </div>
                <div>
                  <img src={gif} alt="errorGif" />
                </div>
    </div>
  )
}

export default ErrorPage
