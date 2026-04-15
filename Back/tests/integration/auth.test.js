
import request from 'supertest'
import mongoose from 'mongoose'
import { MongoMemoryServer } from 'mongodb-memory-server'
import app from '../../index.js'
import User from '../../src/models/userModel.js'





let mongoServer;

beforeAll(async () => {
    
    mongoServer = await MongoMemoryServer.create()
    const uri = mongoServer.getUri()
    await mongoose.connect(uri)
})

afterAll(async () => {
    
    await mongoose.disconnect()
    
    await mongoServer.stop()
})

describe('Auth integration Tests', () => {
    beforeEach(async () => {
        
        await User.deleteMany({})
    })

    describe('POST /api/user/register' , () => {
    it('should register a new user successfully', async () => {
        const userData = {
            email: 'test@test.com',
            password: 'Password123',
            name: 'Test user',
            lastName: 'doe',
            role: "CUSTOMER"
        }

        const response = await request(app)
            .post("/api/user/register")
            .send(userData)

            
            expect(response.status).toBe(201)
            
            expect(response.body.email).toBe(userData.email)

            
            const userInDB = await User.findOne({email: userData.email})
            expect(userInDB).not.toBeNull()
    })
})
})