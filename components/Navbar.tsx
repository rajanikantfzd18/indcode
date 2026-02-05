import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full border-b border-gray-200">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="text-lg font-semibold text-brand-primary">
          Indcode
        </div>

        <div className="flex gap-6 text-sm text-gray-700">
          <Link href="/" className="hover:text-brand-primary">
            Home
          </Link>
          <Link href="#services" className="hover:text-brand-primary">
            Services
          </Link>
          <Link href="#about" className="hover:text-brand-primary">
            About
          </Link>
          <Link href="#contact" className="hover:text-brand-primary">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}