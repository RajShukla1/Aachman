import { prisma } from "@/lib/prisma";
import { Image as ImageIcon } from "lucide-react";
import AddMediaModal from "@/components/admin/AddMediaModal";
import Image from "next/image";

export const dynamic = "force-dynamic";

export default async function AdminGalleryPage() {
  const galleryItems = await prisma.gallery.findMany({
    orderBy: { createdAt: 'desc' }
  });

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Media Gallery</h1>
        <AddMediaModal />
      </div>

      {galleryItems.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {galleryItems.map(item => (
            <div key={item.id} className="group relative bg-card border border-border rounded-xl shadow-sm overflow-hidden flex flex-col">
              <div className="relative aspect-square w-full bg-muted">
                <Image 
                  src={item.url} 
                  alt={item.title} 
                  fill 
                  className="object-cover transition-transform group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-bold truncate text-sm" title={item.title}>{item.title}</h3>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-xs font-medium text-primary px-2 py-1 bg-primary/10 rounded-md">
                    {item.category || 'Uncategorized'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="py-16 flex flex-col items-center justify-center text-muted-foreground bg-card border border-dashed rounded-xl">
          <ImageIcon className="w-12 h-12 mb-4 text-muted-foreground/50" />
          <p className="text-lg font-medium text-foreground">No photos yet</p>
          <p className="text-sm mt-1 mb-6">Start building your visual gallery.</p>
        </div>
      )}
    </div>
  );
}
