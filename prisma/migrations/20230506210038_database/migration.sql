-- CreateTable
CREATE TABLE "Clock" (
    "id" SERIAL NOT NULL,
    "hour" INTEGER NOT NULL,
    "minute" INTEGER NOT NULL,
    "angle" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Clock_pkey" PRIMARY KEY ("id")
);
