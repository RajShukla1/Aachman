"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createBooking(formData: FormData) {
  try {
    const title = formData.get("title") as string;
    const type = formData.get("type") as string;
    const date = new Date(formData.get("date") as string);
    const guestCount = parseInt(formData.get("guestCount") as string, 10);
    const status = formData.get("status") as string || "CONFIRMED";

    if (!title || !type || !date || isNaN(guestCount)) {
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

    await prisma.event.create({
      data: {
        title,
        type,
        date,
        guestCount,
        status,
        businessId: business.id
      }
    });

    revalidatePath("/admin/bookings");
    return { success: true };
  } catch (error: any) {
    console.error("Failed to create booking:", error);
    return { success: false, error: error.message };
  }
}
