import React, { useState } from 'react'
import "../../styles/carrito.css"
import { useCreatePurchase } from '../../hooks/useCreatePurchase';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

function Carrito() {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();
  const { checkout, loading, error } = useCreatePurchase();
  const navigate = useNavigate();
  const [successMsg, setSuccessMsg] = useState('');
  const [checkoutError, setCheckoutError] = useState('');

  const handleCheckout = async () => {
    
    const token = window.sessionStorage.getItem('ecommerce_token');
    
    if (!token) {
      
      navigate('/login?redirect=cart');
      return;
    }

    setCheckoutError('');
    setSuccessMsg('');

    
    const result = await checkout(cartItems);

    if (result.success) {
      clearCart();
      setSuccessMsg(`¡Compra realizada con éxito!`);
    } else {
      setCheckoutError(result.error || 'Ocurrió un error al procesar tu compra');
    }

    
  };
  if (successMsg) {
    return (
      <div className="cart-page center-message">
        <div className="success-box">
          <h2>¡Gracias por tu compra!</h2>
          <p>{successMsg}</p>
          <Link to="/product" className="btn-continue">Seguir Comprando</Link>
        </div>
      </div>
    );
  }
  return (
    <>
    <div class="carrito">
      <h2>Carrito de Compras</h2>
      {checkoutError && <div className="error-banner">{checkoutError}</div>}
      {error && <div className="error-banner">{error}</div>}
      <div class="cart-container">
        <div class="cart-items-list">
          {cartItems.map((item) => {
            const product = item.product;
            const price = product.finalPrice || product.price;
            
            return (
              <div key={product._id} className="cart-item">
                <div className="cart-item-image">
                  <img src={product.image} />
                </div>
                
                <div className="cart-item-details">
                  <h3>{product.name}</h3>
                  <p className="cart-item-price">${price.toFixed(2)}</p>
                </div>
                
                <div className="cart-item-actions">
                  <div className="quantity-controls">
                    <button 
                      onClick={() => updateQuantity(product._id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >-</button>
                    <span>{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(product._id, item.quantity + 1)}
                      disabled={item.quantity >= product.quantity}
                    >+</button>
                  </div>
                  
                  <div className="item-subtotal">
                    ${(price * item.quantity).toFixed(2)}
                  </div>
                  
                  <button 
                    className="btn-remove" 
                    onClick={() => removeFromCart(product._id)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
</svg>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div class="grid-item buttons">
          <button className="btn-checkout" 
            onClick={handleCheckout}
            disabled={loading}>{loading ? 'Procesando Pago...' : 'Comprar'}</button>
        </div>
        <div class="grid-item Total">
        <div class="total"><span>Total: </span>
            <span>${getCartTotal().toFixed(2)}</span></div>
        </div>
      </div>
      </div>

    </>
  )
}

export default Carrito
