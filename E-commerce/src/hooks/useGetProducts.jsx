// import { useEffect } from "react";
// import { useState } from "react";
// import { API_URL } from "../config.js";


// function useGetProducts(){
//     const [products, setProducts] = useState([])
//     const [error, setError] = useState(null)
//     const [loading, setLoading] = useState(false)

//     const getProducts = async (url) => {
//         try{
//         setLoading(true)
//         setError(null)

//         const response = await fetch(url)
//         if(!response.ok){
//             throw new Error ("Error al traer registros de productos", response.status)
//         }

//         const data = await response.json()
//         setProducts(data)
//     }catch (error){
//         console.error(error)
//         setError(error)
//         setProducts([])  
//     }finally{
//         setLoading(false);
//     }
//     };
//     useEffect(() => {
//         getProducts(`${API_URL}/products`)
//     }, [])
//     return {products, error, loading}
// }
// export default useGetProducts