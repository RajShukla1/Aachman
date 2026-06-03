import { prisma } from "@/lib/prisma";
import Image from "next/image";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Menu | Aachman Banquet & Restaurant",
  description: "Explore our exquisite Indian, Chinese, and Continental menu at Aachman Banquet. Indulge in premium dining in Vikas Nagar, Lucknow.",
};

export default async function MenuPage() {
  const menuItems = await prisma.menu.findMany({
    where: { isAvailable: true },
    orderBy: { createdAt: 'desc' }
  });

  const groupedMenu = menuItems.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, typeof menuItems>);

  return (
    <div className="bg-[#fcfaf8] min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center bg-black">
        <Image
          src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80"
          alt="Fine Dining at Aachman"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-4 tracking-wider">Our Menu</h1>
          <p className="text-xl text-[#d4af37] font-medium max-w-2xl mx-auto">
            A culinary journey crafted with passion, tradition, and the finest ingredients.
          </p>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        {Object.keys(groupedMenu).length > 0 ? (
          <div className="space-y-24">
            {Object.entries(groupedMenu).map(([category, items]) => (
              <div key={category} className="scroll-mt-24" id={category.toLowerCase().replace(/\s+/g, '-')}>
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-serif text-[#2c3e50] relative inline-block">
                    {category}
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-[#d4af37]"></div>
                  </h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
                  {items.map((item) => (
                    <div key={item.id} className="flex flex-col group border-b border-gray-200 pb-6 hover:border-[#d4af37] transition-colors">
                      <div className="flex justify-between items-baseline mb-2">
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#d4af37] transition-colors">{item.name}</h3>
                        <div className="flex-grow mx-4 border-b border-dotted border-gray-300"></div>
                        <span className="text-lg font-semibold text-[#2c3e50]">₹{item.price}</span>
                      </div>
                      {item.description && (
                        <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h2 className="text-2xl font-serif text-gray-500">Our menu is currently being updated. Check back soon!</h2>
          </div>
        )}
      </section>
    </div>
  );
}
