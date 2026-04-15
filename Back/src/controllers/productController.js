import { createProductService, deleteProductService, getAllProductService, updateProductService, getProductByIdService } from "../services/productService.js"
import { handleError } from "../utils/errorHandler.js"
import { uploadImageToSupabase } from "../utils/supabaseStorage.js"

export const createProduct = async (req, res) => {
    try {
        
        let productData = req.body || {};

        console.log("--- DEBUG PRODUCT UPLOAD ---");
        console.log("REQ.BODY:", req.body);
        console.log("REQ.FILE:", req.file ? req.file.originalname : "Ninguno");

        
        if (!req.body || Object.keys(req.body).length === 0) {
            
            if (!req.file) {
                 return res.status(400).json({ message: "No se recibió información en el formulario (body vacío)" });
            }
        }

        
        if (req.file) {
            const imageUrl = await uploadImageToSupabase(req.file, "imagenes");
            productData.image = imageUrl; 
        }

        
        if (!productData || Object.keys(productData).length === 0) {
            throw new Error("No se ha recibido información del producto en el cuerpo de la petición");
        }

        
        const savedProduct = await createProductService(productData)
        
        res.status(201).json(savedProduct)
    } catch (error) {
        
        
        handleError(error, res)
    }
}

export const getAllProduct = async (req, res) => {
    try {
        
        const products = await getAllProductService(req.query)
        res.status(200).json(products)
    } catch (error) {
        handleError(error, res)
    }
}

export const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await getProductByIdService(id);
        res.status(200).json(product);
    } catch (error) {
        handleError(error, res);
    }
}

export const updateProduct = async (req, res) => {
    try {
        
        
        const { id } = req.params
        const productData = req.body

        const updatedProduct = await updateProductService(id, productData)
        
        res.status(201).json(updatedProduct)

    } catch (error) {
        handleError(error, res)
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const {id} = req.params
        const result = await deleteProductService(id)
        res.status(201).json(result)
    } catch (error) {
        handleError(error, res)
    }
}