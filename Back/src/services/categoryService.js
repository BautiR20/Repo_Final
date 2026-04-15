import { checkModelExist } from "../helpers/checkExist.js"
import Category from "../models/categoryModel.js"
import Product from "../models/productModel.js"

export const getAllCategoryService = async () => {
    const categories = await Category.find()
    return categories
}

export const createCategoryService = async (name) => {
    await checkModelExist(Category, {name}, false, 400, "Category already exists")
    
    
    
    
    
    
    const newCategory = new Category({name})
    const response = await newCategory.save()
    return response
}

export const updateCategoryService = async (id, name) => {
    
    
    await checkModelExist(Category, {_id: id}, true, 400, "Category not found")
    
    
    
    
    
    
    const updatedCategory = await Category.findOneAndUpdate(
        {_id: id},
        name,
        { returnDocument: 'after' }
    )
    return updatedCategory
}

export const deleteCategoryService = async (id) => {
    await checkModelExist(Category, {_id: id}, true, 400, "Category not found")

    const deletedCategory = await Category.findByIdAndDelete(id)

    
    

    await Product.updateMany(
        { category: id },
        { $set: {category: null} }
    )

    return { message: "Category deleted successfully", data: deletedCategory }

}