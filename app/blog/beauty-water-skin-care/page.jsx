import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: '5 Ways to Use Beauty Water for Radiant Skin | Blessed & Beautiful',
  description: 'Discover natural beauty secrets using acidic water for healthier skin, shinier hair, and natural glow.',
};

export default function BeautyWaterSkinCare() {
  return (
    <>
      <Navigation />
      <article className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <Link href="/resources" className="text-kangen-blue hover:text-kangen-darkblue">← Back to Resources</Link>
          </div>

          <header className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold">Beauty & Skincare</span>
              <span className="text-gray-500">November 28, 2024 • 4 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              5 Ways to Use Beauty Water for Radiant Skin
            </h1>
          </header>

          <img src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=1200&h=600&fit=crop" alt="Woman with healthy glowing skin" className="w-full rounded-2xl mb-12" />

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-8">
              Beauty Water (pH 4.0-6.0) is one of Kangen Water's best-kept secrets. This mildly acidic water mimics your skin's natural pH and provides amazing beauty benefits—all without harsh chemicals or expensive products.
            </p>

            <h2 className="text-3xl font-bold mb-4">1. Natural Facial Toner ✨</h2>
            <p className="text-gray-700 mb-4"><strong>How to use:</strong></p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li>After cleansing, spray Beauty Water on your face</li>
              <li>Gently pat dry or let air dry</li>
              <li>Follow with your moisturizer</li>
              <li>Use morning and night</li>
            </ul>
            <p className="text-gray-700 mb-8">
              <strong>Benefits:</strong> Beauty Water's mild acidity helps restore your skin's natural pH balance, tighten pores, and prepare skin for better moisturizer absorption.
            </p>

            <h2 className="text-3xl font-bold mb-4">2. Hair Rinse for Shine 💇‍♀️</h2>
            <p className="text-gray-700 mb-4"><strong>How to use:</strong></p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li>Shampoo and condition as normal</li>
              <li>Do a final rinse with Beauty Water</li>
              <li>Pour over hair, massaging into scalp</li>
              <li>Don't rinse out—let it dry naturally</li>
            </ul>
            <p className="text-gray-700 mb-8">
              <strong>Benefits:</strong> Closes hair cuticles, adds incredible shine, reduces frizz, and balances scalp pH for healthier hair growth.
            </p>

            <h2 className="text-3xl font-bold mb-4">3. Gentle Makeup Remover 💄</h2>
            <p className="text-gray-700 mb-4"><strong>How to use:</strong></p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li>Soak a cotton pad with Beauty Water</li>
              <li>Gently wipe away makeup</li>
              <li>Use a fresh pad for eyes and lips</li>
              <li>Follow with your regular cleanser if needed</li>
            </ul>
            <p className="text-gray-700 mb-8">
              <strong>Benefits:</strong> Chemical-free makeup removal that's gentle on sensitive skin and eyes.
            </p>

            <h2 className="text-3xl font-bold mb-4">4. Soothing After-Shave 🪒</h2>
            <p className="text-gray-700 mb-4"><strong>How to use:</strong></p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li>Shave as normal</li>
              <li>Rinse with Beauty Water</li>
              <li>Pat gently on skin</li>
              <li>Enjoy the smooth, irritation-free feeling</li>
            </ul>
            <p className="text-gray-700 mb-8">
              <strong>Benefits:</strong> Soothes razor burn, prevents irritation, and tightens pores for a smoother shave.
            </p>

            <h2 className="text-3xl font-bold mb-4">5. Hand and Foot Soak 🦶</h2>
            <p className="text-gray-700 mb-4"><strong>How to use:</strong></p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li>Fill a basin with Beauty Water</li>
              <li>Soak hands or feet for 10-15 minutes</li>
              <li>Pat dry and apply moisturizer</li>
              <li>Do weekly for soft, smooth skin</li>
            </ul>
            <p className="text-gray-700 mb-8">
              <strong>Benefits:</strong> Softens cuticles, smooths rough skin, and creates a spa-like experience at home.
            </p>

            <div className="bg-pink-50 border-l-4 border-pink-500 p-6 my-12">
              <h3 className="font-bold text-xl mb-2">Pro Beauty Tips</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Keep Beauty Water in a spray bottle by your sink</li>
                <li>• Use it after swimming to remove chlorine</li>
                <li>• Spray on sunburned skin for relief</li>
                <li>• Use on minor cuts and scrapes</li>
                <li>• Great for pet bathing too!</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold mb-4 mt-12">Why Beauty Water Works</h2>
            <p className="text-gray-700 mb-6">
              Your skin's natural pH is slightly acidic (around 4.5-5.5). Most soaps and tap water are alkaline (pH 7-10), which disrupts your skin's protective acid mantle. Beauty Water helps restore this natural balance, supporting:
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-700">
              <li>Skin barrier function</li>
              <li>Natural moisture retention</li>
              <li>Protection against bacteria</li>
              <li>Reduced inflammation</li>
              <li>Balanced oil production</li>
            </ul>

            <h2 className="text-3xl font-bold mb-4 mt-12">Real Results</h2>
            <div className="bg-blue-50 p-6 rounded-xl mb-8">
              <p className="text-gray-700 italic mb-4">
                "I've replaced all my expensive toners with Beauty Water. My skin has never looked better, and I'm saving so much money!" - Jennifer L.
              </p>
              <p className="text-gray-700 italic">
                "As a hairstylist, I recommend Beauty Water to all my clients. The shine and manageability it creates is incredible!" - Marcus T.
              </p>
            </div>
          </div>

          <div className="mt-16 bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-2xl p-8 text-center">
            <h3 className="text-3xl font-bold mb-4">Discover Your Natural Beauty</h3>
            <p className="text-xl mb-6">
              Experience the power of Beauty Water yourself
            </p>
            <Link href="/#contact" className="inline-block bg-white text-pink-600 px-8 py-4 rounded-lg font-semibold hover:bg-pink-50 transition-colors">
              Schedule Your Demo
            </Link>
          </div>
        </div>
      </article>
      <Footer />
    </>
  );
}
