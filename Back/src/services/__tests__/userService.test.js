import {afterEach, jest} from '@jest/globals'
import {checkModelExist} from '../../helpers/checkExist.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { validateUserService } from '../userService.js'

    
    


jest.mock("../../models/userModel.js")
jest.mock('bcrypt')
jest.mock('jsonwebtoken')
jest.mock('../../helpers/checkExist.js', () => ({
    checkModelExist: jest.fn()
}))

describe('userService Unit Tests', () => {
    
    afterEach(() => {
        jest.clearAllMocks()
    })

    describe('validateUserService', () => {
        
        it('should throw error if email or password missing', async () => {
            
            
            await expect(validateUserService({email: 'test@test.com'}))
                .rejects.toThrow("There's a missing field")
        } )

        
        
        it('should login and return token if credentials are correct', async () => {
            
            
            const mockUser = {
                _id: '123',
                email: 'test@test.com',
                password: 'hashedPassword',
                role: "ADMIN"
            }

            
            checkModelExist.mockResolvedValue(mockUser)
            bcrypt.compareSync.mockReturnValue(true)
            jwt.sign.mockReturnValue('mockToken')

            
            const result = await validateUserService({
                email: 'test@test.com',
                password: 'password123'
            })

            
            expect(result).toEqual({
                message: "Logged In",
                token: 'mockToken'
            })
            
            expect(jwt.sign).toHaveBeenCalled()
        })

        it('should throw error if password is incorrect', async() => {
            
            const mockUser = {
                _id: '123',
                email: 'test@test.com',
                password: 'hashedPassword',
                role: "ADMIN"
            }

            checkModelExist.mockResolvedValue(mockUser)
            bcrypt.compareSync.mockReturnValue(false)

            
            await expect(validateUserService({
                email: 'test@test.com',
                password: 'wrongPassword',
            })).rejects.toThrow("User or password are incorrect")
        })
    })
})