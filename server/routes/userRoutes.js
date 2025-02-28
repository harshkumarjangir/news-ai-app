import express from 'express'
import { login, register, verify } from '../controllers/authController.js'
import verifyToken from '../middleware/verifyToken.js';

const userRoutes = express.Router();

userRoutes.post('/register', register);
userRoutes.post('/login', login)
// Will add a middleware in verify -- to check token
userRoutes.get('/verify', verifyToken, verify)

export default userRoutes;