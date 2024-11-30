import { PrismaClient } from '@prisma/client';
import { SentencesMock } from './mock-data';

const prisma = new PrismaClient();

async function main() {
  await prisma.sentence.createMany({
    data: SentencesMock,
  });
}

main()
  .catch(() => {
    process.exit(1);
  })

  .finally(async () => {
    await prisma.$disconnect();
  });
