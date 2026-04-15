import { checkModelExist } from "../helpers/checkExist.js"
import Product from "../models/productModel.js"

export const createProductService = async (productData) => {
    
    const {name} = productData
    await checkModelExist(Product, {name}, false, 400, `Product ${name}, already exist`)

    const newProduct = new Product(productData)

    const savedProduct = await newProduct.save()

    return savedProduct
}

export const getAllProductService = async (query) => {
    let filters = {};
    
    filters.quantity = { $gt: 0 };
    
    if (query.category) {
        filters.category = query.category;
    }
    
    
    if (query.search) {
        filters.$or = [
            { name: { $regex: query.search, $options: 'i' } },
            { description: { $regex: query.search, $options: 'i' } }
        ];
    }
    
    
    if (query.highlighted) {
        filters.highlighted = query.highlighted === 'true';
    }

    
    const products = await Product.find(filters).populate("category")

    return products
}

export const getProductByIdService = async (id) => {
    
    await checkModelExist(Product, { _id: id }, true, 404, "Product not found")
    
    
    const product = await Product.findById(id).populate("category")
    return product
}

export const updateProductService = async (id, productData) => {
    await checkModelExist(Product, { _id: id }, true, 404, "Product not found")

    
    
    
    
    const updateProduct = await Product.findOneAndUpdate(
        {_id: id},
        productData,
        { returnDocument: 'after' }
    )
    return updateProduct
}

export const deleteProductService = async (id) => {
    await checkModelExist(Product, { _id: id }, true, 404, "Product not found")

    const response = await Product.findByIdAndDelete(id)

    return { message: "Product deleted successfully", data: response }
}