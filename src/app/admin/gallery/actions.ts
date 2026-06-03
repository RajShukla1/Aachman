"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createGalleryItem(formData: FormData) {
  try {
    const title = formData.get("title") as string;
    const url = formData.get("url") as string;
    const category = formData.get("category") as string || null;
    const description = formData.get("description") as string || null;

    if (!title || !url) {
      throw new Error("Title and URL are required");
    }

    // Get the first business
    let business = await prisma.business.findFirst();
    if (!business) {
       business = await prisma.business.create({
         data: { name: "Aachman Banquet", domain: "aachman.com" }
       });
    }

    await prisma.gallery.create({
      data: {
        title,
        url,
        category,
        description,
        type: "IMAGE",
        businessId: business.id
      }
    });

    revalidatePath("/admin/gallery");
    revalidatePath("/gallery");
    return { success: true };
  } catch (error: any) {
    console.error("Failed to add gallery item:", error);
    return { success: false, error: error.message };
  }
}
