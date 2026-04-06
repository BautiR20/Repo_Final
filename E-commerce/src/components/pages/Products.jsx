import React from 'react';
import useGetProducts from '../../hooks/useGetProducts';
import "../../styles/catalogo.css";
import Cargando from './Cargando';
function Products() {
    const {products, error, loading} = useGetProducts()

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
      <div class="tarjetas container">
        {products.map((product) => (
        <div key = {product.id} class="tarjeta">
          <img src={product.image} />
          <div>
              <p>
                {product.name}
              </p>
              <p>
                {product.description}
              </p>
              <p>
                USD {product.price}
              </p>
          </div>
          <button>Ver Más</button>
        </div>
        ))}
      </div>
    </>
  )
}

export default Products