import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">🌍 Acanthis Journey</h3>
            <p className="text-sm">Creating unforgettable travel experiences across the globe.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-indigo-400 transition">Home</Link></li>
              <li><Link href="/destinations" className="hover:text-indigo-400 transition">Destinations</Link></li>
              <li><Link href="/about" className="hover:text-indigo-400 transition">About Us</Link></li>
              <li><Link href="/planner" className="hover:text-indigo-400 transition">Plan Trip</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-4">Contact</h4>
            <ul className="space-y-2">
              <li><a href="tel:+919830639007" className="hover:text-indigo-400 transition">📞 +91 98306 39007</a></li>
              <li><a href="https://wa.me/919830639007" target="_blank" className="hover:text-indigo-400 transition">💬 WhatsApp</a></li>
              <li className="text-sm">Available Mon-Sun 10AM-10PM</li>
            </ul>
          </div>

          {/* Follow */}
          <div>
            <h4 className="font-bold text-white mb-4">Follow Us</h4>
            <p className="text-sm mb-4">Stay updated with our latest travel packages and offers</p>
            <div className="flex gap-4">
              <a href="#" className="text-indigo-400 hover:text-indigo-300 transition text-lg">f</a>
              <a href="#" className="text-indigo-400 hover:text-indigo-300 transition text-lg">𝕏</a>
              <a href="#" className="text-indigo-400 hover:text-indigo-300 transition text-lg">📷</a>
            </div>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} Acanthis Journey. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-indigo-400 transition">Privacy Policy</Link>
            <Link href="#" className="hover:text-indigo-400 transition">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
