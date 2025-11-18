import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="/images/logo.png"
                alt="Blessed & Beautiful Kangen Water"
                className="h-10 w-auto"
              />
              <span className="font-bold text-white">Blessed & Beautiful</span>
            </div>
            <p className="text-sm">
              Pure, ionized Kangen water for optimal health and wellness in Honolulu, Hawaii.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/#benefits" className="hover:text-kangen-accent transition">Benefits</Link></li>
              <li><Link href="/water-types" className="hover:text-kangen-accent transition">Water Types</Link></li>
              <li><Link href="/tools" className="hover:text-kangen-accent transition">Interactive Tools</Link></li>
              <li><Link href="/business" className="hover:text-kangen-accent transition">Business</Link></li>
              <li><Link href="/gallery" className="hover:text-kangen-accent transition">Gallery</Link></li>
              <li><Link href="/resources" className="hover:text-kangen-accent transition">Resources & Blog</Link></li>
              <li><Link href="/#faq" className="hover:text-kangen-accent transition">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:8085019878" className="hover:text-kangen-accent transition">
                  (808) 501-9878
                </a>
              </li>
              <li>
                <a href="mailto:info@blessedandbeautifulkangen.com" className="hover:text-kangen-accent transition">
                  info@blessedandbeautifulkangen.com
                </a>
              </li>
              <li className="text-sm">
                3457 Waialae Ave, Ste 201<br/>
                Honolulu, HI 96816
              </li>
            </ul>
          </div>

          {/* Enagic */}
          <div>
            <h4 className="font-bold text-white mb-4">About Kangen</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://www.enagic.com" target="_blank" rel="noopener noreferrer" className="hover:text-kangen-accent transition">Enagic Official</a></li>
              <li>K8 Machine Distributor</li>
              <li>Certified Dealer</li>
              <li className="pt-2">30-Day Money Back</li>
              <li>5-Year Warranty</li>
            </ul>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="text-center">
            <h4 className="font-bold text-white mb-4">Connect With Us</h4>
            <div className="flex justify-center gap-4 mb-6">
              <a
                href="https://www.facebook.com/kangenwaterblessedandbeautiful"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center transition-all transform hover:scale-110"
                aria-label="Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="tel:8085019878"
                className="bg-gray-800 hover:bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center transition-all transform hover:scale-110"
                aria-label="Phone"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
              <a
                href="mailto:info@blessedandbeautifulkangen.com"
                className="bg-gray-800 hover:bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center transition-all transform hover:scale-110"
                aria-label="Email"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
            <p className="text-sm text-gray-400">
              Follow us on Facebook for daily tips, testimonials, and special offers!
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Blessed & Beautiful Kangen Water LLC. All rights reserved. | Honolulu, Hawaii
            </p>
            <div className="flex flex-wrap gap-4 md:gap-6 text-sm justify-center">
              <Link href="/privacy-policy" className="hover:text-kangen-accent transition">Privacy Policy</Link>
              <Link href="/terms-of-service" className="hover:text-kangen-accent transition">Terms of Service</Link>
              <Link href="/disclaimer" className="hover:text-kangen-accent transition">Disclaimer</Link>
            </div>
          </div>
        </div>

        {/* Testimonial Footer */}
        <div className="mt-8 p-4 bg-gray-800 rounded-lg text-center border border-gray-700">
          <p className="italic text-sm">
            "Lee is passionate about providing the public with the highest quality drinking water. Her presentation of the Kangen-8 machine was informative and eye-opening." — Customer Review
          </p>
        </div>
      </div>
    </footer>
  );
}
