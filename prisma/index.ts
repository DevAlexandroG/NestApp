import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Connect the client
  await prisma.$connect()
  
  await prisma.document.create({
    data: {
      title: 'Analyzer',
      text: 'Analysis Data',
    },
  })

  await prisma.document.update({
    where: {
        title: 'Analyzer',
    },
    data: {
        text: "Analysis Data v2"
      },
  })


  const allDocuments = await prisma.document.findMany()
  console.log(allDocuments)
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })