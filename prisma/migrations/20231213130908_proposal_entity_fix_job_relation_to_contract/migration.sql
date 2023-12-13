-- CreateEnum
CREATE TYPE "ProposalStatus" AS ENUM ('PEDING', 'ACCEPTED', 'REFUSED');

-- CreateEnum
CREATE TYPE "ContractStatus" AS ENUM ('ONGOING', 'FINISHED', 'CANCELLED');

-- CreateTable
CREATE TABLE "Proposal" (
    "providerId" TEXT NOT NULL,
    "receiverId" TEXT NOT NULL,
    "jobId" TEXT NOT NULL,

    CONSTRAINT "Proposal_pkey" PRIMARY KEY ("providerId","receiverId","jobId")
);

-- AddForeignKey
ALTER TABLE "Proposal" ADD CONSTRAINT "Proposal_providerId_fkey" FOREIGN KEY ("providerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Proposal" ADD CONSTRAINT "Proposal_receiverId_fkey" FOREIGN KEY ("receiverId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Proposal" ADD CONSTRAINT "Proposal_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "Job"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contract" ADD CONSTRAINT "Contract_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "Job"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
