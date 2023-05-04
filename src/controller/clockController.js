import { formatError } from '../utils/errorUtils.js';

async function calculatePointersAngle(req, res) {
  let { hour } = req.params;
  const { minute } = req.params || 0;

  if (!hour) {
    throw formatError('Must be given at least hour param\n');
  }

  if (hour > 23 || hour < 0 || minute > 59 || minute < 0) {
    throw formatError('Hour must be between 0 - 23 and Minutes between 0 - 59\n');
  }

  if (hour > 12) {
    hour -= 12;
  }

  let angle = Math.abs((60 * hour - 11 * minute) / 2);

  if (angle > 180) {
    angle = Math.abs(angle - 360);
  }

  res.send({ angle, hour }).status(201);
}

const clockController = {
  calculatePointersAngle,
};

export default clockController;
