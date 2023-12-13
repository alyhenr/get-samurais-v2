-- AlterTable
ALTER TABLE "Contract" ADD COLUMN     "contractStatus" "ContractStatus" NOT NULL DEFAULT 'PROPOSAL';

-- DropEnum
DROP TYPE "ProposalStatus";
