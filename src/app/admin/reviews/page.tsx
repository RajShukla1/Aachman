import { prisma } from "@/lib/prisma";
import { MessageSquare, Star, CheckCircle, XCircle, Trash2 } from "lucide-react";
import AddReviewModal from "@/components/admin/AddReviewModal";
import ReviewActions from "@/components/admin/ReviewActions";

export const dynamic = "force-dynamic";

export default async function AdminReviewsPage() {
  const reviews = await prisma.review.findMany({
    orderBy: { createdAt: 'desc' }
  });

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Customer Reviews</h1>
        <AddReviewModal />
      </div>

      {reviews.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map(review => (
            <div key={review.id} className="bg-card border border-border p-5 rounded-xl shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg">{review.customerName}</h3>
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'fill-current' : 'text-gray-300'}`} />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground italic mb-4">"{review.content}"</p>
              </div>
              <div className="mt-4 pt-4 border-t border-border flex justify-between items-center">
                <span className={`text-xs px-2 py-1 rounded-full flex items-center gap-1 ${review.isApproved ? 'bg-green-500/10 text-green-600' : 'bg-yellow-500/10 text-yellow-600'}`}>
                  {review.isApproved ? <CheckCircle className="w-3 h-3" /> : <XCircle className="w-3 h-3" />}
                  {review.isApproved ? 'Approved (Public)' : 'Pending Review'}
                </span>
                
                <ReviewActions id={review.id} isApproved={review.isApproved} />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="py-16 flex flex-col items-center justify-center text-muted-foreground bg-card border border-dashed rounded-xl">
          <MessageSquare className="w-12 h-12 mb-4 text-muted-foreground/50" />
          <p className="text-lg font-medium text-foreground">No reviews yet</p>
          <p className="text-sm mt-1 mb-6">Start collecting feedback from your customers.</p>
        </div>
      )}
    </div>
  );
}
