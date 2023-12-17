import { Router } from 'express';
import userController from '../controllers/UserController.js';
import { isAuthenticated } from '../middleware/verify.js';
import 'dotenv/config';

const router = Router()

router.get('/', userController.getUser);

router.get('/start', userController.getStart);

router.get('/login', userController.getLogin);

router.get('/getusers', userController.userReadAll);

router.post('/signin', userController.SignIn);

router.post('/newuser', userController.userCreatePost);

export default router;