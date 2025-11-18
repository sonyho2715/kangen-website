import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Understanding pH Levels: Why Alkaline Water Matters | Blessed & Beautiful',
  description: 'Learn about pH balance, how it affects your body, and why alkaline water is essential for optimal health.',
};

export default function UnderstandingPHLevels() {
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
              <span className="bg-kangen-blue text-white px-3 py-1 rounded-full text-sm font-semibold">Education</span>
              <span className="text-gray-500">December 10, 2024 • 7 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Understanding pH Levels: Why Alkaline Water Matters
            </h1>
          </header>

          <img src="https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=1200&h=600&fit=crop" alt="pH scale" className="w-full rounded-2xl mb-12" />

          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-4">What is pH?</h2>
            <p className="text-gray-700 mb-6">
              pH stands for "potential of hydrogen" and measures how acidic or alkaline a substance is on a scale of 0-14. A pH of 7 is neutral, below 7 is acidic, and above 7 is alkaline. Your body works constantly to maintain a slightly alkaline pH of around 7.365 in your blood.
            </p>

            <div className="bg-gradient-to-r from-red-100 via-yellow-100 via-green-100 to-blue-100 p-8 rounded-xl mb-8">
              <h3 className="font-bold text-xl mb-4">The pH Scale</h3>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div><strong className="text-red-600">0-6</strong><br/>Acidic</div>
                <div><strong className="text-green-600">7</strong><br/>Neutral</div>
                <div><strong className="text-blue-600">8-14</strong><br/>Alkaline</div>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-4 mt-12">Why pH Balance Matters</h2>
            <p className="text-gray-700 mb-6">
              Your body's pH balance affects virtually every aspect of your health:
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-700">
              <li><strong>Cellular Function:</strong> Cells operate optimally in a slightly alkaline environment</li>
              <li><strong>Enzyme Activity:</strong> Many enzymes require specific pH levels to function</li>
              <li><strong>Immune System:</strong> Proper pH supports immune cell function</li>
              <li><strong>Bone Health:</strong> The body may leach calcium from bones to neutralize excess acidity</li>
              <li><strong>Energy Production:</strong> Cellular energy (ATP) production is pH-dependent</li>
            </ul>

            <h2 className="text-3xl font-bold mb-4 mt-12">Common pH Levels</h2>
            <div className="bg-gray-50 p-6 rounded-xl mb-8">
              <ul className="space-y-3 text-gray-700">
                <li><strong>Stomach Acid:</strong> 1.5-3.5 pH (highly acidic for digestion)</li>
                <li><strong>Soda:</strong> 2.5 pH (very acidic)</li>
                <li><strong>Coffee:</strong> 5.0 pH (acidic)</li>
                <li><strong>Pure Water:</strong> 7.0 pH (neutral)</li>
                <li><strong>Blood:</strong> 7.365 pH (slightly alkaline)</li>
                <li><strong>Kangen Water:</strong> 8.5-9.5 pH (alkaline)</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold mb-4 mt-12">The Modern Diet Problem</h2>
            <p className="text-gray-700 mb-6">
              Most modern diets are highly acidic due to:
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-700">
              <li>Processed foods and refined sugars</li>
              <li>Excessive meat and dairy consumption</li>
              <li>Soft drinks and energy drinks</li>
              <li>Coffee and alcohol</li>
              <li>Stress and lack of sleep (increases acidity)</li>
            </ul>

            <h2 className="text-3xl font-bold mb-4 mt-12">How Kangen Water Helps</h2>
            <p className="text-gray-700 mb-6">
              Kangen Water provides alkaline minerals that help neutralize acidic waste in your body:
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-700">
              <li>Helps maintain optimal pH balance</li>
              <li>Reduces the body's need to leach minerals from bones</li>
              <li>Supports cellular detoxification</li>
              <li>Provides easily absorbed alkaline minerals</li>
              <li>Helps buffer dietary acids</li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-kangen-blue p-6 mb-8">
              <p className="text-gray-700 italic">
                <strong>Important Note:</strong> Kangen Water doesn't change your blood pH (which is tightly regulated), but it helps reduce the strain on your body's buffering systems and supports overall pH balance at the cellular level.
              </p>
            </div>

            <h2 className="text-3xl font-bold mb-4 mt-12">Getting Started with Alkaline Water</h2>
            <ol className="list-decimal pl-6 mb-8 space-y-2 text-gray-700">
              <li>Start with pH 8.5 for the first 1-2 weeks</li>
              <li>Gradually increase to pH 9.0</li>
              <li>Eventually move to pH 9.5 for daily drinking</li>
              <li>Listen to your body and adjust as needed</li>
            </ol>
          </div>

          <div className="mt-16 bg-gradient-to-r from-kangen-blue to-kangen-darkblue text-white rounded-2xl p-8 text-center">
            <h3 className="text-3xl font-bold mb-4">Test Your Water's pH</h3>
            <p className="text-xl text-blue-100 mb-6">
              See the difference Kangen Water makes with a free pH demonstration
            </p>
            <Link href="/#contact" className="inline-block bg-white text-kangen-blue px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Schedule Your Demo
            </Link>
          </div>
        </div>
      </article>
      <Footer />
    </>
  );
}
