import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding database with Aachman demo content...')

  // Clean up existing data to ensure idempotent seeding
  await prisma.business.deleteMany()

  // 1. Create the Main Business
  const business = await prisma.business.create({
    data: {
      name: 'Aachman Banquet & Restaurant',
      description: 'Premium banquet hall and restaurant located in Vikas Nagar, Lucknow.',
      domain: 'aachman.local',
    },
  })

  // 2. Create Users
  await prisma.user.createMany({
    data: [
      {
        name: 'Super Admin',
        email: 'admin@aachman.local',
        role: 'SUPERADMIN',
        businessId: business.id,
      },
      {
        name: 'Manager',
        email: 'manager@aachman.local',
        role: 'MANAGER',
        businessId: business.id,
      },
      {
        name: 'Staff Member',
        email: 'staff@aachman.local',
        role: 'STAFF',
        businessId: business.id,
      },
    ],
  })

  // 3. Create Packages
  await prisma.package.createMany({
    data: [
      {
        title: 'Premium Wedding Package',
        type: 'Wedding',
        description: 'Complete wedding setup including catering for up to 500 guests, premium decoration, and bridal suite.',
        price: 500000,
        features: ['500 Guests Capacity', 'Premium Veg/Non-Veg Catering', 'Floral Decoration', 'Bridal Suite', 'Valet Parking'],
        businessId: business.id,
      },
      {
        title: 'Silver Birthday Package',
        type: 'Birthday',
        description: 'Perfect for kid\'s birthdays or family gatherings. Includes basic decoration and high-tea menu.',
        price: 50000,
        features: ['100 Guests Capacity', 'High-Tea Menu', 'Balloon Decoration', 'Music System'],
        businessId: business.id,
      },
      {
        title: 'Corporate Meeting Package',
        type: 'Corporate',
        description: 'Professional setup with projector, sound system, and executive lunch.',
        price: 75000,
        features: ['50 Guests Capacity', 'Executive Lunch Buffet', 'Projector & Screen', 'High-speed Wi-Fi', 'Notepads & Pens'],
        businessId: business.id,
      },
    ],
  })

  // 4. Create Menu Categories & Items
  await prisma.menu.createMany({
    data: [
      { category: 'Starters', name: 'Paneer Tikka', description: 'Cottage cheese marinated in yogurt and spices.', price: 350, businessId: business.id },
      { category: 'Starters', name: 'Chicken Malai Tikka', description: 'Creamy and mild chicken chunks roasted in tandoor.', price: 450, businessId: business.id },
      { category: 'Main Course', name: 'Dal Makhani', description: 'Slow-cooked black lentils with butter and cream.', price: 300, businessId: business.id },
      { category: 'Main Course', name: 'Butter Chicken', description: 'Classic chicken curry in a rich tomato and butter sauce.', price: 500, businessId: business.id },
      { category: 'Breads', name: 'Garlic Naan', description: 'Refined flour bread topped with garlic and butter.', price: 70, businessId: business.id },
      { category: 'Desserts', name: 'Gulab Jamun', description: 'Deep-fried milk dumplings in sugar syrup.', price: 150, businessId: business.id },
    ],
  })

  // 5. Create Mock Leads
  const statuses: any[] = ['NEW', 'CONTACTED', 'FOLLOW_UP', 'QUOTATION_SENT', 'NEGOTIATION', 'CONFIRMED', 'LOST']
  const mockLeads = Array.from({ length: 30 }).map((_, i) => ({
    name: `Lead Customer ${i + 1}`,
    mobile: `+9198765432${String(i).padStart(2, '0')}`,
    email: `lead${i + 1}@example.com`,
    eventType: i % 2 === 0 ? 'Wedding' : 'Birthday',
    guestCount: (i * 10) + 50,
    status: statuses[i % statuses.length],
    source: i % 3 === 0 ? 'WhatsApp' : 'Website Form',
    businessId: business.id,
  }))
  await prisma.lead.createMany({ data: mockLeads })

  // 6. Create Galleries
  const mockGalleries = Array.from({ length: 50 }).map((_, i) => ({
    title: `Gallery Image ${i + 1}`,
    url: `https://res.cloudinary.com/demo/image/upload/sample.jpg`, // Placeholder image
    category: i % 2 === 0 ? 'Weddings' : 'Birthdays',
    type: 'IMAGE',
    businessId: business.id,
  }))
  await prisma.gallery.createMany({ data: mockGalleries })

  // 7. Create Testimonials
  const mockReviews = Array.from({ length: 20 }).map((_, i) => ({
    customerName: `Happy Customer ${i + 1}`,
    rating: i % 5 === 0 ? 4 : 5,
    content: 'Amazing experience! The food was great and the venue was absolutely beautiful.',
    isApproved: true,
    businessId: business.id,
  }))
  await prisma.review.createMany({ data: mockReviews })

  console.log('Database seeded successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
