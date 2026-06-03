"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ImagePlus } from "lucide-react";
import { createGalleryItem } from "@/app/admin/gallery/actions";

export default function AddMediaModal() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData(e.currentTarget);
    const res = await createGalleryItem(formData);
    
    setLoading(false);
    if (res.success) {
      setOpen(false);
    } else {
      alert("Error: " + res.error);
    }
  };

  return (
    <>
      <Button onClick={() => setOpen(true)} className="inline-flex items-center justify-center gap-2">
        <ImagePlus className="h-4 w-4" />
        Add Media URL
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Photo to Gallery</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4 pt-4">
            <div className="space-y-2">
              <Label htmlFor="title">Photo Title</Label>
              <Input id="title" name="title" placeholder="e.g., Grand Setup" required />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="url">Direct Image URL</Label>
              <Input id="url" name="url" type="url" placeholder="https://example.com/image.jpg" required />
              <p className="text-xs text-muted-foreground">Paste a direct link to an image (JPEG, PNG, WebP).</p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <select 
                id="category" 
                name="category" 
                className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                required
              >
                <option value="Wedding">Wedding & Decor</option>
                <option value="Dining">Dining & Food</option>
                <option value="Corporate">Corporate Events</option>
                <option value="General">General Venue</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="description">Short Description (Optional)</Label>
              <Input id="description" name="description" placeholder="A brief caption for this image" />
            </div>

            <div className="pt-4 flex justify-end gap-2">
              <Button variant="outline" type="button" onClick={() => setOpen(false)}>Cancel</Button>
              <Button type="submit" disabled={loading}>
                {loading ? "Saving..." : "Add to Gallery"}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
