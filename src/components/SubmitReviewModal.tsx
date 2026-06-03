"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { submitReview } from "@/app/(public)/actions/submit-review";
import { Star } from "lucide-react";

export default function SubmitReviewModal() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [rating, setRating] = useState(5);

  async function handleSubmit(formData: FormData) {
    setLoading(true);
    try {
      formData.append("rating", rating.toString());
      const result = await submitReview(formData);
      
      if (result.success) {
        alert("Thank you! Your review has been submitted for approval.");
        setOpen(false);
      } else {
        alert(result.error || "Failed to submit review");
      }
    } catch (error) {
      alert("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger 
        render={
          <Button size="lg" variant="outline" className="text-primary border-primary hover:bg-primary hover:text-white rounded-none px-8" />
        }
      >
        Leave a Review
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif text-primary">Share Your Experience</DialogTitle>
        </DialogHeader>
        <form action={handleSubmit} className="space-y-6 pt-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Your Name</label>
            <Input name="customerName" required placeholder="John Doe" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Rating</label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  className="focus:outline-none transition-transform hover:scale-110"
                >
                  <Star
                    className={`w-8 h-8 ${
                      star <= rating ? "fill-[#d4af37] text-[#d4af37]" : "text-gray-300"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Your Review</label>
            <textarea 
              name="content" 
              required 
              placeholder="Tell us about your experience..."
              className="flex min-h-[120px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" 
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-[#d4af37] hover:bg-[#c19b2e] text-black font-semibold rounded-none" 
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit Review"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
