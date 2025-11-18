import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Kangen Water vs Bottled Water: Ultimate Comparison | Blessed & Beautiful',
  description: 'See how Kangen Water compares to bottled water in quality, cost, and environmental impact. Make an informed choice for your health.',
};

export default function KangenVsBottledWater() {
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
              <span className="bg-kangen-blue text-white px-3 py-1 rounded-full text-sm font-semibold">Comparison</span>
              <span className="text-gray-500">December 5, 2024 • 6 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Kangen Water vs Bottled Water: The Ultimate Comparison
            </h1>
          </header>

          <img src="https://images.unsplash.com/photo-1523362628745-0c100150b504?w=1200&h=600&fit=crop" alt="Water bottles comparison" className="w-full rounded-2xl mb-12" />

          <div className="prose prose-lg max-w-none">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-red-700 mb-4">❌ Bottled Water</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• pH: 5.5-7.0 (often acidic)</li>
                  <li>• Expensive over time</li>
                  <li>• Environmental waste</li>
                  <li>• Potential plastic contamination</li>
                  <li>• Limited to drinking only</li>
                </ul>
              </div>

              <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-green-700 mb-4">✅ Kangen Water</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• pH: 8.5-9.5 (alkaline)</li>
                  <li>• Cost-effective long-term</li>
                  <li>• Eco-friendly</li>
                  <li>• Freshly ionized daily</li>
                  <li>• 5 types of water</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-4 mt-12">Cost Comparison</h2>
            <div className="bg-gray-50 p-8 rounded-xl mb-8">
              <h4 className="font-bold text-xl mb-4">5-Year Cost Analysis:</h4>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold">Bottled Water (Family of 4):</p>
                  <p className="text-gray-700">$2/day per person × 4 people × 365 days × 5 years = <strong className="text-red-600 text-xl">$14,600</strong></p>
                </div>
                <div>
                  <p className="font-semibold">Kangen K8 Machine:</p>
                  <p className="text-gray-700">Initial investment: $4,980</p>
                  <p className="text-gray-700">5-year electricity: ~$750</p>
                  <p className="text-gray-700">Total: <strong className="text-green-600 text-xl">$5,730</strong></p>
                </div>
                <div className="bg-green-100 p-4 rounded-lg">
                  <p className="font-bold text-2xl text-green-700">Savings: $8,870 over 5 years!</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-4 mt-12">Environmental Impact</h2>
            <p className="text-gray-700 mb-6">
              <strong>Bottled Water:</strong>
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li>Americans use 50 billion plastic bottles per year</li>
              <li>Only 23% are recycled</li>
              <li>Takes 450+ years for plastic to decompose</li>
              <li>Requires 3x the water to produce the bottle than it contains</li>
            </ul>

            <p className="text-gray-700 mb-6">
              <strong>Kangen Water:</strong>
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-700">
              <li>Zero plastic waste</li>
              <li>Eliminates thousands of bottles per year</li>
              <li>Sustainable 30-year lifespan</li>
              <li>Reduces carbon footprint</li>
            </ul>

            <h2 className="text-3xl font-bold mb-4 mt-12">Health Quality</h2>
            <p className="text-gray-700 mb-6">
              <strong>Bottled Water Concerns:</strong>
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li>Often just filtered tap water</li>
              <li>Acidic pH can contribute to body acidity</li>
              <li>Microplastics from bottle leaching</li>
              <li>No antioxidant properties</li>
              <li>Stale, not freshly ionized</li>
            </ul>

            <p className="text-gray-700 mb-6">
              <strong>Kangen Water Benefits:</strong>
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-700">
              <li>Alkaline pH (8.5-9.5)</li>
              <li>Rich in molecular hydrogen</li>
              <li>Antioxidant properties</li>
              <li>Micro-clustered for better absorption</li>
              <li>Freshly produced daily</li>
            </ul>

            <h2 className="text-3xl font-bold mb-4 mt-12">Versatility</h2>
            <p className="text-gray-700 mb-6">
              Bottled water serves one purpose: drinking. Kangen Water machines provide 5 types of water:
            </p>
            <ol className="list-decimal pl-6 mb-8 space-y-2 text-gray-700">
              <li><strong>Strong Kangen (11.5 pH):</strong> Natural cleaning</li>
              <li><strong>Kangen (8.5-9.5 pH):</strong> Healthy drinking</li>
              <li><strong>Clean (7.0 pH):</strong> Medications, baby formula</li>
              <li><strong>Beauty (4.0-6.0 pH):</strong> Skin and hair care</li>
              <li><strong>Strong Acidic (2.5 pH):</strong> Sanitizing</li>
            </ol>

            <h2 className="text-3xl font-bold mb-4 mt-12">The Verdict</h2>
            <p className="text-gray-700 mb-6">
              While bottled water offers convenience, Kangen Water provides superior value in every category:
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-700">
              <li>✅ Better health benefits</li>
              <li>✅ Significant cost savings</li>
              <li>✅ Environmental responsibility</li>
              <li>✅ Multiple uses beyond drinking</li>
              <li>✅ Long-term investment in health</li>
            </ul>
          </div>

          <div className="mt-16 bg-gradient-to-r from-kangen-blue to-kangen-darkblue text-white rounded-2xl p-8 text-center">
            <h3 className="text-3xl font-bold mb-4">Make the Switch Today</h3>
            <p className="text-xl text-blue-100 mb-6">
              Stop buying bottles. Start saving money and the environment.
            </p>
            <Link href="/#contact" className="inline-block bg-white text-kangen-blue px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Get Started with Kangen
            </Link>
          </div>
        </div>
      </article>
      <Footer />
    </>
  );
}
