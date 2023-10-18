import { Router } from 'express';
import userController from '../controllers/UserController.js';

const router = Router()

router.get('/', userController.getUser)

router.get('/getusers', userController.userReadAll);

router.post('/newuser', userController.userCreatePost);

export default router;