export default function Products() {
  return (
    <section id="products" className="py-20 px-4 bg-white">
      <div className="container-custom">
        <h2 className="section-title text-center">Kangen Water K8 Machine</h2>
        <p className="section-subtitle text-center">
          Enagic's most powerful antioxidant water ionizer
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Product Image */}
          <div className="bg-gradient-to-br from-kangen-light to-blue-50 rounded-2xl p-8 flex items-center justify-center border-2 border-kangen-blue">
            <img
              src="/images/products/Kangen K8.png"
              alt="Kangen K8 Water Machine"
              className="w-full h-auto max-h-96 object-contain"
            />
          </div>

          {/* Features */}
          <div>
            <h3 className="text-3xl font-bold mb-6">Revolutionary Technology</h3>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="text-2xl text-kangen-blue mr-4">⭐</span>
                <div>
                  <p className="font-bold text-gray-900">8 Platinum-Dipped Titanium Plates</p>
                  <p className="text-gray-600">Enhanced electrolysis for superior ionization</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-2xl text-kangen-blue mr-4">📱</span>
                <div>
                  <p className="font-bold text-gray-900">Full-Color Touchscreen LCD</p>
                  <p className="text-gray-600">User-friendly interface with 8 language options</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-2xl text-kangen-blue mr-4">💧</span>
                <div>
                  <p className="font-bold text-gray-900">5 Types of Water</p>
                  <p className="text-gray-600">Drinking, cooking, beauty, and cleaning</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-2xl text-kangen-blue mr-4">🔧</span>
                <div>
                  <p className="font-bold text-gray-900">Auto-Cleaning Technology</p>
                  <p className="text-gray-600">10-second automatic cleaning cycle</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-2xl text-kangen-blue mr-4">🌍</span>
                <div>
                  <p className="font-bold text-gray-900">Multi-Voltage Worldwide</p>
                  <p className="text-gray-600">Plug & play with interchangeable plugs</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-2xl text-kangen-blue mr-4">✅</span>
                <div>
                  <p className="font-bold text-gray-900">5-Year Warranty</p>
                  <p className="text-gray-600">30-year average lifespan</p>
                </div>
              </li>
            </ul>

            <div className="bg-kangen-light p-6 rounded-lg mb-6">
              <p className="font-bold text-kangen-blue mb-2">pH Levels Produced:</p>
              <p className="text-gray-700">Strong Kangen Water (11.0 pH) | Kangen Water (8.5, 9.0, 9.5 pH) | Clean Water (7.0 pH) | Acidic Water</p>
            </div>

            <div className="flex gap-4">
              <a
                href="https://leemeadows.ecokangen.com/en_US/shop/product/k8"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-kangen-blue text-white px-8 py-4 rounded-lg font-semibold hover:bg-kangen-darkblue transition-colors inline-block"
              >
                Buy Now
              </a>
              <a
                href="/#contact"
                className="bg-gray-100 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors inline-block"
              >
                Schedule Demo
              </a>
            </div>
          </div>
        </div>

        {/* Water Types */}
        <div className="bg-gradient-to-r from-kangen-blue to-kangen-darkblue rounded-2xl p-12 text-white mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">All Water Types in One Machine</h3>
          <div className="grid md:grid-cols-5 gap-4">
            <div className="bg-white bg-opacity-10 rounded-lg p-4 text-center">
              <p className="font-bold mb-2">Strong Kangen</p>
              <p className="text-2xl font-bold">11.0 pH</p>
              <p className="text-sm mt-2 opacity-90">Heavy-duty cleaning</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-4 text-center">
              <p className="font-bold mb-2">Kangen</p>
              <p className="text-2xl font-bold">8.5-9.5</p>
              <p className="text-sm mt-2 opacity-90">Drinking water</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-4 text-center">
              <p className="font-bold mb-2">Clean Water</p>
              <p className="text-2xl font-bold">7.0 pH</p>
              <p className="text-sm mt-2 opacity-90">Pure filtration</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-4 text-center">
              <p className="font-bold mb-2">Acidic</p>
              <p className="text-2xl font-bold">4.0-6.0</p>
              <p className="text-sm mt-2 opacity-90">Beauty care</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-4 text-center">
              <p className="font-bold mb-2">Strong Acidic</p>
              <p className="text-2xl font-bold">2.7 pH</p>
              <p className="text-sm mt-2 opacity-90">Disinfecting</p>
            </div>
          </div>
        </div>

        {/* Additional Products */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">More Premium Enagic Products</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Anespa DX */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-1">
              <div className="bg-gradient-to-br from-kangen-light to-blue-50 p-6 h-48 flex items-center justify-center">
                <img
                  src="/images/products/Anespa.jpg"
                  alt="Anespa DX"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">🛁</span>
                  <h4 className="font-bold text-lg">Anespa DX</h4>
                </div>
                <p className="text-sm text-gray-600 mb-3">Mineral Ion Water Spa</p>
                <p className="text-xs text-gray-700 mb-3">Transform your bathroom into a natural hot spring experience from Hokkaido, Japan.</p>
                <ul className="text-xs text-gray-600 space-y-1 mb-4">
                  <li className="flex items-start">
                    <span className="text-kangen-blue mr-1">•</span>
                    <span>Removes 100% chlorine</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-kangen-blue mr-1">•</span>
                    <span>Moisturizes skin & hair</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-kangen-blue mr-1">•</span>
                    <span>Natural hot spring minerals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-kangen-blue mr-1">•</span>
                    <span>pH 6.8-7.5 alkaline water</span>
                  </li>
                </ul>
                <div className="border-t pt-3">
                  <a
                    href="https://leemeadows.ecokangen.com/en_US/shop/product/anespa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-kangen-blue text-white text-center px-4 py-2 rounded-lg font-semibold hover:bg-kangen-darkblue transition-colors text-sm"
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            </div>

            {/* EmGuarde */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-1">
              <div className="bg-gradient-to-br from-kangen-light to-blue-50 p-6 h-48 flex items-center justify-center">
                <img
                  src="/images/products/EmGuarde.png"
                  alt="EmGuarde"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">🛡️</span>
                  <h4 className="font-bold text-lg">EmGuarde</h4>
                </div>
                <p className="text-sm text-gray-600 mb-3">EMF Protection Device</p>
                <p className="text-xs text-gray-700 mb-3">Advanced electromagnetic noise harmonizer for 24/7 protection in your home.</p>
                <ul className="text-xs text-gray-600 space-y-1 mb-4">
                  <li className="flex items-start">
                    <span className="text-kangen-blue mr-1">•</span>
                    <span>4-meter radius protection</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-kangen-blue mr-1">•</span>
                    <span>3MHz to 1000MHz range</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-kangen-blue mr-1">•</span>
                    <span>Patented technology</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-kangen-blue mr-1">•</span>
                    <span>5+ year lifespan</span>
                  </li>
                </ul>
                <div className="border-t pt-3">
                  <a
                    href="/#contact"
                    className="block w-full bg-gray-100 text-gray-700 text-center px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition-colors text-sm"
                  >
                    Contact for Pricing
                  </a>
                </div>
              </div>
            </div>

            {/* Kangen Ukon */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-1">
              <div className="bg-gradient-to-br from-kangen-light to-blue-50 p-6 h-48 flex items-center justify-center">
                <img
                  src="/images/products/Kangen Ukon.png"
                  alt="Kangen Ukon"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">🌿</span>
                  <h4 className="font-bold text-lg">Kangen Ukon</h4>
                </div>
                <p className="text-sm text-gray-600 mb-3">Organic Turmeric Supplement</p>
                <p className="text-xs text-gray-700 mb-3">Premium wild turmeric from Okinawa, Japan, cleansed with Kangen Water.</p>
                <ul className="text-xs text-gray-600 space-y-1 mb-4">
                  <li className="flex items-start">
                    <span className="text-kangen-blue mr-1">•</span>
                    <span>100% organic & vegetarian</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-kangen-blue mr-1">•</span>
                    <span>Rich in curcumin antioxidants</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-kangen-blue mr-1">•</span>
                    <span>Grown on Enagic farms</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-kangen-blue mr-1">•</span>
                    <span>No artificial additives</span>
                  </li>
                </ul>
                <div className="border-t pt-3">
                  <a
                    href="https://leemeadows.ecokangen.com/en_US/shop/product/ukon"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-kangen-blue text-white text-center px-4 py-2 rounded-lg font-semibold hover:bg-kangen-darkblue transition-colors text-sm"
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            </div>

            {/* Kangen Wagyu */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-1">
              <div className="bg-gradient-to-br from-kangen-light to-blue-50 p-6 h-48 flex items-center justify-center">
                <img
                  src="/images/products/kangen wagyu.jpeg"
                  alt="Kangen Wagyu"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">🥩</span>
                  <h4 className="font-bold text-lg">Kangen Wagyu</h4>
                </div>
                <p className="text-sm text-gray-600 mb-3">Premium Wagyu Beef</p>
                <p className="text-xs text-gray-700 mb-3">Exquisite beef raised on Kangen Water® with traditional Japanese techniques.</p>
                <ul className="text-xs text-gray-600 space-y-1 mb-4">
                  <li className="flex items-start">
                    <span className="text-kangen-blue mr-1">•</span>
                    <span>Fed Kangen Water® daily</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-kangen-blue mr-1">•</span>
                    <span>No antibiotics or hormones</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-kangen-blue mr-1">•</span>
                    <span>JMGA B-4 grading</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-kangen-blue mr-1">•</span>
                    <span>30+ years heritage ranch</span>
                  </li>
                </ul>
                <div className="border-t pt-3">
                  <a
                    href="/#contact"
                    className="block w-full bg-gray-100 text-gray-700 text-center px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition-colors text-sm"
                  >
                    Contact for Pricing
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details Info */}
          <div className="mt-8 bg-blue-50 border-l-4 border-kangen-blue p-6 rounded-lg">
            <p className="text-sm text-gray-700">
              <strong className="text-kangen-blue">🌟 Premium Enagic Quality:</strong> All products are manufactured with the highest quality standards and incorporate Enagic's commitment to health, wellness, and environmental sustainability.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-lg text-gray-600 mb-6">Ready to experience the difference?</p>
          <button className="btn-primary">
            Schedule a Demo
          </button>
        </div>
      </div>
    </section>
  );
}
