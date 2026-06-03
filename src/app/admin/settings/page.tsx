import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const dynamic = "force-dynamic";

export default async function SettingsPage() {
  const business = await prisma.business.findFirst();

  async function updateSettings(formData: FormData) {
    "use server";
    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    
    if (!business?.id) return;

    await prisma.business.update({
      where: { id: business.id },
      data: { name, description },
    });
    
    revalidatePath("/admin/settings");
    revalidatePath("/"); // Update public pages if needed
  }

  if (!business) {
    return (
      <div className="p-8">
        <h1 className="text-3xl font-serif text-primary mb-6">Settings</h1>
        <p className="text-muted-foreground">No business configuration found.</p>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-2xl">
      <h1 className="text-3xl font-serif text-primary mb-6">Business Settings</h1>
      
      <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
        <form action={updateSettings} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Business Name</label>
            <Input 
              name="name" 
              defaultValue={business.name} 
              className="max-w-md"
              required
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Business Description</label>
            <textarea 
              name="description" 
              defaultValue={business.description || ""}
              className="flex min-h-[120px] w-full max-w-md rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">System Domain (Read-Only)</label>
            <Input 
              value={business.domain || "N/A"} 
              disabled
              className="max-w-md bg-muted/50"
            />
            <p className="text-xs text-muted-foreground mt-1">Contact support to change your internal system domain.</p>
          </div>
          
          <div className="pt-4 border-t border-border">
            <Button type="submit" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Save Changes
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
