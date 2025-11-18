'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="container-custom py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <img
            src="/images/logo.png"
            alt="Blessed & Beautiful Kangen Water"
            className="h-12 w-auto"
          />
          <span className="font-bold text-xl text-gray-900">Blessed & Beautiful</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link href="/#benefits" className="text-gray-700 hover:text-kangen-blue transition">
            Benefits
          </Link>
          <Link href="/water-types" className="text-gray-700 hover:text-kangen-blue transition">
            Water Types
          </Link>
          <Link href="/tools" className="text-gray-700 hover:text-kangen-blue transition">
            Tools
          </Link>
          <Link href="/quiz" className="text-gray-700 hover:text-kangen-blue transition">
            Quiz
          </Link>
          <Link href="/business" className="text-gray-700 hover:text-kangen-blue transition">
            Business
          </Link>
          <Link href="/resources" className="text-gray-700 hover:text-kangen-blue transition">
            Resources
          </Link>
          <Link href="/gallery" className="text-gray-700 hover:text-kangen-blue transition">
            Gallery
          </Link>
          <Link href="/#faq" className="text-gray-700 hover:text-kangen-blue transition">
            FAQ
          </Link>
          <Link href="/#contact" className="btn-primary">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col space-y-1"
          onClick={toggleMenu}
        >
          <div className="w-6 h-1 bg-gray-900"></div>
          <div className="w-6 h-1 bg-gray-900"></div>
          <div className="w-6 h-1 bg-gray-900"></div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container-custom py-4 space-y-4">
            <Link href="/#benefits" className="block text-gray-700 hover:text-kangen-blue" onClick={() => setIsOpen(false)}>
              Benefits
            </Link>
            <Link href="/water-types" className="block text-gray-700 hover:text-kangen-blue" onClick={() => setIsOpen(false)}>
              Water Types
            </Link>
            <Link href="/tools" className="block text-gray-700 hover:text-kangen-blue" onClick={() => setIsOpen(false)}>
              Tools
            </Link>
            <Link href="/quiz" className="block text-gray-700 hover:text-kangen-blue" onClick={() => setIsOpen(false)}>
              Water Type Quiz
            </Link>
            <Link href="/business" className="block text-gray-700 hover:text-kangen-blue" onClick={() => setIsOpen(false)}>
              Business
            </Link>
            <Link href="/resources" className="block text-gray-700 hover:text-kangen-blue" onClick={() => setIsOpen(false)}>
              Resources
            </Link>
            <Link href="/gallery" className="block text-gray-700 hover:text-kangen-blue" onClick={() => setIsOpen(false)}>
              Gallery
            </Link>
            <Link href="/#faq" className="block text-gray-700 hover:text-kangen-blue" onClick={() => setIsOpen(false)}>
              FAQ
            </Link>
            <Link href="/#about" className="block text-gray-700 hover:text-kangen-blue" onClick={() => setIsOpen(false)}>
              About Lee
            </Link>
            <Link href="/#testimonials" className="block text-gray-700 hover:text-kangen-blue" onClick={() => setIsOpen(false)}>
              Testimonials
            </Link>
            <Link href="/#contact" className="block btn-primary" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
