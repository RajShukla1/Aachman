"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createReview(formData: FormData) {
  try {
    const customerName = formData.get("customerName") as string;
    const content = formData.get("content") as string;
    const rating = parseInt(formData.get("rating") as string, 10) || 5;

    if (!customerName || !content) {
      throw new Error("Name and content are required");
    }

    // Get the first business
    let business = await prisma.business.findFirst();
    if (!business) {
       business = await prisma.business.create({
         data: { name: "Aachman Banquet", domain: "aachman.com" }
       });
    }

    await prisma.review.create({
      data: {
        customerName,
        content,
        rating,
        isApproved: true, // Offline/Admin added reviews are auto-approved
        businessId: business.id
      }
    });

    revalidatePath("/admin/reviews");
    revalidatePath("/");
    return { success: true };
  } catch (error: any) {
    console.error("Failed to add review:", error);
    return { success: false, error: error.message };
  }
}

export async function toggleReviewApproval(id: string, isApproved: boolean) {
  try {
    await prisma.review.update({
      where: { id },
      data: { isApproved }
    });

    revalidatePath("/admin/reviews");
    revalidatePath("/");
    return { success: true };
  } catch (error: any) {
    console.error("Failed to update review:", error);
    return { success: false, error: error.message };
  }
}

export async function deleteReview(id: string) {
  try {
    await prisma.review.delete({
      where: { id }
    });

    revalidatePath("/admin/reviews");
    revalidatePath("/");
    return { success: true };
  } catch (error: any) {
    console.error("Failed to delete review:", error);
    return { success: false, error: error.message };
  }
}
