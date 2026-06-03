import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#1c1c1c] text-gray-300 py-16 border-t border-gray-800">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-4">
          <h3 className="font-serif text-2xl text-primary font-bold tracking-wider">AACHMAN</h3>
          <p className="text-sm leading-relaxed text-gray-400">
            The premier destination for luxury events, weddings, and fine dining in Vikas Nagar, Lucknow.
          </p>
        </div>
        
        <div className="space-y-4">
          <h4 className="text-white font-medium uppercase tracking-wider text-sm mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
            <li><Link href="/gallery" className="hover:text-primary transition-colors">Our Gallery</Link></li>
            <li><Link href="/menu" className="hover:text-primary transition-colors">Restaurant Menu</Link></li>
            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
          </ul>
        </div>
        
        <div className="space-y-4">
          <h4 className="text-white font-medium uppercase tracking-wider text-sm mb-4">Event Types</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/venues#grand-ballroom" className="hover:text-primary transition-colors">Weddings & Receptions</Link></li>
            <li><Link href="/venues#starlight-lawn" className="hover:text-primary transition-colors">Birthday Parties</Link></li>
            <li><Link href="/venues#royal-dining" className="hover:text-primary transition-colors">Corporate Events</Link></li>
            <li><Link href="/venues#grand-ballroom" className="hover:text-primary transition-colors">Anniversary Celebrations</Link></li>
          </ul>
        </div>
        
        <div className="space-y-4">
          <h4 className="text-white font-medium uppercase tracking-wider text-sm mb-4">Contact Info</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Vikas Nagar, Lucknow</li>
            <li>Uttar Pradesh, India 226022</li>
            <li className="pt-2"><a href="tel:+919999999999" className="hover:text-primary">+91 99999 99999</a></li>
            <li><a href="mailto:info@aachman.com" className="hover:text-primary">info@aachman.com</a></li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto px-4 mt-16 pt-8 border-t border-gray-800 text-center text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center">
        <p>&copy; {new Date().getFullYear()} Aachman Banquet & Restaurant. All rights reserved.</p>
        <div className="mt-4 md:mt-0 space-x-4">
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
