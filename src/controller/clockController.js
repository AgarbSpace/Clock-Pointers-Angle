import { formatError } from '../utils/errorUtils.js';
import clockService from '../service/clockService.js';
import validationUtils from '../utils/validationUtils.js';

async function calculatePointersAngle(req, res) {
  let { hour, minute } = req.params;

  if (!minute) {
    minute = 0;
  }

  if (
    !validationUtils.checkIfHaveOnlyNumbers(hour) ||
    !validationUtils.checkIfHaveOnlyNumbers(minute)
  ) {
    throw formatError('The params must be a positive integer number type\n');
  }

  if (hour > 23 || hour < 0 || minute > 59 || minute < 0) {
    throw formatError(
      'Hour must be between 0 - 23 and Minutes between 0 - 59\n'
    );
  }
  
  if (hour >= 12) {
    hour -= 12;
  }

  const register = await clockService.checkIfRegisterExists(
    parseInt(hour, 10),
    parseInt(minute, 10)
  );

  if (register) {
    return res.send({ angle: register.angle }).status(201);
  }

  let angle = Math.floor(Math.abs((60 * hour - 11 * minute) / 2));

  if (angle > 180) {
    angle = Math.abs(angle - 360);
  }

  await clockService.insert(
    parseInt(hour, 10),
    parseInt(minute, 10),
    Number(angle, 10)
  );

  return res.send({ angle }).status(201);
}

const clockController = {
  calculatePointersAngle,
};

export default clockController;
