import clockRepository from '../repository/clockRepository.js';

async function insert(hour, minute, angle) {
  await clockRepository.create(hour, minute, angle);
}

async function checkIfRegisterExists(hour, minute) {
  return await clockRepository.find(hour, minute);
}

const clockService = {
  insert,
  checkIfRegisterExists,
};

export default clockService;
