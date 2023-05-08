/*
  Warnings:

  - You are about to drop the `Clock` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Clock";

-- CreateTable
CREATE TABLE "clock" (
    "id" SERIAL NOT NULL,
    "hour" INTEGER NOT NULL,
    "minute" INTEGER NOT NULL,
    "angle" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "clock_pkey" PRIMARY KEY ("id")
);
