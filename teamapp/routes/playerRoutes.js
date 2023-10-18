import { Router } from 'express';
import PlayerController from '../controllers/PlayerController.js';

const router = Router()

router.get('/getplayers', PlayerController.playerReadAll);

router.post('/newplayer', PlayerController.playerCreateGet);

router.delete('/player/:id', PlayerController.playerDelete);

router.put('/player/:id', PlayerController.playerUpdate);

export default router;