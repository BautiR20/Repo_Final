import { useState, useEffect } from 'react';
import { fetchApi } from '../services/api';

export const useGetProducts = (initialParams = {}) => {
  
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  
  const getProducts = async (params = initialParams) => {
    try {
      setLoading(true)
      setError(null)

      const queryString = new URLSearchParams(params).toString()
      const endpoint = queryString ? `/product?${queryString}` : "/product"

      const data = await fetchApi(endpoint)
      

    
      setProducts(data)
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getProducts(initialParams)
  }, [])
  
  
  

  
  return { 
    products, 
    loading, 
    error, 
    refetch: getProducts 
  };
};
