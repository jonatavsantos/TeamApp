import { Router } from 'express';
import userController from '../controllers/UserController.js';

const router = Router()

router.get('/', (req, res, next) =>
    res.render('index'))

router.get('/getusers', userController.userReadAll);

router.post('/newuser', userController.userCreatePost);

export default router;