import prisma, { disconnectPrisma } from '../database.js';

async function create(hour, minute, angle) {
  await prisma.clock.create({
    data: {
      hour,
      minute,
      angle,
    },
  });
  disconnectPrisma();
}

async function find(hour, minute) {
  const dataExists = await prisma.clock.findFirst({
    where: {
      hour: {
        equals: hour,
      },
      minute: {
        equals: minute,
      },
    },
  });
  disconnectPrisma();
  return dataExists;
}

const clockRepository = {
  create,
  find,
};

export default clockRepository;
