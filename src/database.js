import pkg from '@prisma/client';

const { PrismaClient } = pkg;
const prisma = new PrismaClient();

export async function disconnectPrisma() {
  await prisma.$disconnect();
}

export default prisma;
