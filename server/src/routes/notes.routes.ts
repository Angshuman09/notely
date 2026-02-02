import express from 'express'
import {requireAuth} from '@clerk/express'
import { notesController } from '../controllers/notes.controller.js';
import { syncUser } from '../middleware/user.middleware.js';

const router = express.Router();

router.post('/', requireAuth(), syncUser, notesController);

export default router;