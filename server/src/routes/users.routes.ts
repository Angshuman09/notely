import express from 'express'
import { login, logout, register, getUser } from '../controllers/users.controller.js';
import { protechUser } from '../middleware/user.middleware.js';
const router = express.Router();

router.post('/register', register );
router.post('/login', login );
router.post('/logout', logout);
router.get('/get-user', protechUser, getUser);

export default router;