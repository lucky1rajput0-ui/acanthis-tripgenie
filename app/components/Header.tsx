import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 group">
          <Image src="/logo.png" alt="Acanthis Journey Logo" width={60} height={60} className="h-14 w-auto" />
          <span className="text-xl font-bold text-indigo-700 group-hover:text-indigo-900 transition">
            Acanthis Journey
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-gray-700 hover:text-indigo-600 transition font-medium">
            Home
          </Link>
          <Link href="/destinations" className="text-gray-700 hover:text-indigo-600 transition font-medium">
            Destinations
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-indigo-600 transition font-medium">
            About
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-indigo-600 transition font-medium">
            Contact
          </Link>
        </div>

        <div className="flex gap-3">
          <a
            href="tel:+919830639007"
            className="hidden sm:block px-4 py-2 rounded-lg border border-indigo-600 text-indigo-600 hover:bg-indigo-50 transition font-medium"
          >
            📞 Call
          </a>
          <a
            href="https://wa.me/919830639007"
            target="_blank"
            className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition font-medium"
          >
            💬 WhatsApp
          </a>
        </div>
      </nav>
    </header>
  );
}
