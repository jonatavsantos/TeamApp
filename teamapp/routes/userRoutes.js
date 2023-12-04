import { Router } from 'express';
import userController from '../controllers/UserController.js';
import 'dotenv/config';

const router = Router()

router.get('/', userController.getUser);

router.get('/start', userController.getStart);

router.get('/login', userController.getLogin);

router.get('/getusers', userController.userReadAll);

router.get('/profile', userController.readProfile);

router.get('/users/me', userController.getProfile);

router.post('/signin', userController.SignIn);

router.post('/newuser', userController.userCreatePost);

router.post('/users/image', userController.postImage);

router.put('/users/image', userController.updateImage);

export default router;