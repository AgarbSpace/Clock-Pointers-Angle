import clockRepository from '../repository/clockRepository.js';

async function insert(hour, minute, angle) {
  await clockRepository.create(hour, minute, angle);
}

function checkIfRegisterExists(hour, minute) {
  return clockRepository.find(hour, minute);
}

const clockService = {
  insert,
  checkIfRegisterExists,
};

export default clockService;
