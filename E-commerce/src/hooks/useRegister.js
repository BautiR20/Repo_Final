import { useState } from 'react';
import { fetchApi } from '../services/api';

export const useRegister = () => {
  
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  
  
  const registerUser = async (userData) => {
     try {
      setLoading(true)
      setError(null)

      
      const data = await fetchApi("/user/register", {
        method: "POST",
        body: JSON.stringify(userData)
      })

      return {success: true, data}


     } catch (error) {
      setError(error.message)
      return {success: false, error: error.message}
     } finally {
      setLoading(false)
     }
  };

  return { registerUser, loading, error };
};
