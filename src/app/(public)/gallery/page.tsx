import { prisma } from "@/lib/prisma";
import Image from "next/image";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Gallery | Aachman Banquet & Restaurant",
  description: "View photos of our elegant banquet halls, premium dining setups, and memorable events at Aachman Banquet & Restaurant in Lucknow.",
};

export default async function GalleryPage() {
  const galleryItems = await prisma.gallery.findMany({
    orderBy: { createdAt: 'desc' }
  });

  const categories = Array.from(new Set(galleryItems.map(item => item.category || 'General')));

  return (
    <div className="bg-[#fcfaf8] min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[30vh] min-h-[300px] flex items-center justify-center bg-black">
        <Image
          src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80"
          alt="Aachman Gallery Hero"
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-4 tracking-wider">Media Gallery</h1>
          <p className="text-lg text-[#d4af37] font-medium max-w-2xl mx-auto">
            Glimpses of unforgettable celebrations
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        {galleryItems.length > 0 ? (
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {galleryItems.map((item) => (
              <div key={item.id} className="break-inside-avoid relative group rounded-xl overflow-hidden bg-white shadow-sm border border-gray-100">
                <div className="relative w-full" style={{ paddingBottom: '120%' }}>
                  <Image
                    src={item.url}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-white font-serif text-xl mb-1">{item.title}</h3>
                    <p className="text-[#d4af37] text-sm font-medium tracking-wider uppercase">{item.category}</p>
                    {item.description && (
                      <p className="text-gray-300 text-sm mt-2 line-clamp-2">{item.description}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h2 className="text-2xl font-serif text-gray-500">Our gallery is currently being updated. Check back soon!</h2>
          </div>
        )}
      </section>
    </div>
  );
}
