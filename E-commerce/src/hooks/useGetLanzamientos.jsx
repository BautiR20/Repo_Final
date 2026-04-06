import { useEffect } from "react";
import { useState } from "react";
import { API_URL } from "../config.js";


function useGetLanzamientos(){
    const [lanzamientos, setLanzamientos] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const getLanzamientos = async (url) => {
        try{
        setLoading(true)
        setError(null)

        const response = await fetch(url)
        if(!response.ok){
            throw new Error ("Error al traer registros de productos", response.status)
        }

        const data = await response.json()
        setLanzamientos(data)
    }catch (error){
        console.error(error)
        setError(error)
        setLanzamientos([])  
    }finally{
        setLoading(false);
    }
    };
    useEffect(() => {
        getLanzamientos(`${API_URL}/lanzamientos`)
    }, [])
    return {lanzamientos, error, loading}
}
export default useGetLanzamientos