import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('Start seeding admin...');

  // Ensure business exists
  let business = await prisma.business.findFirst();
  if (!business) {
    business = await prisma.business.create({
      data: {
        name: 'Aachman Banquet',
        domain: 'aachman.com',
      },
    });
  }

  const hashedPassword = await bcrypt.hash('admin123', 10);

  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@aachman.com' },
    update: {
      password: hashedPassword,
      role: 'MANAGER',
    },
    create: {
      email: 'admin@aachman.com',
      name: 'Admin User',
      password: hashedPassword,
      role: 'MANAGER',
      businessId: business.id,
    },
  });

  console.log(`Admin seeded successfully! Email: ${adminUser.email}`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
