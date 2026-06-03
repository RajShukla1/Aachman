"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createMenuItem(formData: FormData) {
  try {
    const name = formData.get("name") as string;
    const category = formData.get("category") as string;
    const description = formData.get("description") as string || null;
    const price = parseFloat(formData.get("price") as string);

    if (!name || !category || isNaN(price)) {
      throw new Error("Missing required fields");
    }

    // Get the first business (since this is Aachman Banquet)
    let business = await prisma.business.findFirst();
    
    if (!business) {
       business = await prisma.business.create({
         data: {
           name: "Aachman Banquet",
           domain: "aachman.com",
         }
       });
    }

    await prisma.menu.create({
      data: {
        name,
        category,
        description,
        price,
        businessId: business.id
      }
    });

    revalidatePath("/admin/menu");
    revalidatePath("/menu"); // Revalidate the public menu page too
    return { success: true };
  } catch (error: any) {
    console.error("Failed to create menu item:", error);
    return { success: false, error: error.message };
  }
}
