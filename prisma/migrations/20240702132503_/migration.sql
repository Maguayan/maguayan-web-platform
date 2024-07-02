/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Post";

-- AddForeignKey
ALTER TABLE "DeployedBuoy" ADD CONSTRAINT "DeployedBuoy_configId_fkey" FOREIGN KEY ("configId") REFERENCES "BuoyConfig"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BuoyAccess" ADD CONSTRAINT "BuoyAccess_buoyId_fkey" FOREIGN KEY ("buoyId") REFERENCES "DeployedBuoy"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DetectProcesses" ADD CONSTRAINT "DetectProcesses_buoyId_fkey" FOREIGN KEY ("buoyId") REFERENCES "DeployedBuoy"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
