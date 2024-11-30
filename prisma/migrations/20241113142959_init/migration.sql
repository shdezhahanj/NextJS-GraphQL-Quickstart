-- CreateTable
CREATE TABLE "Sentence" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "quote" TEXT,
    "author" TEXT,

    CONSTRAINT "Sentence_pkey" PRIMARY KEY ("id")
);
