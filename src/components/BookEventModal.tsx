"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CalendarDays, CheckCircle2 } from "lucide-react";
import { submitLead } from "@/app/(public)/actions";

export default function BookEventModal({ children }: { children?: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData(e.currentTarget);
    const res = await submitLead(formData);
    
    setLoading(false);
    if (res.success) {
      setSuccess(true);
      setTimeout(() => {
        setOpen(false);
        setSuccess(false);
      }, 3000);
    } else {
      alert("Error: " + res.error);
    }
  };

  return (
    <>
      <div onClick={() => setOpen(true)} className="inline-block cursor-pointer">
        {children || (
          <Button size="lg" className="text-lg px-8 py-6 rounded-none tracking-wide group w-full sm:w-auto">
            <span>
              <CalendarDays className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Book Event
            </span>
          </Button>
        )}
      </div>
      <Dialog open={open} onOpenChange={(val) => { setOpen(val); if (!val) setSuccess(false); }}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-serif text-center">Book Your Celebration</DialogTitle>
          </DialogHeader>
        
        {success ? (
          <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
            <CheckCircle2 className="w-16 h-16 text-green-500 animate-in zoom-in" />
            <h3 className="text-xl font-bold">Request Received!</h3>
            <p className="text-muted-foreground">Our event manager will contact you shortly to confirm details.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 pt-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input id="name" name="name" placeholder="John Doe" required />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="mobile">Mobile Number *</Label>
              <Input id="mobile" name="mobile" type="tel" placeholder="+91 99999 99999" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="eventType">Event Type</Label>
              <select 
                id="eventType" 
                name="eventType" 
                className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              >
                <option value="">Select an event...</option>
                <option value="Wedding">Wedding</option>
                <option value="Reception">Reception</option>
                <option value="Birthday Party">Birthday Party</option>
                <option value="Corporate Event">Corporate Event</option>
                <option value="Other">Other</option>
              </select>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="eventDate">Preferred Date</Label>
                <Input id="eventDate" name="eventDate" type="date" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="guestCount">Expected Guests</Label>
                <Input id="guestCount" name="guestCount" type="number" min="10" placeholder="e.g., 200" />
              </div>
            </div>

            <div className="pt-4">
              <Button type="submit" className="w-full text-lg h-12" disabled={loading}>
                {loading ? "Submitting..." : "Request Booking"}
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
    </>
  );
}
