import { prisma } from "@/lib/prisma";
import { Utensils } from "lucide-react";
import AddMenuItemModal from "@/components/admin/AddMenuItemModal";

export const dynamic = "force-dynamic";

export default async function AdminMenuPage() {
  const menuItems = await prisma.menu.findMany({
    orderBy: { createdAt: 'desc' }
  });

  // Group by category
  const groupedMenu = menuItems.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, typeof menuItems>);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Menu Management</h1>
        <AddMenuItemModal />
      </div>

      {Object.keys(groupedMenu).length > 0 ? (
        <div className="space-y-12">
          {Object.entries(groupedMenu).map(([category, items]) => (
            <div key={category}>
              <h2 className="text-2xl font-serif font-bold text-primary mb-6 pb-2 border-b border-border">{category}</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {items.map(item => (
                  <div key={item.id} className="bg-card border border-border p-5 rounded-xl shadow-sm flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-lg">{item.name}</h3>
                        <span className="font-semibold text-primary">₹{item.price}</span>
                      </div>
                      {item.description && <p className="text-sm text-muted-foreground">{item.description}</p>}
                    </div>
                    <div className="mt-4 pt-4 border-t border-border flex justify-between items-center">
                      <span className={`text-xs px-2 py-1 rounded-full ${item.isAvailable ? 'bg-green-500/10 text-green-600' : 'bg-red-500/10 text-red-600'}`}>
                        {item.isAvailable ? 'Available' : 'Unavailable'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="py-16 flex flex-col items-center justify-center text-muted-foreground bg-card border border-dashed rounded-xl">
          <Utensils className="w-12 h-12 mb-4 text-muted-foreground/50" />
          <p className="text-lg font-medium text-foreground">No menu items found</p>
          <p className="text-sm mt-1 mb-6">Start building your restaurant menu.</p>
        </div>
      )}
    </div>
  );
}
