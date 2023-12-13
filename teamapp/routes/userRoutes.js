import { Router } from 'express';
import userController from '../controllers/UserController.js';
import { isAuthenticated } from '../middleware/verify.js';
import multer from 'multer'
import image from '../models/image.js';
import uploadConfig from '../config/multer.js';
import 'dotenv/config';

const router = Router()

router.get('/', userController.getUser);

router.get('/start', userController.getStart);

router.get('/login', userController.getLogin);

router.get('/getusers', userController.userReadAll);

router.get('/profile', userController.readProfile);

router.get('/users/me', isAuthenticated, userController.getProfile);

router.post('/signin', userController.SignIn);

router.post('/newuser', userController.userCreatePost);

router.post('/users/image',
isAuthenticated,
multer(uploadConfig).single('image'), 
    async (req, res) => {
        try {
            const codUser = req.codUser;
      
            if (req.file) {
              const path = `/imgs/profile/${req.file.filename}`;
      
              const newImage = await image.create({ codUser, path });
              console.log(codUser, path);
      
              res.sendStatus(201).json(newImage);
            } else {
              throw new Error();
            }
          } catch (error) {
            throw new HTTPError('Unable to create image', 400);
          }
});

router.put('/users/image',
isAuthenticated,
multer(uploadConfig).single('image'), 
    async (req, res) => {
        try {
            const codUser = req.codUser;
      
            if (req.file) {
              const path = `/imgs/profile/${req.file.filename}`;
      
              const newImage = await image.update({ codUser, path });
      
              res.sendStatus(201).json(newImage);
            } else {
              throw new Error();
            }
          } catch (error) {
            throw new HTTPError('Unable to create image', 400);
          }
});

export default router;