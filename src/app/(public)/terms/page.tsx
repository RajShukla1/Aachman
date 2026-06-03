import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Aachman Banquet & Restaurant",
  description: "Terms of Service for Aachman Banquet & Restaurant.",
};

export default function TermsPage() {
  return (
    <div className="bg-[#fcfaf8] min-h-screen py-20 px-4">
      <div className="max-w-3xl mx-auto space-y-8 bg-white p-8 md:p-12 rounded-xl shadow-sm border border-gray-100">
        <h1 className="text-4xl font-serif text-primary mb-8 border-b pb-4">Terms of Service</h1>
        
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-2xl font-serif text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing and using the Aachman Banquet & Restaurant website, you accept and agree to be bound by the terms and provision of this agreement.
          </p>

          <h2 className="text-2xl font-serif text-gray-900 mt-8 mb-4">2. Event Booking Policy</h2>
          <p>
            All event bookings are subject to availability and confirmation by our event coordinators. A deposit may be required to secure your reservation. Specific cancellation policies will be provided at the time of booking.
          </p>

          <h2 className="text-2xl font-serif text-gray-900 mt-8 mb-4">3. Use of Content</h2>
          <p>
            The content, images, and materials on this website are the property of Aachman Banquet & Restaurant. You may not reproduce, distribute, or use these materials for commercial purposes without our express written permission.
          </p>

          <h2 className="text-2xl font-serif text-gray-900 mt-8 mb-4">4. Liability</h2>
          <p>
            While we strive to provide accurate information on our website, we do not warrant that all content is entirely error-free. We reserve the right to modify services, menus, and pricing without prior notice.
          </p>

          <h2 className="text-2xl font-serif text-gray-900 mt-8 mb-4">5. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at:
          </p>
          <p className="mt-4">
            Aachman Banquet & Restaurant<br />
            Vikas Nagar, Sector 4<br />
            Lucknow, Uttar Pradesh 226022<br />
            Email: info@aachman.com
          </p>
        </div>
      </div>
    </div>
  );
}
