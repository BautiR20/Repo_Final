

/**
 * Función genérica para hacer peticiones HTTP
 * @param {string} endpoint - La ruta específica (ej. '/product')
 * @param {object} options - Opciones de fetch (method, body, headers, etc)
 */
export const fetchApi = async (endpoint, options = {}) => {
  const url = `${import.meta.env.VITE_BASE_URL}${endpoint}`;
  
  
  const token = window.sessionStorage.getItem('ecommerce_token');

  const defaultHeaders = {};
  
  
  if (!(options.body instanceof FormData)) {
    defaultHeaders['Content-Type'] = 'application/json';
  }

  
  if (token) {
    defaultHeaders['Authorization'] = `Bearer ${token}`;
  }

  const config = {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  };

  try {
    const response = await fetch(url, config);
    
    
    if (!response.ok) {
      
      const errorData = await response.json().catch(() => ({})); 
      throw new Error(errorData.message || 'Error en la petición al servidor');
    }

    
    const data = await response.json().catch(() => ({}));
    return data;

  } catch (error) {
    console.error(`Error de red en fetchApi a ${endpoint}:`, error);
    throw error; 
  }
};
