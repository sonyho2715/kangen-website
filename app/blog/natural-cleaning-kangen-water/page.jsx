import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Natural Home Cleaning with Strong Kangen Water | Blessed & Beautiful',
  description: 'Learn how to clean your home naturally and effectively using Strong Kangen Water—no harsh chemicals needed!',
};

export default function NaturalCleaningKangenWater() {
  return (
    <>
      <Navigation />
      <article className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6"><Link href="/resources" className="text-kangen-blue hover:text-kangen-darkblue">← Back to Resources</Link></div>
          <header className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">Home & Lifestyle</span>
              <span className="text-gray-500">November 20, 2024 • 5 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How to Clean Your Home Naturally with Strong Kangen Water
            </h1>
          </header>

          <img src="https://images.unsplash.com/photo-1585421514738-01798e348b17?w=1200&h=600&fit=crop" alt="Natural cleaning supplies" className="w-full rounded-2xl mb-12" />

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-8">
              Ditch the toxic chemicals! Strong Kangen Water (pH 11.5) is a powerful, natural, and eco-friendly cleaning solution that works as well as—or better than—conventional cleaners.
            </p>

            <h2 className="text-3xl font-bold mb-4">Kitchen Cleaning</h2>
            <h3 className="text-2xl font-bold mb-3">Grease & Oil Removal</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li>Spray on stovetops, oven surfaces, and range hoods</li>
              <li>Let sit for 1-2 minutes</li>
              <li>Wipe clean with a cloth</li>
              <li>Works better than commercial degreasers!</li>
            </ul>

            <h3 className="text-2xl font-bold mb-3">Cutting Boards & Counters</h3>
            <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-700">
              <li>Spray generously on surfaces</li>
              <li>Wipe with a clean cloth</li>
              <li>Removes bacteria naturally</li>
              <li>Safe for food prep areas</li>
            </ul>

            <h2 className="text-3xl font-bold mb-4">Bathroom Cleaning</h2>
            <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-700">
              <li><strong>Toilets:</strong> Pour in bowl, scrub, and flush</li>
              <li><strong>Tubs & Showers:</strong> Spray and wipe for soap scum removal</li>
              <li><strong>Tiles & Grout:</strong> Spray, let sit, scrub with brush</li>
              <li><strong>Mirrors:</strong> Spray and wipe for streak-free shine</li>
            </ul>

            <h2 className="text-3xl font-bold mb-4">Laundry & Stain Removal</h2>
            <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-700">
              <li>Pre-soak stained clothes for 15-30 minutes</li>
              <li>Add 1-2 cups to washing machine</li>
              <li>Removes coffee, wine, grass, and oil stains</li>
              <li>Reduces need for harsh detergents</li>
            </ul>

            <h2 className="text-3xl font-bold mb-4">Produce Washing</h2>
            <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-700">
              <li>Soak fruits and vegetables for 5-10 minutes</li>
              <li>Removes pesticides, dirt, and wax</li>
              <li>Extends freshness of produce</li>
              <li>Rinse with clean water after</li>
            </ul>

            <div className="bg-green-50 border-l-4 border-green-600 p-6 my-8">
              <h3 className="font-bold text-xl mb-2">Why Strong Kangen Water Works</h3>
              <p className="text-gray-700">
                At pH 11.5, Strong Kangen Water has powerful emulsifying properties that break down oils and grease. Its high alkalinity gives it natural cleaning power without any toxic chemicals, making it safe for your family, pets, and the environment.
              </p>
            </div>

            <h2 className="text-3xl font-bold mb-4 mt-12">Money-Saving Benefits</h2>
            <p className="text-gray-700 mb-6">
              Replace all these products with one solution:
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-700">
              <li>All-purpose cleaner ($6/bottle)</li>
              <li>Glass cleaner ($5/bottle)</li>
              <li>Degreaser ($8/bottle)</li>
              <li>Stain remover ($10/bottle)</li>
              <li>Produce wash ($7/bottle)</li>
            </ul>
            <div className="bg-blue-50 p-6 rounded-xl mb-8">
              <p className="font-bold text-2xl text-green-600">Potential Savings: $400+ per year!</p>
            </div>
          </div>

          <div className="mt-16 bg-gradient-to-r from-green-600 to-emerald-700 text-white rounded-2xl p-8 text-center">
            <h3 className="text-3xl font-bold mb-4">Clean Green & Save Money</h3>
            <p className="text-xl mb-6">Experience chemical-free cleaning with Kangen Water</p>
            <Link href="/#contact" className="inline-block bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors">
              Get Your Demo
            </Link>
          </div>
        </div>
      </article>
      <Footer />
    </>
  );
}
