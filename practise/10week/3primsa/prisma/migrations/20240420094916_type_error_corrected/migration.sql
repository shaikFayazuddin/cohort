/*
  Warnings:

  - You are about to drop the column `fisrtName` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "fisrtName",
ADD COLUMN     "firstName" TEXT;
