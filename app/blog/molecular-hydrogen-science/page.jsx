import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'The Science Behind Molecular Hydrogen in Kangen Water | Blessed & Beautiful',
  description: 'Explore scientific research on molecular hydrogen and its powerful antioxidant properties in Kangen Water.',
};

export default function MolecularHydrogenScience() {
  return (
    <>
      <Navigation />
      <article className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6"><Link href="/resources" className="text-kangen-blue hover:text-kangen-darkblue">← Back to Resources</Link></div>
          <header className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">Science</span>
              <span className="text-gray-500">November 15, 2024 • 8 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The Science Behind Molecular Hydrogen in Kangen Water
            </h1>
          </header>

          <img src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=1200&h=600&fit=crop" alt="Scientific research lab" className="w-full rounded-2xl mb-12" />

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-8">
              Molecular hydrogen (H₂) is emerging as one of the most promising therapeutic agents in modern medicine. Kangen Water contains this powerful antioxidant naturally through the electrolysis process.
            </p>

            <h2 className="text-3xl font-bold mb-4">What is Molecular Hydrogen?</h2>
            <p className="text-gray-700 mb-6">
              Molecular hydrogen is the smallest molecule in the universe—two hydrogen atoms bonded together (H₂). Its tiny size allows it to:
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-700">
              <li>Cross the blood-brain barrier</li>
              <li>Penetrate cell membranes easily</li>
              <li>Enter mitochondria (cellular powerhouses)</li>
              <li>Access areas other antioxidants cannot reach</li>
            </ul>

            <h2 className="text-3xl font-bold mb-4">How It Works: Selective Antioxidant</h2>
            <p className="text-gray-700 mb-6">
              Unlike other antioxidants, molecular hydrogen is selective. It specifically targets the most harmful free radicals (hydroxyl radicals) while leaving beneficial ones alone. This is crucial because some free radicals play important roles in immune function and cell signaling.
            </p>

            <div className="bg-purple-50 border-l-4 border-purple-600 p-6 my-8">
              <h3 className="font-bold text-xl mb-2">Research Highlights</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Over 1,000+ peer-reviewed studies on H₂</li>
                <li>• 170+ disease models studied</li>
                <li>• Zero toxic side effects reported</li>
                <li>• Benefits demonstrated in humans and animals</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold mb-4">Proven Health Benefits</h2>

            <h3 className="text-2xl font-bold mb-3">1. Powerful Antioxidant Effects</h3>
            <p className="text-gray-700 mb-6">
              Molecular hydrogen neutralizes harmful free radicals that cause oxidative stress—linked to aging, inflammation, and chronic diseases.
            </p>

            <h3 className="text-2xl font-bold mb-3">2. Anti-Inflammatory Properties</h3>
            <p className="text-gray-700 mb-6">
              H₂ helps reduce chronic inflammation by modulating inflammatory markers and supporting the body's natural anti-inflammatory responses.
            </p>

            <h3 className="text-2xl font-bold mb-3">3. Neuroprotective Effects</h3>
            <p className="text-gray-700 mb-6">
              Studies show H₂ can cross the blood-brain barrier and protect brain cells from oxidative damage, potentially supporting cognitive health.
            </p>

            <h3 className="text-2xl font-bold mb-3">4. Metabolic Support</h3>
            <p className="text-gray-700 mb-6">
              Research suggests H₂ may help regulate metabolism, support healthy blood sugar levels, and improve energy production in cells.
            </p>

            <h2 className="text-3xl font-bold mb-4 mt-12">How Kangen Water Produces H₂</h2>
            <p className="text-gray-700 mb-6">
              The electrolysis process in Kangen Water machines splits water molecules (H₂O) and produces hydrogen-rich water:
            </p>
            <ol className="list-decimal pl-6 mb-8 space-y-2 text-gray-700">
              <li>Water flows through platinum-dipped titanium plates</li>
              <li>Electrical current separates H₂O into H₂ and O</li>
              <li>Hydrogen gas dissolves into the water</li>
              <li>Result: Water rich in molecular hydrogen</li>
            </ol>

            <h2 className="text-3xl font-bold mb-4 mt-12">Oxidation-Reduction Potential (ORP)</h2>
            <p className="text-gray-700 mb-6">
              Kangen Water typically has a negative ORP (-200 to -400 mV), meaning it acts as an antioxidant:
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-700">
              <li><strong>Tap Water:</strong> +200 to +600 mV (oxidizing)</li>
              <li><strong>Bottled Water:</strong> +200 to +300 mV (oxidizing)</li>
              <li><strong>Kangen Water:</strong> -200 to -400 mV (antioxidant)</li>
            </ul>

            <h2 className="text-3xl font-bold mb-4 mt-12">Clinical Applications</h2>
            <p className="text-gray-700 mb-6">
              Molecular hydrogen therapy is being studied for:
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-700">
              <li>Cardiovascular health</li>
              <li>Athletic performance and recovery</li>
              <li>Cognitive function</li>
              <li>Metabolic disorders</li>
              <li>Inflammatory conditions</li>
              <li>Skin health and aging</li>
            </ul>

            <div className="bg-blue-50 p-6 rounded-xl my-8">
              <h3 className="font-bold text-xl mb-2">Important Note</h3>
              <p className="text-gray-700">
                While research is promising, molecular hydrogen should not replace medical treatment. Always consult healthcare professionals for medical advice.
              </p>
            </div>

            <h2 className="text-3xl font-bold mb-4 mt-12">Maximizing H₂ Benefits</h2>
            <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-700">
              <li>Drink Kangen Water fresh (H₂ dissipates over time)</li>
              <li>Store in glass containers with minimal headspace</li>
              <li>Drink consistently throughout the day</li>
              <li>Start with pH 8.5 and gradually increase</li>
            </ul>
          </div>

          <div className="mt-16 bg-gradient-to-r from-purple-600 to-indigo-700 text-white rounded-2xl p-8 text-center">
            <h3 className="text-3xl font-bold mb-4">Experience the Power of H₂</h3>
            <p className="text-xl mb-6">Discover molecular hydrogen benefits with Kangen Water</p>
            <Link href="/#contact" className="inline-block bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
              Learn More
            </Link>
          </div>
        </div>
      </article>
      <Footer />
    </>
  );
}
