import { prisma } from "@/lib/prisma";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarIcon, Users } from "lucide-react";
import AddBookingModal from "@/components/admin/AddBookingModal";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function BookingsPage() {
  // Fetch upcoming events from DB
  const events = await prisma.event.findMany({
    orderBy: { date: 'asc' },
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Event Bookings</h1>
        <AddBookingModal />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {events.length > 0 ? events.map((event) => (
          <div key={event.id} className="bg-card border border-border rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className={`absolute top-0 left-0 w-full h-1 ${event.status === 'CONFIRMED' ? 'bg-green-500' : event.status === 'COMPLETED' ? 'bg-blue-500' : 'bg-yellow-500'}`} />
            
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-semibold text-lg">{event.title}</h3>
                <p className="text-sm text-muted-foreground">{event.type}</p>
              </div>
              <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                event.status === 'CONFIRMED' ? 'bg-green-500/10 text-green-600' :
                event.status === 'COMPLETED' ? 'bg-blue-500/10 text-blue-600' :
                'bg-yellow-500/10 text-yellow-600'
              }`}>
                {event.status}
              </span>
            </div>

            <div className="space-y-3 mt-6">
              <div className="flex items-center text-sm">
                <CalendarIcon className="w-4 h-4 mr-3 text-primary" />
                <span className="font-medium text-foreground">{event.date.toLocaleDateString('en-IN', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })}</span>
              </div>
              
              <div className="flex items-center text-sm">
                <Users className="w-4 h-4 mr-3 text-primary" />
                <span className="text-muted-foreground">{event.guestCount} Guests</span>
              </div>
            </div>
            
            <div className="mt-6 pt-4 border-t border-border flex justify-end">
              <Link href={`/admin/bookings/${event.id}`} className="w-full">
                <Button variant="outline" size="sm" className="w-full">View Details</Button>
              </Link>
            </div>
          </div>
        )) : (
          <div className="col-span-full py-12 flex flex-col items-center justify-center text-muted-foreground bg-card border border-dashed rounded-xl">
            <CalendarIcon className="w-12 h-12 mb-4 text-muted-foreground/50" />
            <p className="text-lg font-medium text-foreground">No upcoming events</p>
            <p className="text-sm mt-1">Bookings will appear here once confirmed.</p>
            <Button className="mt-6" variant="outline">Create your first booking</Button>
          </div>
        )}
      </div>
    </div>
  );
}
