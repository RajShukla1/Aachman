import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar as CalendarIcon, Users } from "lucide-react";
import Link from "next/link";

export default async function BookingDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  
  const event = await prisma.event.findUnique({
    where: { id: resolvedParams.id },
  });

  if (!event) {
    notFound();
  }

  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin/bookings">
          <Button variant="outline" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Booking Details</h1>
          <p className="text-muted-foreground">Manage and view information for this event.</p>
        </div>
      </div>

      <div className="bg-card border border-border rounded-xl p-8 shadow-sm">
        <div className="flex justify-between items-start mb-8 pb-8 border-b border-border">
          <div>
            <h2 className="text-2xl font-semibold mb-2">{event.title}</h2>
            <div className="flex items-center gap-4 text-muted-foreground">
              <span className="flex items-center gap-2">
                <CalendarIcon className="h-4 w-4" />
                {event.date.toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
              </span>
              <span className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                {event.guestCount} Guests Expected
              </span>
            </div>
          </div>
          <span className={`text-sm font-semibold px-4 py-1.5 rounded-full ${
            event.status === 'CONFIRMED' ? 'bg-green-500/10 text-green-600' :
            event.status === 'COMPLETED' ? 'bg-blue-500/10 text-blue-600' :
            'bg-yellow-500/10 text-yellow-600'
          }`}>
            {event.status}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div>
            <h3 className="font-medium text-muted-foreground mb-2 uppercase text-xs tracking-wider">Event Information</h3>
            <div className="space-y-4">
              <div>
                <span className="text-muted-foreground block text-sm">Event Type</span>
                <span className="font-medium">{event.type}</span>
              </div>
              <div>
                <span className="text-muted-foreground block text-sm">Created At</span>
                <span className="font-medium">{event.createdAt.toLocaleDateString()}</span>
              </div>
            </div>
          </div>

          <div>
             <h3 className="font-medium text-muted-foreground mb-2 uppercase text-xs tracking-wider">Quick Actions</h3>
             <div className="flex flex-col gap-3">
               <Button variant="default" className="w-full justify-start">Edit Booking details</Button>
               <Button variant="outline" className="w-full justify-start text-destructive hover:bg-destructive/10 hover:text-destructive">Cancel Booking</Button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
