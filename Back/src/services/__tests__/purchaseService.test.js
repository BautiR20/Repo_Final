import {afterEach, jest} from '@jest/globals'
import {checkModelExist} from '../../helpers/checkExist.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { validateUserService } from '../userService.js'
import { createPurchaseService } from '../purchaseService.js'
import Product from '../../models/productModel.js'


jest.mock("../../models/productModel.js")





jest.mock('firebase/app', () => ({
    initializeApp: jest.fn().mockReturnValue({})
}))
jest.mock('firebase/firestore', () => ({
    collection: jest.fn(),
    
    addDoc: jest.fn().mockResolvedValue({ id: 'mockPurchaseId' }),
    query: jest.fn(),
    orderBy: jest.fn(),
    getDocs: jest.fn(),
    where: jest.fn(),
    doc: jest.fn(),
    getDoc: jest.fn(),
    getFirestore: jest.fn().mockReturnValue({})
}))

describe('createPurchaseService', () => {
    
    it('should throw error if items are missing or empty', async () => {
        
        await expect(createPurchaseService({}))
            .rejects.toThrow('Items array is required and must not be empty')
    })

    
    it('should create purchase is stock is available', async () => {
        const mockProduct = {
            _id: 'p1',
            name: 'Test product',
            quantity: 10,
            price: 100,
            profitRate: 1.2
        }
        Product.findById.mockResolvedValue(mockProduct)
        Product.findOneAndUpdate.mockResolvedValue({})

        const purchaseData = {
            userId: 'u1',
            items: [{productId: 'p1', quantity: 2}]
        }

        const result = await createPurchaseService(purchaseData)

        
        expect(result.id).toBe('mockPurchaseId')
        
        expect(result.totalAmount).toBe(240)
        
        expect(Product.findOneAndUpdate).toHaveBeenCalled()
    } )

    
    it('should throw error if not enough stock', async() => {
        const mockProduct = {
            _id: 'p1',
            name: 'Test product',
            quantity: 1,
            price: 100,
            profitRate: 1.2
        }

        Product.findById.mockResolvedValue(mockProduct)

        const purchaseData = {
            userId: 'u1',
            items: [{productId: 'p1', quantity: 2}]
        }

        
        
        await expect(createPurchaseService(purchaseData))
            .rejects.toThrow(/Not enough stock/)
    })
})