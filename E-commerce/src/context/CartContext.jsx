import { createContext, useContext, useState, useEffect } from 'react';


const CartContext = createContext();


export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart debe ser usado dentro de un CartProvider');
  }
  return context;
};


export const CartProvider = ({ children }) => {
  
  const [cartItems, setCartItems] = useState(() => {
    try {
      const item = window.sessionStorage.getItem('ecommerce_cart');
      return item ? JSON.parse(item) : [];
    } catch (error) {
      console.error('Error leyendo carrito del sessionStorage', error);
      return [];
    }
  });

  
  useEffect(() => {
    window.sessionStorage.setItem('ecommerce_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  
  const addToCart = (product, quantity = 1) => {
    setCartItems(prevItems => {
      
      const productId = product._id || product.id;
      const existingItem = prevItems.find(item => (item.product._id || item.product.id) === productId);

      if (existingItem) {
        
        return prevItems.map(item => 
          (item.product._id || item.product.id) === productId 
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      
      return [...prevItems, { product, quantity }];
    });
  };

  
  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => (item.product._id || item.product.id) !== productId));
  };

  
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return; 

    setCartItems(prevItems => 
      prevItems.map(item => 
        (item.product._id || item.product.id) === productId 
          ? { ...item, quantity: newQuantity } 
          : item
      )
    );
  };

  
  const clearCart = () => {
    setCartItems([]);
    window.sessionStorage.removeItem('ecommerce_cart');
  };

  
  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + (item.product.finalPrice || item.product.price || 0) * item.quantity, 0);
  };

  const getCartCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  };

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartCount
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};
