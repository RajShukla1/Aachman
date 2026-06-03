import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import BookEventModal from "@/components/BookEventModal";

export const metadata: Metadata = {
  title: "Our Venues | Aachman Banquet & Restaurant",
  description: "Explore the Grand Ballroom, Dining Hall, and Open Lawns at Aachman Banquet. Find the perfect space for your next event.",
};

const venues = [
  {
    id: "grand-ballroom",
    name: "The Grand Ballroom",
    capacity: "500 - 800 Guests",
    type: "Indoor",
    description: "Our crown jewel. The Grand Ballroom features magnificent crystal chandeliers, premium acoustic paneling, and a sprawling pillar-less design that ensures unobstructed views of the main stage. Perfect for lavish weddings and grand receptions.",
    image: "https://images.venuebookingz.com/32033-1700829590-wm-shaadhyayana-1.jpg"
  },
  {
    id: "royal-dining",
    name: "The Royal Dining Hall",
    capacity: "200 - 400 Guests",
    type: "Indoor",
    description: "An elegantly appointed hall dedicated to culinary indulgence. Featuring state-of-the-art buffet setups, comfortable premium seating, and ambient lighting that enhances the dining experience for your guests.",
    image: "https://imagewedz.oyoroomscdn.com/medium/photologue/images/dreamy-delicacies-dreamy-delicacies.jpg"
  },
  {
    id: "starlight-lawn",
    name: "Starlight Open Lawn",
    capacity: "800 - 1500 Guests",
    type: "Outdoor",
    description: "For those who dream of a celebration under the stars. Our meticulously manicured lawns provide a breathtaking outdoor setting, complete with customizable stage areas and enchanting landscape lighting.",
    image: "https://content.jdmagicbox.com/v2/comp/lucknow/e6/0522px522.x522.171129162020.q9e6/catalogue/gomti-marriage-hall-gomti-nagar-lucknow-banquet-halls-9hVe9piRDA.jpg"
  }
];

export default function VenuesPage() {
  return (
    <div className="bg-[#fcfaf8] min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center bg-black">
        <Image
          src="https://image.wedmegood.com/resized/720X/uploads/member/3485853/1664170775_Screenshot_from_2022_09_26_11_04_30.png"
          alt="Aachman Venues Hero"
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 tracking-wider">Our Event Spaces</h1>
          <p className="text-lg md:text-xl text-[#d4af37] font-medium max-w-2xl mx-auto">
            Discover the perfect setting for your unforgettable moments
          </p>
        </div>
      </section>

      {/* Venues List */}
      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto space-y-24">
        {venues.map((venue, index) => (
          <div key={venue.id} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>
            <div className="w-full md:w-1/2 relative h-[400px] rounded-xl overflow-hidden shadow-lg group">
              <Image 
                src={venue.image}
                alt={venue.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-semibold text-gray-900">
                {venue.type}
              </div>
            </div>
            
            <div className="w-full md:w-1/2 space-y-6">
              <div>
                <h2 className="text-3xl font-serif text-gray-900 mb-2">{venue.name}</h2>
                <p className="text-[#d4af37] font-semibold text-lg">Capacity: {venue.capacity}</p>
              </div>
              
              <p className="text-gray-600 leading-relaxed text-lg">
                {venue.description}
              </p>
              
              <div className="pt-4 border-t border-gray-200">
                <BookEventModal />
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="bg-black text-center py-20 px-4">
        <h2 className="text-3xl font-serif text-white mb-6">Ready to see it in person?</h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          Schedule a venue tour with our event coordinators to experience the grandeur of Aachman Banquet first-hand.
        </p>
        <Link href="tel:+919999999999">
          <Button size="lg" className="bg-[#d4af37] hover:bg-[#c19b2e] text-black font-semibold px-8 py-6 rounded-none text-lg">
            Call to Schedule Tour
          </Button>
        </Link>
      </section>
    </div>
  );
}
