import supertest from 'supertest';
import app from '../src/app.js';
import prisma, { disconnectPrisma } from '../src/database.js';
import factory from './factory/dataFactory.js';
import dotenv from 'dotenv';
import clockService from '../src/service/clockService.js';

dotenv.config({ path: '.env.test' });

describe('GET /v1/rest/clock/:hour/:minute', () => {
  afterEach(async () => {
    await disconnectPrisma();
  })

  it('Should return 200 and persist data when giving a valid hour and minute that have not been saved yet', async () => {
    await prisma.$executeRaw`TRUNCATE TABLE "Clock"`;

    let { hour, minute } = factory.giveHourAndMinute();
    let islower = false;

    if (hour < 12) {
      hour += 12;
      islower = true;
    }

    const response = await supertest(app).get(
      `/v1/rest/clock/${hour}/${minute}`
    );

    if (islower) {
      hour -= 12;
    }

    if (hour >= 12) {
      hour -= 12;
    }
  
    const registeredCalculation = await clockService.checkIfRegisterExists(hour, minute);

    expect(registeredCalculation).not.toBeNull();
    expect(response.status).toBe(200);
  });

  it('Should return 200 and dont save when giving a valid hour and minute that have saved', async () => {
    await prisma.$executeRaw`TRUNCATE TABLE "Clock"`;

    let { hour, minute } = factory.giveHourAndMinute();
    const firstInsert = await supertest(app).get(
      `/v1/rest/clock/${hour}/${minute}`
    );
    const secondInsert = await supertest(app).get(
      `/v1/rest/clock/${hour}/${minute}`
    );

    if (hour >= 12) {
      hour -= 12;
    }
  
    const registeredCalculation = await prisma.clock.findMany({
      where: {
        hour: {
          equals: hour,
        },
        minute: {
          equals: minute,
        },
      },
    });

    expect(registeredCalculation.length).toEqual(1);
    expect(firstInsert.status).toBe(200);
    expect(secondInsert.status).toBe(200);
  });

  it('Should return an FormatError with status 422 when giving a negative, decimal or NaN', async () => {
    await prisma.$executeRaw`TRUNCATE TABLE "Clock"`;

    let hour = factory.giveNegativeNumber();
    let minute = factory.giveNegativeNumber();
    
    const responseGivingNegativeNumbers = await supertest(app).get(
      `/v1/rest/clock/${hour}/${minute}`
    );

    expect(responseGivingNegativeNumbers.status).toBe(422);

    hour = factory.giveDecimalNumber();
    minute = factory.giveDecimalNumber();
    
    const responseGivingDecimalNumbers = await supertest(app).get(
      `/v1/rest/clock/${hour}/${minute}`
    );

    expect(responseGivingDecimalNumbers.status).toBe(422);

    hour = factory.giveRandomString(10);
    minute = factory.giveRandomString(10);

    const responseGivingLettersAndNumbers = await supertest(app).get(
      `/v1/rest/clock/${hour}/${minute}`
    );

    expect(responseGivingLettersAndNumbers.status).toBe(422);
  });

  it('Should return an FormatError with status 422 when giving a number greater than 23 in hour and grater than 59 in minute', async () => {
    await prisma.$executeRaw`TRUNCATE TABLE "Clock"`;

    let { hour, minute } = factory.giveInvalidHourAndMinute();

    const response = await supertest(app).get(
      `/v1/rest/clock/${hour}/${minute}`
    );
  
    const registeredCalculation = await clockService.checkIfRegisterExists(hour, minute);

    expect(registeredCalculation).toBeNull();
    expect(response.status).toBe(422);
  })

  
});

describe('GET /v1/rest/clock/:hour', () => {
  afterEach(async () => {
    await disconnectPrisma();
  });

  it('Should return status 200 when giving only hour param', async () => {
    let { hour } = factory.giveHourAndMinute();
    let minute = 0;

    const response = await supertest(app).get(
      `/v1/rest/clock/${hour}`
    );

    if (hour >= 12) {
      hour -= 12;
    }
  
    const registeredCalculation = await clockService.checkIfRegisterExists(hour, minute);

    expect(registeredCalculation).not.toBeNull();
    expect(response.status).toBe(200);
  });
})

describe('GET /v1/rest/clock/', () => {
  afterEach(async () => {
    await disconnectPrisma();
  });

  it('Should return status 404 when no giving params', async () => {
  
    const response = await supertest(app).get(
      `/v1/rest/clock/`
    );

    expect(response.status).toBe(404);
    expect(response.text).toBe('At least hour param must be given\n')
  });

  it('Should return status 404 when try to access any route', async () => {
  
    const response = await supertest(app).get(
      `/*`
    );

    expect(response.status).toBe(404);
  });
})