import { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Aachman Banquet & Restaurant",
  description: "Learn about the history, vision, and premium service standards of Aachman Banquet & Restaurant in Lucknow.",
};

export default function AboutPage() {
  return (
    <div className="bg-[#fcfaf8] min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center bg-black">
        <Image
          src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80"
          alt="Aachman About Hero"
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 tracking-wider">Our Story</h1>
          <p className="text-lg md:text-xl text-[#d4af37] font-medium max-w-2xl mx-auto">
            A Legacy of Grand Celebrations and Culinary Excellence
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-4 md:px-8 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6">Welcome to Aachman</h2>
          <div className="w-24 h-1 bg-[#d4af37] mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 leading-relaxed text-justify md:text-center">
            Located in the vibrant heart of Vikas Nagar, Lucknow, Aachman Banquet & Restaurant has been the backdrop for countless unforgettable moments. We believe that every celebration, whether an intimate gathering or a grand wedding, deserves perfection. Our commitment to flawless execution, stunning aesthetics, and unparalleled culinary experiences has made us the premier choice for events in the region.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mt-20">
          <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl">
            <Image 
              src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80"
              alt="Aachman Culinary"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="text-3xl font-serif text-gray-900 mb-6">Our Philosophy</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              At Aachman, we don't just host events; we curate experiences. Our philosophy is built on three core pillars:
            </p>
            <ul className="space-y-6">
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-[#d4af37] mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-xl text-gray-900 mb-2">Exquisite Aesthetics</h4>
                  <p className="text-gray-600">From our grand chandeliers to our meticulously manicured lawns, every inch of our venue is designed to impress.</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-[#d4af37] mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-xl text-gray-900 mb-2">Culinary Mastery</h4>
                  <p className="text-gray-600">Our master chefs craft diverse menus ranging from authentic Indian delicacies to exquisite international cuisines.</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-[#d4af37] mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-xl text-gray-900 mb-2">Impeccable Service</h4>
                  <p className="text-gray-600">Our highly trained staff anticipates your needs, ensuring that you and your guests are treated like royalty.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
