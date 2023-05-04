import { Router } from 'express';
import clockController from '../controller/clockController.js';

const clockRouter = Router();

clockRouter.get('/:hour/:minute', clockController.calculatePointersAngle);

export default clockRouter;
