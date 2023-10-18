import { Router } from 'express';
import teamController from '../controllers/TeamController.js';

const router = Router()

router.get('/getteams', teamController.teamReadAll);

router.post('/newteam', teamController.teamCreateGet);

router.delete('/team/:id', teamController.teamDelete);

router.put('/team/:id', teamController.teamUpdate);

export default router;