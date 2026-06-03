import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Aachman Banquet & Restaurant",
  description: "Privacy Policy for Aachman Banquet & Restaurant.",
};

export default function PrivacyPage() {
  return (
    <div className="bg-[#fcfaf8] min-h-screen py-20 px-4">
      <div className="max-w-3xl mx-auto space-y-8 bg-white p-8 md:p-12 rounded-xl shadow-sm border border-gray-100">
        <h1 className="text-4xl font-serif text-primary mb-8 border-b pb-4">Privacy Policy</h1>
        
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-2xl font-serif text-gray-900 mt-8 mb-4">1. Information We Collect</h2>
          <p>
            When you visit Aachman Banquet & Restaurant's website, book an event, or contact us, we may collect personal information such as your name, email address, phone number, and event details. We also collect non-personal data through cookies to improve our website experience.
          </p>

          <h2 className="text-2xl font-serif text-gray-900 mt-8 mb-4">2. How We Use Your Information</h2>
          <p>
            The information we collect is used to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Process your event bookings and reservations.</li>
            <li>Communicate with you regarding your inquiries.</li>
            <li>Improve our website and customer service.</li>
            <li>Send periodic emails or messages regarding updates, if you opt-in.</li>
          </ul>

          <h2 className="text-2xl font-serif text-gray-900 mt-8 mb-4">3. Data Security</h2>
          <p>
            We implement a variety of security measures to maintain the safety of your personal information. Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems.
          </p>

          <h2 className="text-2xl font-serif text-gray-900 mt-8 mb-4">4. Contacting Us</h2>
          <p>
            If there are any questions regarding this privacy policy, you may contact us using the information below:
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
