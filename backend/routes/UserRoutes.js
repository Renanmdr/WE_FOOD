import { Router } from 'express'
const router = Router()
import { UserController } from '../controllers/UserController.js'

// middleware to validate token
import { verifyToken } from '../helpers/verify-token.js'

router.post('/register', UserController.resgister)
router.post('/login', UserController.login)
router.get('/checkuser', UserController.checkUser)
router.get('/:id', UserController.getUserById)
router.patch('/edit/:id', verifyToken, UserController.editUser)



export {router}

