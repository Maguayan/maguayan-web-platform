-- DropForeignKey
ALTER TABLE "BuoyAccess" DROP CONSTRAINT "BuoyAccess_buoyId_fkey";

-- DropForeignKey
ALTER TABLE "DeployedBuoy" DROP CONSTRAINT "DeployedBuoy_configId_fkey";

-- DropForeignKey
ALTER TABLE "DetectProcesses" DROP CONSTRAINT "DetectProcesses_buoyId_fkey";

-- CreateTable
CREATE TABLE "Post" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Post_name_idx" ON "Post"("name");
