import React from 'react'
import "../../styles/home.css"
import logo from "../../assets/logo.png"
import portada from "../../assets/portada.webp"
import useGetLanzamientos from '../../hooks/useGetLanzamientos'
import Cargando from './Cargando' 
function Home() {
    const {lanzamientos, error, loading} = useGetLanzamientos()

   
    if(error){
        return <>
            <h2> Error al cargar los productos </h2>
            <p> {error?.message || String(error)} </p>
        </>
    }

    if(loading){
        return <>
            <Cargando />
        </>
    }

  return (
    <>
    <div class="index">
      <h2>Mirá nuestros próximos lanzamientos</h2>
      
      <div class="portada">
        <img src={portada} alt="portada" />
      </div>
        

      <div class="grid-container">
        <div class="grid-item parrafo"><img src={logo} alt=""/><p><strong>Los nuevos lanzamientos ya están acá.</strong></p>
          <br/>
        <p>Reviví cada jugada con la indumentaria oficial de tus equipos y jugadores favoritos.
        Entrá al juego con las últimas colecciones NBA y marcá tu propio estilo.</p></div>
        {lanzamientos.map((lanzamiento) => (
            <div class="grid-item"><img src={lanzamiento.image} alt="" /></div>
        ))}
        
        
      </div>
    </div>
    </>
  )
}

export default Home
