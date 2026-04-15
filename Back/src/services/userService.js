import { SECRET } from '../config/config.js'
import { checkModelExist } from '../helpers/checkExist.js'
import User from '../models/userModel.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const createUserService = async (userData) => {
    const {email} = userData
    await checkModelExist(User, {email}, false, 400, `User with email ${email} already exist`)

    const newUser = new User(userData)
    const savedUser = await newUser.save()
    return savedUser
    
}

export const getUserService = async () => {
    
    const users = await User.find().select("-password")
    return users
}

export const updateUserService = async (id, userData) => {
    await checkModelExist(User, {_id: id}, true, 400, `User not found`)

    
    if(userData.password){
        userData.password = bcrypt.hashSync(userData.password, 10)
    }

    const updatedUser = await User.findOneAndUpdate(
        { _id: id },
        userData,
        { returnDocument: 'after' }
    )

    return updatedUser
}

export const deleteUserService = async (id) => {
    await checkModelExist(User, {_id: id}, true, 400, `User not found`)

    const deletedUser = await User.findByIdAndDelete(id)

    return { message: "User deleted successfully", data: deletedUser }
}


export const validateUserService = async (userData) => {
    const {password, email} = userData

    if(!(password && email)){
        const error = new Error("There's a missing field")
        error.statusCode = 400
        throw error
    }

    const userFound = await checkModelExist(User, {email}, true, 400, `User or password are incorrect`)

    
    if(!bcrypt.compareSync(password, userFound.password)){
        const error = new Error("User or password are incorrect")
        error.statusCode = 400
        throw error  
    }

    

    
    
    
    const payload = {
        userId: userFound._id,
        userEmail: userFound.email,
        role: userFound.role
    }

    
    
    
    const token = jwt.sign(payload, SECRET, {expiresIn: "1h"})

    

    return {message: "Logged In", token}
    
}