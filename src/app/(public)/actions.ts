"use server";

import { prisma } from "@/lib/prisma";

export async function submitLead(formData: FormData) {
  try {
    const name = formData.get("name") as string;
    const mobile = formData.get("mobile") as string;
    const eventType = formData.get("eventType") as string;
    const guestCount = parseInt(formData.get("guestCount") as string, 10);
    const dateStr = formData.get("eventDate") as string;
    
    if (!name || !mobile) {
      throw new Error("Name and Mobile are required");
    }

    // Get the first business
    let business = await prisma.business.findFirst();
    if (!business) {
       business = await prisma.business.create({
         data: { name: "Aachman Banquet", domain: "aachman.com" }
       });
    }

    await prisma.lead.create({
      data: {
        name,
        mobile,
        eventType: eventType || null,
        guestCount: isNaN(guestCount) ? null : guestCount,
        eventDate: dateStr ? new Date(dateStr) : null,
        source: "Website Form",
        status: "NEW",
        businessId: business.id
      }
    });

    return { success: true };
  } catch (error: any) {
    console.error("Failed to submit lead:", error);
    return { success: false, error: error.message };
  }
}
