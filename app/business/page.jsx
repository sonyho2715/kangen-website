import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Kangen Water for Business: Commercial Applications | Blessed & Beautiful',
  description: 'Discover how restaurants, spas, pet businesses, and salons can benefit from Kangen Water systems. Enhance customer experience and save money.',
};

export default function BusinessApplications() {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-kangen-blue to-kangen-darkblue text-white py-20 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Kangen Water for Business</h1>
          <p className="text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
            Transform your business with premium water solutions that enhance customer experience, reduce costs, and promote wellness
          </p>
          <Link href="/#contact" className="inline-block bg-white text-kangen-blue px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors">
            Schedule Business Consultation
          </Link>
        </div>
      </div>

      {/* Overview Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Businesses Choose Kangen</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Forward-thinking businesses are discovering the competitive advantages of Kangen Water systems
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="bg-green-50 rounded-xl p-6 text-center">
              <div className="text-4xl mb-3">💰</div>
              <h3 className="font-bold text-lg mb-2">Cost Savings</h3>
              <p className="text-gray-700 text-sm">Eliminate bottled water and cleaning supply expenses</p>
            </div>
            <div className="bg-blue-50 rounded-xl p-6 text-center">
              <div className="text-4xl mb-3">🌟</div>
              <h3 className="font-bold text-lg mb-2">Premium Experience</h3>
              <p className="text-gray-700 text-sm">Provide superior service that customers notice</p>
            </div>
            <div className="bg-purple-50 rounded-xl p-6 text-center">
              <div className="text-4xl mb-3">🌱</div>
              <h3 className="font-bold text-lg mb-2">Eco-Friendly</h3>
              <p className="text-gray-700 text-sm">Reduce plastic waste and environmental impact</p>
            </div>
            <div className="bg-orange-50 rounded-xl p-6 text-center">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="font-bold text-lg mb-2">Marketing Edge</h3>
              <p className="text-gray-700 text-sm">Differentiate your business from competitors</p>
            </div>
          </div>
        </div>
      </section>

      {/* Restaurants Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-6xl">🍽️</span>
                <h2 className="text-4xl font-bold text-gray-900">Restaurants & Cafes</h2>
              </div>
              <p className="text-xl text-gray-700 mb-6">
                Elevate your culinary offerings with Kangen Water and provide a premium dining experience
              </p>

              <h3 className="text-2xl font-bold mb-4">Applications:</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <div>
                    <strong className="text-gray-900">Premium Beverages:</strong>
                    <p className="text-gray-700">Brew superior coffee and tea with alkaline water for richer flavors and less bitterness</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <div>
                    <strong className="text-gray-900">Enhanced Cooking:</strong>
                    <p className="text-gray-700">Cook vegetables, rice, and soups with Kangen Water for better taste, color, and texture</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <div>
                    <strong className="text-gray-900">Produce Washing:</strong>
                    <p className="text-gray-700">Clean fruits and vegetables with Strong Kangen Water to remove pesticides and extend freshness</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <div>
                    <strong className="text-gray-900">Chemical-Free Cleaning:</strong>
                    <p className="text-gray-700">Sanitize kitchens, counters, and equipment without harsh chemicals</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <div>
                    <strong className="text-gray-900">Customer Service:</strong>
                    <p className="text-gray-700">Serve complimentary alkaline water as a premium touch</p>
                  </div>
                </li>
              </ul>

              <div className="bg-white rounded-lg p-6 border-l-4 border-orange-600">
                <p className="font-bold text-lg mb-2">💡 Business Benefit:</p>
                <p className="text-gray-700">Restaurant owners report improved food quality, reduced chemical costs, and customers specifically requesting their "special water."</p>
              </div>
            </div>

            <div className="space-y-6">
              <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop" alt="Restaurant interior" className="w-full rounded-xl shadow-lg" />
              <img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&h=400&fit=crop" alt="Chef cooking" className="w-full rounded-xl shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Spas Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 space-y-6">
              <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&h=400&fit=crop" alt="Spa treatment" className="w-full rounded-xl shadow-lg" />
              <img src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=600&h=400&fit=crop" alt="Spa water" className="w-full rounded-xl shadow-lg" />
            </div>

            <div className="order-1 md:order-2">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-6xl">💆</span>
                <h2 className="text-4xl font-bold text-gray-900">Spas & Wellness Centers</h2>
              </div>
              <p className="text-xl text-gray-700 mb-6">
                Create an elevated wellness experience with water that complements your healing services
              </p>

              <h3 className="text-2xl font-bold mb-4">Applications:</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold mt-1">✓</span>
                  <div>
                    <strong className="text-gray-900">Facial Treatments:</strong>
                    <p className="text-gray-700">Use Beauty Water (pH 5.5-6.0) as a natural toner that balances skin pH</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold mt-1">✓</span>
                  <div>
                    <strong className="text-gray-900">Client Hydration:</strong>
                    <p className="text-gray-700">Offer alkaline water to clients before and after treatments for detoxification</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold mt-1">✓</span>
                  <div>
                    <strong className="text-gray-900">Foot Soaks:</strong>
                    <p className="text-gray-700">Enhanced pedicure experiences with Beauty Water for softer, smoother skin</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold mt-1">✓</span>
                  <div>
                    <strong className="text-gray-900">Steam Rooms:</strong>
                    <p className="text-gray-700">Use Kangen Water in steam treatments for enhanced skin benefits</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold mt-1">✓</span>
                  <div>
                    <strong className="text-gray-900">Sanitation:</strong>
                    <p className="text-gray-700">Strong Acidic Water (pH 2.5) for natural sanitization of treatment rooms and equipment</p>
                  </div>
                </li>
              </ul>

              <div className="bg-white rounded-lg p-6 border-l-4 border-purple-600">
                <p className="font-bold text-lg mb-2">💡 Business Benefit:</p>
                <p className="text-gray-700">Spa owners report clients notice smoother skin after treatments and appreciate the commitment to natural, chemical-free wellness.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nail Salons Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-pink-50 to-rose-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-6xl">💅</span>
                <h2 className="text-4xl font-bold text-gray-900">Nail Salons</h2>
              </div>
              <p className="text-xl text-gray-700 mb-6">
                Provide a luxury nail care experience while protecting client health with chemical-free water solutions
              </p>

              <h3 className="text-2xl font-bold mb-4">Applications:</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-pink-600 font-bold mt-1">✓</span>
                  <div>
                    <strong className="text-gray-900">Pedicure Soaks:</strong>
                    <p className="text-gray-700">Beauty Water softens cuticles naturally and leaves feet feeling incredibly smooth</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-pink-600 font-bold mt-1">✓</span>
                  <div>
                    <strong className="text-gray-900">Hand Treatments:</strong>
                    <p className="text-gray-700">Soak hands in Beauty Water before manicures for better cuticle care</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-pink-600 font-bold mt-1">✓</span>
                  <div>
                    <strong className="text-gray-900">Tool Sanitization:</strong>
                    <p className="text-gray-700">Use Strong Acidic Water to sanitize tools naturally—safer than harsh chemicals</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-pink-600 font-bold mt-1">✓</span>
                  <div>
                    <strong className="text-gray-900">Surface Cleaning:</strong>
                    <p className="text-gray-700">Clean stations and bowls with Strong Kangen Water—no chemical smell</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-pink-600 font-bold mt-1">✓</span>
                  <div>
                    <strong className="text-gray-900">Client Comfort:</strong>
                    <p className="text-gray-700">Offer complimentary alkaline water to keep clients hydrated and comfortable</p>
                  </div>
                </li>
              </ul>

              <div className="bg-white rounded-lg p-6 border-l-4 border-pink-600">
                <p className="font-bold text-lg mb-2">💡 Business Benefit:</p>
                <p className="text-gray-700">Nail salon owners love that Beauty Water enhances treatments, eliminates chemical odors, and clients leave with noticeably softer hands and feet.</p>
              </div>
            </div>

            <div className="space-y-6">
              <img src="https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&h=400&fit=crop" alt="Nail salon" className="w-full rounded-xl shadow-lg" />
              <img src="https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=600&h=400&fit=crop" alt="Manicure treatment" className="w-full rounded-xl shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Pet Shops & Hotels Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 space-y-6">
              <img src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&h=400&fit=crop" alt="Happy dogs" className="w-full rounded-xl shadow-lg" />
              <img src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=600&h=400&fit=crop" alt="Pet grooming" className="w-full rounded-xl shadow-lg" />
            </div>

            <div className="order-1 md:order-2">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-6xl">🐾</span>
                <h2 className="text-4xl font-bold text-gray-900">Pet Shops & Pet Hotels</h2>
              </div>
              <p className="text-xl text-gray-700 mb-6">
                Give pets the same health benefits their owners enjoy with premium Kangen Water solutions
              </p>

              <h3 className="text-2xl font-bold mb-4">Applications:</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <div>
                    <strong className="text-gray-900">Premium Pet Hydration:</strong>
                    <p className="text-gray-700">Provide alkaline water for drinking—pets notice better-tasting water and stay more hydrated</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <div>
                    <strong className="text-gray-900">Grooming & Bathing:</strong>
                    <p className="text-gray-700">Beauty Water (pH 5.5-6.0) for bathing leaves coats shinier, softer, and healthier-looking</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <div>
                    <strong className="text-gray-900">Odor Control:</strong>
                    <p className="text-gray-700">Strong Acidic Water neutralizes pet odors naturally in kennels and play areas</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <div>
                    <strong className="text-gray-900">Facility Sanitization:</strong>
                    <p className="text-gray-700">Clean cages, bowls, and floors with Strong Kangen Water—safe for pets, tough on bacteria</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <div>
                    <strong className="text-gray-900">Food Preparation:</strong>
                    <p className="text-gray-700">Wash pet food bowls and clean produce for fresh pet food with chemical-free water</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <div>
                    <strong className="text-gray-900">Minor Wound Care:</strong>
                    <p className="text-gray-700">Beauty Water can be used to gently clean minor scrapes and hot spots</p>
                  </div>
                </li>
              </ul>

              <div className="bg-white rounded-lg p-6 border-l-4 border-green-600">
                <p className="font-bold text-lg mb-2">💡 Business Benefit:</p>
                <p className="text-gray-700">Pet business owners report healthier-looking pets, happier customers who appreciate the extra care, and significant savings on cleaning supplies and bottled water.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Business Return on Investment</h2>
            <p className="text-xl text-gray-600">See how quickly Kangen Water pays for itself</p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Typical Business Savings (Annual)</h3>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg p-6">
                <h4 className="font-bold text-lg mb-4 text-red-600">❌ Current Costs:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Bottled water for clients: $2,400/year</li>
                  <li>• Cleaning supplies: $1,800/year</li>
                  <li>• Sanitizing products: $1,200/year</li>
                  <li>• Specialty waters: $600/year</li>
                  <li className="font-bold pt-2 border-t">Total: $6,000/year</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h4 className="font-bold text-lg mb-4 text-green-600">✅ With Kangen:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• K8 Machine: $5,890 (one-time)</li>
                  <li>• Annual electricity: ~$150</li>
                  <li>• Filter replacement: ~$100/year</li>
                  <li>• Bottled water: $0</li>
                  <li className="font-bold pt-2 border-t">Annual cost: $250/year</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-600 to-emerald-700 text-white rounded-xl p-8 text-center">
              <p className="text-xl mb-2">Annual Savings After Year 1:</p>
              <p className="text-5xl font-bold mb-2">$5,750</p>
              <p className="text-lg">Machine pays for itself in 13 months!</p>
              <p className="text-sm mt-4 text-green-100">5-year savings: $22,860+</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Business Owners Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-4xl mb-4">🍽️</div>
              <p className="text-gray-700 italic mb-4">
                "Our customers constantly compliment the taste of our coffee and tea. Since installing Kangen, we've become known for having the best coffee in town!"
              </p>
              <p className="font-bold">— Maria S., Cafe Owner</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-4xl mb-4">💆</div>
              <p className="text-gray-700 italic mb-4">
                "Beauty Water has transformed our facials. Clients notice immediate improvements in skin texture. It's become our signature treatment element."
              </p>
              <p className="font-bold">— Linda K., Spa Director</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-4xl mb-4">🐾</div>
              <p className="text-gray-700 italic mb-4">
                "Dogs' coats are shinier after grooming with Beauty Water. Plus, we eliminated all harsh chemical cleaners. Our facility smells fresh naturally!"
              </p>
              <p className="font-bold">— James T., Pet Hotel Owner</p>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-kangen-blue to-kangen-darkblue text-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Schedule a free consultation and see how Kangen Water can benefit your business
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-4xl mb-3">1️⃣</div>
              <h3 className="font-bold text-xl mb-2">Free Consultation</h3>
              <p className="text-blue-100 text-sm">We assess your business needs and calculate your potential savings</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-4xl mb-3">2️⃣</div>
              <h3 className="font-bold text-xl mb-2">On-Site Demo</h3>
              <p className="text-blue-100 text-sm">Experience the different water types and see applications firsthand</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-4xl mb-3">3️⃣</div>
              <h3 className="font-bold text-xl mb-2">Professional Installation</h3>
              <p className="text-blue-100 text-sm">We handle setup, training, and ongoing support for your team</p>
            </div>
          </div>

          <div className="text-center">
            <Link href="/#contact" className="inline-block bg-white text-kangen-blue px-10 py-5 rounded-lg text-xl font-semibold hover:bg-blue-50 transition-colors">
              Schedule Your Business Consultation
            </Link>
            <p className="mt-4 text-blue-100">📞 Call: (808) 501-9878 • ✉️ Email: info@blessedandbeautifulkangen.com</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
