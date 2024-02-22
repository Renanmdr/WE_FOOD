import express from 'express'
const router = express.Router()

import { FoodController } from '../controllers/FoodController.js'
import { verifyToken } from '../helpers/verify-token.js'

router.post('/create', verifyToken, FoodController.create)

export {router}