import { prisma } from "@/lib/prisma";
import { Star } from "lucide-react";
import { unstable_noStore as noStore } from "next/cache";
import SubmitReviewModal from "./SubmitReviewModal";

export default async function PublicReviews() {
  noStore();
  const reviews = await prisma.review.findMany({
    where: { isApproved: true },
    orderBy: { createdAt: 'desc' },
    take: 6
  });

  if (reviews.length === 0) return null;

  return (
    <section className="w-full py-24 bg-[#faf9f6] text-foreground px-4">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-serif mb-6 text-primary">What Our Guests Say</h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
          Don't just take our word for it. Read about the unforgettable experiences we've helped create.
        </p>
        <SubmitReviewModal />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <div className="flex text-[#d4af37] mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-5 h-5 ${i < review.rating ? 'fill-current' : 'text-gray-200'}`} />
              ))}
            </div>
            <p className="text-gray-600 italic mb-8 flex-grow">"{review.content}"</p>
            <h4 className="font-serif text-lg font-semibold text-gray-900">— {review.customerName}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
