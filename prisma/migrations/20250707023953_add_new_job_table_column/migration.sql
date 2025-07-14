-- AlterTable
ALTER TABLE "Job" ADD COLUMN     "category" TEXT,
ADD COLUMN     "description" TEXT,
ALTER COLUMN "company" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "password" TEXT;
