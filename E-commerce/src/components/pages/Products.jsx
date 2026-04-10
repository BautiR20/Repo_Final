import React from 'react';
import {useGetProducts} from '../../hooks/useGetProducts.js';
import "../../styles/catalogo.css";
import { useState } from 'react';
import { useEffect } from 'react';
import { ShoppingCart } from 'lucide-react';
import { Search } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { useGetCategories } from '../../hooks/useGetCategories.js';
import Cargando from '../pages/Cargando.jsx';



function Products() {
    const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  
  // Extraemos refetch para hacer la busqueda manual
  const { products, loading, error, refetch } = useGetProducts();
  const { categories } = useGetCategories();

  // Escuchamos el boton de busqueda o la select box
  const handleSearch = (e) => {
    e.preventDefault();
    const params = {};
    if (searchTerm) params.search = searchTerm;
    if (selectedCategory) params.category = selectedCategory;
    refetch(params);
  };

  useEffect(() => {
    // Si cambia de categoria reseteamos la busqueda automaticamente
    const params = {};
    if (searchTerm) params.search = searchTerm;
    if (selectedCategory) params.category = selectedCategory;
    refetch(params);
    // eslint-disable-next-line
  }, [selectedCategory]);

  const { addToCart } = useCart();

  // Asumimos que el backend envia finalPrice o price
  
  if(loading){
        return <>
            <Cargando />
        </>
    }

    return (
    <>
    
      <div className="catalogo">
        <h2>Catálogo de Productos</h2>
        {error && <div className='error-banner'>Error conectando con el servidor: {error}</div>}
        <form className="search-form" onSubmit={handleSearch}>
          <div className="search-input-wrapper">
            <Search size={20} />
            <input 
              type="text" 
              placeholder="Buscar (ej. laptop, teclado...)" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <select 
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">Todas las Categorías</option>
            {categories?.map(cat => (
              <option key={cat._id} value={cat._id}>{cat.name}</option>
            ))}
          </select>

          <button type="submit" className="search-btn">Buscar</button>
        </form>
      </div>
      <div class="tarjetas container">
        {products?.map((product) => (
        <div key = {product._id} class="tarjeta">
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
          <button 
        className="btn-add-cart" 
        onClick={() => addToCart(product, 1)}
        disabled={product.quantity === 0}
      >
        <ShoppingCart size={18} />
        {product.quantity === 0 ? 'Sin Stock' : 'Agregar'}
      </button>
        </div>
        ))}
      </div>
    </>
  )
}

export default Products