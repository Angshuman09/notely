import express from 'express';
import { requireAuth } from '@clerk/express';
import { userController } from '../controllers/users.controller.js';
const router = express.Router();
router.post('/', requireAuth(), userController);
export default router;
//# sourceMappingURL=users.routes.js.map