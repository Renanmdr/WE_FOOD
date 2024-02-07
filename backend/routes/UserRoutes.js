import { Router } from 'express'
const router = Router()
import { UserController } from '../controllers/UserController.js'

router.post('/register', UserController.resgister)



export {router}

