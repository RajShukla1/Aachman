"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Trash2, CheckCircle, XCircle } from "lucide-react";
import { toggleReviewApproval, deleteReview } from "@/app/admin/reviews/actions";

export default function ReviewActions({ id, isApproved }: { id: string, isApproved: boolean }) {
  const [loading, setLoading] = useState(false);

  const handleToggle = async () => {
    setLoading(true);
    await toggleReviewApproval(id, !isApproved);
    setLoading(false);
  };

  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this review?")) return;
    setLoading(true);
    await deleteReview(id);
    setLoading(false);
  };

  return (
    <div className="flex items-center gap-2">
      <Button 
        variant="ghost" 
        size="sm" 
        className={isApproved ? "text-yellow-600 hover:text-yellow-700" : "text-green-600 hover:text-green-700"}
        onClick={handleToggle}
        disabled={loading}
      >
        {isApproved ? <XCircle className="w-4 h-4 mr-1" /> : <CheckCircle className="w-4 h-4 mr-1" />}
        {isApproved ? "Hide" : "Approve"}
      </Button>
      <Button 
        variant="ghost" 
        size="sm" 
        className="text-red-600 hover:text-red-700 hover:bg-red-50"
        onClick={handleDelete}
        disabled={loading}
      >
        <Trash2 className="w-4 h-4" />
      </Button>
    </div>
  );
}
