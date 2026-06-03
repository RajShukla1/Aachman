import { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Aachman Banquet & Restaurant | Lucknow",
  description: "Experience premium dining and elegant event spaces at Aachman Banquet & Restaurant in Vikas Nagar, Lucknow. Book your weddings, parties, and corporate events.",
  openGraph: {
    title: "Aachman Banquet & Restaurant",
    description: "Premium dining and elegant event spaces in Lucknow.",
    url: "https://aachman.com",
    siteName: "Aachman Banquet",
    locale: "en_IN",
    type: "website",
  },
};

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Aachman Banquet & Restaurant",
    "image": "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80",
    "@id": "https://aachman.com",
    "url": "https://aachman.com",
    "telephone": "+919999999999",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Vikas Nagar",
      "addressLocality": "Lucknow",
      "addressRegion": "UP",
      "postalCode": "226022",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 26.8856,
      "longitude": 80.9575
    },
    "servesCuisine": ["Indian", "Chinese", "Continental"],
    "priceRange": "₹₹"
  };

  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <Navbar />
      <main>{children}</main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
