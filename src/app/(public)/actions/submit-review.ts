"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function submitReview(formData: FormData) {
  try {
    const customerName = formData.get("customerName") as string;
    const rating = parseInt(formData.get("rating") as string, 10);
    const content = formData.get("content") as string;

    if (!customerName || !rating || !content) {
      throw new Error("All fields are required");
    }

    if (rating < 1 || rating > 5) {
      throw new Error("Rating must be between 1 and 5");
    }

    const business = await prisma.business.findFirst();
    if (!business) {
      throw new Error("Business context not found.");
    }

    await prisma.review.create({
      data: {
        customerName,
        rating,
        content,
        isApproved: false,
        businessId: business.id,
      },
    });

    revalidatePath("/admin/reviews");
    return { success: true };
  } catch (error: any) {
    console.error("Error submitting review:", error);
    return { success: false, error: error.message || "Failed to submit review" };
  }
}
