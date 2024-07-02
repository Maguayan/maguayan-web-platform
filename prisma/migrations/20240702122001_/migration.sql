-- CreateTable
CREATE TABLE "User" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "clerkId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DeployedBuoy" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "configId" BIGINT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DeployedBuoy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BuoyAccess" (
    "id" BIGSERIAL NOT NULL,
    "buoyId" BIGINT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BuoyAccess_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BuoyConfig" (
    "id" BIGSERIAL NOT NULL,
    "interval" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BuoyConfig_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DetectProcesses" (
    "id" BIGSERIAL NOT NULL,
    "buoyId" BIGINT NOT NULL,
    "detectedMicroplastics" INTEGER NOT NULL,
    "imgUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DetectProcesses_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DeployedBuoy_configId_key" ON "DeployedBuoy"("configId");

-- CreateIndex
CREATE UNIQUE INDEX "BuoyAccess_buoyId_key" ON "BuoyAccess"("buoyId");

-- CreateIndex
CREATE UNIQUE INDEX "DetectProcesses_buoyId_key" ON "DetectProcesses"("buoyId");
