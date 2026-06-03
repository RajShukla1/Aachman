import { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import BookEventModal from "@/components/BookEventModal";

export const metadata: Metadata = {
  title: "Contact Us | Aachman Banquet & Restaurant",
  description: "Get in touch with Aachman Banquet & Restaurant. Find our location on the map, our contact details, and business hours.",
};

export default function ContactPage() {
  return (
    <div className="bg-[#fcfaf8] min-h-screen">
      {/* Header */}
      <section className="bg-[#1c1c1c] py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-serif text-primary mb-4 tracking-wider">Contact Us</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          We'd love to hear from you. Reach out to discuss your upcoming event or make a reservation.
        </p>
      </section>

      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Details */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-serif text-gray-900 mb-8">Get In Touch</h2>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-[#d4af37]/10 p-4 rounded-full mr-6">
                    <MapPin className="w-6 h-6 text-[#d4af37]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-gray-900 mb-2">Our Location</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Aachman Banquet & Restaurant<br />
                      Vikas Nagar, Sector 4<br />
                      Lucknow, Uttar Pradesh 226022<br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#d4af37]/10 p-4 rounded-full mr-6">
                    <Phone className="w-6 h-6 text-[#d4af37]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-gray-900 mb-2">Phone</h3>
                    <a href="tel:+919999999999" className="text-gray-600 hover:text-[#d4af37] transition-colors block mb-1">
                      +91 99999 99999
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#d4af37]/10 p-4 rounded-full mr-6">
                    <Mail className="w-6 h-6 text-[#d4af37]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-gray-900 mb-2">Email</h3>
                    <a href="mailto:info@aachman.com" className="text-gray-600 hover:text-[#d4af37] transition-colors block">
                      info@aachman.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#d4af37]/10 p-4 rounded-full mr-6">
                    <Clock className="w-6 h-6 text-[#d4af37]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-gray-900 mb-2">Business Hours</h3>
                    <p className="text-gray-600">
                      <strong>Restaurant:</strong> 11:00 AM - 11:00 PM (Daily)<br />
                      <strong>Banquet Office:</strong> 10:00 AM - 8:00 PM (Daily)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <h3 className="text-2xl font-serif text-gray-900 mb-4">Planning an Event?</h3>
              <p className="text-gray-600 mb-6">Let our dedicated event coordinators help you craft the perfect celebration.</p>
              <BookEventModal />
            </div>
          </div>

          {/* Google Map Embed */}
          <div className="h-[600px] rounded-xl overflow-hidden shadow-xl border border-gray-200 bg-gray-100 relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14234.677953705252!2d80.94821!3d26.88562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd9f00000000%3A0x8e83348123284!2sVikas%20Nagar%2C%20Lucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
              title="Aachman Banquet Location"
            ></iframe>
          </div>

        </div>
      </section>
    </div>
  );
}
