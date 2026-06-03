import Image from 'next/image';
import PublicReviews from '@/components/PublicReviews';
import HeroSection from '@/components/HeroSection';

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <HeroSection />

      <section className="w-full pb-24 bg-background text-foreground px-4">
        {/* Real Venue Images Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
          <div className="relative h-64 overflow-hidden rounded-lg group">
            <Image src="https://images.venuebookingz.com/32033-1700829590-wm-shaadhyayana-1.jpg" alt="Aachman Hall" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
          </div>
          <div className="relative h-64 overflow-hidden rounded-lg group">
            <Image src="https://content.jdmagicbox.com/v2/comp/lucknow/e6/0522px522.x522.171129162020.q9e6/catalogue/gomti-marriage-hall-gomti-nagar-lucknow-banquet-halls-9hVe9piRDA.jpg" alt="Aachman Decor" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
          </div>
          <div className="relative h-64 overflow-hidden rounded-lg group">
            <Image src="https://imagewedz.oyoroomscdn.com/medium/photologue/images/dreamy-delicacies-dreamy-delicacies.jpg" alt="Aachman Dining" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
          </div>
          <div className="relative h-64 overflow-hidden rounded-lg group">
            <Image src="https://image.wedmegood.com/resized/720X/uploads/member/3485853/1664170775_Screenshot_from_2022_09_26_11_04_30.png" alt="Aachman Stage" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <PublicReviews />
    </main>
  );
}
