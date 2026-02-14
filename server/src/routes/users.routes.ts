import express from 'express'
import { auth , logout, getUser } from '../controllers/users.controller.js';
import { protechUser } from '../middleware/user.middleware.js';
const router = express.Router();

router.post('/auth', auth );
router.post('/logout', logout);
router.get('/get-user', protechUser, getUser);

export default router;