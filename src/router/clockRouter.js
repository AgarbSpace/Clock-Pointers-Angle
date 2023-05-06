import { Router } from 'express';
import clockController from '../controller/clockController.js';
import { notFoundError } from '../utils/errorUtils.js';

const clockRouter = Router();

clockRouter.get(
  '/v1/rest/clock/:hour/:minute',
  clockController.calculatePointersAngle
);
clockRouter.get('/v1/rest/clock/:hour', clockController.calculatePointersAngle);
clockRouter.get('/v1/rest/clock/', () => {
  throw notFoundError('At least hour param must be given\n');
});
clockRouter.use('*', () => {
  throw notFoundError('Route does not exist');
});
export default clockRouter;
