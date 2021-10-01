/*
  Warnings:

  - You are about to drop the column `callId` on the `Message` table. All the data in the column will be lost.
  - You are about to drop the column `isAtendant` on the `Message` table. All the data in the column will be lost.
  - You are about to drop the `Atendant` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Call` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `connectionId` to the `Message` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sender` to the `Message` table without a default value. This is not possible if the table is not empty.
  - Added the required column `text` to the `Message` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Call" DROP CONSTRAINT "Call_atendantId_fkey";

-- DropForeignKey
ALTER TABLE "Message" DROP CONSTRAINT "Message_callId_fkey";

-- AlterTable
ALTER TABLE "Message" DROP COLUMN "callId",
DROP COLUMN "isAtendant",
ADD COLUMN     "connectionId" TEXT NOT NULL,
ADD COLUMN     "sender" TEXT NOT NULL,
ADD COLUMN     "text" TEXT NOT NULL;

-- DropTable
DROP TABLE "Atendant";

-- DropTable
DROP TABLE "Call";

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Connection" (
    "id" TEXT NOT NULL,
    "first_userId" TEXT NOT NULL,
    "second_userId" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Connection_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_connectionId_fkey" FOREIGN KEY ("connectionId") REFERENCES "Connection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
