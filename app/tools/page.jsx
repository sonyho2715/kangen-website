'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Tools() {
  const [activeTool, setActiveTool] = useState('ph');

  // pH Comparison Tool State
  const [selectedBeverage, setSelectedBeverage] = useState('soda');

  // Cost Calculator State
  const [bottlesPerWeek, setBottlesPerWeek] = useState(10);
  const [pricePerBottle, setPricePerBottle] = useState(2);

  // Usage Guide State
  const [waterType, setWaterType] = useState('kangen');

  const beverages = {
    soda: { name: 'Soda', ph: 2.5, color: 'bg-red-500' },
    coffee: { name: 'Coffee', ph: 5.0, color: 'bg-yellow-700' },
    beer: { name: 'Beer', ph: 4.5, color: 'bg-yellow-600' },
    tapWater: { name: 'Tap Water', ph: 7.0, color: 'bg-gray-400' },
    milk: { name: 'Milk', ph: 6.5, color: 'bg-blue-200' },
    kangenWater: { name: 'Kangen Water', ph: 9.5, color: 'bg-blue-600' }
  };

  const usageGuides = {
    strongKangen: {
      name: 'Strong Kangen Water (11.5 pH)',
      color: 'from-purple-600 to-indigo-600',
      morning: ['Clean kitchen surfaces', 'Wash fruits and vegetables', 'Pre-soak dishes'],
      afternoon: ['Remove stains from clothing', 'Clean bathroom surfaces', 'Sanitize cutting boards'],
      evening: ['Deep clean floors', 'Remove oil and grease', 'Freshen dishcloths']
    },
    kangen: {
      name: 'Kangen Water (8.5-9.5 pH)',
      color: 'from-blue-600 to-cyan-600',
      morning: ['Drink 1-2 glasses upon waking', 'Make your morning coffee or tea', 'Prepare breakfast'],
      afternoon: ['Stay hydrated throughout the day', 'Cook lunch with Kangen water', 'Water your plants'],
      evening: ['Cook dinner', 'Drink before and after exercise', 'Prepare evening tea']
    },
    clean: {
      name: 'Clean Water (7.0 pH)',
      color: 'from-gray-500 to-slate-600',
      morning: ['Take medications', 'Prepare baby formula', 'Gentle drinking water'],
      afternoon: ['Give to pets', 'Prepare sensitive recipes', 'Transition drinking water'],
      evening: ['Take evening medications', 'Prepare baby food', 'Gentle hydration']
    },
    beauty: {
      name: 'Beauty Water (4.0-6.0 pH)',
      color: 'from-pink-500 to-rose-600',
      morning: ['Wash your face', 'Rinse hair after shower', 'Use as toner'],
      afternoon: ['Refresh your face', 'Clean eyeglasses', 'Polish mirrors'],
      evening: ['Evening skincare routine', 'Hair treatment', 'Facial toner before bed']
    },
    strongAcidic: {
      name: 'Strong Acidic Water (2.5 pH)',
      color: 'from-red-600 to-orange-600',
      morning: ['Sanitize kitchen counters', 'Disinfect cutting boards', 'Clean hands thoroughly'],
      afternoon: ['Sanitize bathroom', 'Disinfect high-touch surfaces', 'Clean toothbrushes'],
      evening: ['Disinfect kitchen after cooking', 'Sanitize baby items', 'Clean pet areas']
    }
  };

  // Calculate savings
  const yearlyBottleCost = bottlesPerWeek * pricePerBottle * 52;
  const kangenMachineCost = 4980; // Approximate K8 cost
  const yearlyElectricityCost = 150; // Approximate yearly electricity
  const yearlySavings = yearlyBottleCost - yearlyElectricityCost;
  const paybackPeriod = (kangenMachineCost / yearlySavings).toFixed(1);
  const fiveYearSavings = (yearlySavings * 5) - kangenMachineCost;

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Interactive Kangen Water Tools</h1>
          <p className="text-2xl text-blue-100 max-w-3xl mx-auto">
            Discover how Kangen Water can transform your health and save you money
          </p>
        </div>
      </div>

      {/* Tool Selector */}
      <div className="bg-gray-50 py-8 sticky top-0 z-10 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => setActiveTool('ph')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTool === 'ph'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              📊 pH Comparison
            </button>
            <button
              onClick={() => setActiveTool('calculator')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTool === 'calculator'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              💰 Cost Savings
            </button>
            <button
              onClick={() => setActiveTool('usage')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTool === 'usage'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              📅 Daily Usage Guide
            </button>
          </div>
        </div>
      </div>

      {/* pH Comparison Tool */}
      {activeTool === 'ph' && (
        <div className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">pH Level Comparison</h2>
              <p className="text-xl text-gray-600">
                See how Kangen Water compares to common beverages
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {Object.entries(beverages).map(([key, bev]) => (
                <button
                  key={key}
                  onClick={() => setSelectedBeverage(key)}
                  className={`p-6 rounded-xl transition-all transform hover:scale-105 ${
                    selectedBeverage === key
                      ? `${bev.color} text-white shadow-2xl scale-105`
                      : 'bg-gray-100 text-gray-700 hover:shadow-lg'
                  }`}
                >
                  <div className="text-3xl font-bold mb-2">{bev.ph} pH</div>
                  <div className="text-lg font-semibold">{bev.name}</div>
                </button>
              ))}
            </div>

            {/* pH Scale Visual */}
            <div className="bg-gradient-to-r from-gray-100 to-gray-50 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">pH Scale (0-14)</h3>
              <div className="relative h-20 bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 to-blue-600 rounded-lg mb-8">
                <div className="absolute inset-0 flex items-center justify-between px-4 text-white font-bold">
                  <span>0 - Acidic</span>
                  <span>7 - Neutral</span>
                  <span>14 - Alkaline</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg shadow">
                  <h4 className="font-bold text-lg mb-2">
                    {beverages[selectedBeverage].name} - {beverages[selectedBeverage].ph} pH
                  </h4>
                  {beverages[selectedBeverage].ph < 7 && (
                    <p className="text-gray-700">
                      ⚠️ Acidic beverages can contribute to acidity in your body. Regular consumption may affect your overall pH balance.
                    </p>
                  )}
                  {beverages[selectedBeverage].ph === 7 && (
                    <p className="text-gray-700">
                      ⚖️ Neutral pH - This water is neither acidic nor alkaline.
                    </p>
                  )}
                  {beverages[selectedBeverage].ph > 7 && (
                    <p className="text-gray-700">
                      ✅ Alkaline water helps neutralize acid in your body and may support better health and hydration.
                    </p>
                  )}
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-2 text-blue-900">Why pH Matters</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ Your body works to maintain a pH around 7.4</li>
                    <li>✓ Acidic foods and drinks can stress your body's pH balance</li>
                    <li>✓ Alkaline water may help neutralize acidity</li>
                    <li>✓ Better pH balance supports overall wellness</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cost Savings Calculator */}
      {activeTool === 'calculator' && (
        <div className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Cost Savings Calculator</h2>
              <p className="text-xl text-gray-600">
                See how much you can save by switching to Kangen Water
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Current Bottled Water Spending</h3>

              <div className="space-y-6 mb-8">
                <div>
                  <label className="block text-lg font-semibold text-gray-700 mb-3">
                    Bottles per week: {bottlesPerWeek}
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="50"
                    value={bottlesPerWeek}
                    onChange={(e) => setBottlesPerWeek(Number(e.target.value))}
                    className="w-full h-3 bg-blue-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-sm text-gray-600 mt-2">
                    <span>1/week</span>
                    <span>50/week</span>
                  </div>
                </div>

                <div>
                  <label className="block text-lg font-semibold text-gray-700 mb-3">
                    Price per bottle: ${pricePerBottle.toFixed(2)}
                  </label>
                  <input
                    type="range"
                    min="0.5"
                    max="5"
                    step="0.25"
                    value={pricePerBottle}
                    onChange={(e) => setPricePerBottle(Number(e.target.value))}
                    className="w-full h-3 bg-blue-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-sm text-gray-600 mt-2">
                    <span>$0.50</span>
                    <span>$5.00</span>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
                  <div className="text-red-600 text-sm font-semibold mb-2">BOTTLED WATER COST</div>
                  <div className="text-4xl font-bold text-red-700 mb-2">
                    ${yearlyBottleCost.toLocaleString()}
                  </div>
                  <div className="text-red-600">per year</div>
                </div>

                <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6">
                  <div className="text-green-600 text-sm font-semibold mb-2">KANGEN WATER COST</div>
                  <div className="text-4xl font-bold text-green-700 mb-2">
                    ${yearlyElectricityCost.toLocaleString()}
                  </div>
                  <div className="text-green-600">per year (electricity)</div>
                </div>

                <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
                  <div className="text-blue-600 text-sm font-semibold mb-2">YEARLY SAVINGS</div>
                  <div className="text-4xl font-bold text-blue-700 mb-2">
                    ${yearlySavings.toLocaleString()}
                  </div>
                  <div className="text-blue-600">saved every year</div>
                </div>

                <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-6">
                  <div className="text-purple-600 text-sm font-semibold mb-2">PAYBACK PERIOD</div>
                  <div className="text-4xl font-bold text-purple-700 mb-2">
                    {paybackPeriod} years
                  </div>
                  <div className="text-purple-600">to recover investment</div>
                </div>
              </div>

              <div className="mt-8 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-xl p-8 text-center">
                <div className="text-2xl font-bold mb-2">5-Year Savings</div>
                <div className="text-5xl font-bold mb-4">
                  ${fiveYearSavings > 0 ? fiveYearSavings.toLocaleString() : '0'}
                </div>
                <p className="text-lg opacity-90">
                  {fiveYearSavings > 0
                    ? 'Plus unlimited clean, healthy water for your whole family!'
                    : 'Increase your weekly bottle usage to see savings!'}
                </p>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">
              <h4 className="font-bold text-lg mb-2 text-yellow-900">Additional Benefits Beyond Savings</h4>
              <ul className="space-y-2 text-gray-700">
                <li>🌍 Eliminate plastic bottle waste</li>
                <li>💪 Better hydration and health</li>
                <li>🏠 5 types of water for various uses</li>
                <li>✨ Beauty water for skin and hair</li>
                <li>🧼 Chemical-free cleaning solutions</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Daily Usage Guide */}
      {activeTool === 'usage' && (
        <div className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Daily Water Usage Guide</h2>
              <p className="text-xl text-gray-600">
                Learn when and how to use each type of Kangen Water throughout your day
              </p>
            </div>

            <div className="grid md:grid-cols-5 gap-4 mb-12">
              {Object.entries(usageGuides).map(([key, guide]) => (
                <button
                  key={key}
                  onClick={() => setWaterType(key)}
                  className={`p-4 rounded-lg transition-all transform hover:scale-105 ${
                    waterType === key
                      ? `bg-gradient-to-r ${guide.color} text-white shadow-xl scale-105`
                      : 'bg-gray-100 text-gray-700 hover:shadow-lg'
                  }`}
                >
                  <div className="text-sm font-semibold text-center">
                    {guide.name.split(' ')[0]} {guide.name.split(' ')[1]}
                  </div>
                </button>
              ))}
            </div>

            <div className={`bg-gradient-to-r ${usageGuides[waterType].color} text-white rounded-2xl p-8 mb-8 shadow-2xl`}>
              <h3 className="text-3xl font-bold mb-2">{usageGuides[waterType].name}</h3>
              <p className="text-lg opacity-90">Daily usage schedule and recommendations</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-xl p-6 border-t-4 border-yellow-400">
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-3">🌅</span>
                  <h4 className="text-2xl font-bold text-gray-900">Morning</h4>
                </div>
                <ul className="space-y-3">
                  {usageGuides[waterType].morning.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-xl p-6 border-t-4 border-orange-400">
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-3">☀️</span>
                  <h4 className="text-2xl font-bold text-gray-900">Afternoon</h4>
                </div>
                <ul className="space-y-3">
                  {usageGuides[waterType].afternoon.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-xl p-6 border-t-4 border-indigo-400">
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-3">🌙</span>
                  <h4 className="text-2xl font-bold text-gray-900">Evening</h4>
                </div>
                <ul className="space-y-3">
                  {usageGuides[waterType].evening.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-12 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-8 border-l-4 border-blue-600">
              <h4 className="font-bold text-2xl mb-4 text-gray-900">💡 Pro Tip</h4>
              <p className="text-gray-700 text-lg">
                Create a daily routine using different types of Kangen Water. Start with drinking Kangen Water in the morning, use Beauty Water for your skincare routine, and Strong Acidic Water for cleaning. This maximizes the benefits of your Kangen Water system!
              </p>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience Kangen Water?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Schedule a free demonstration and see the difference for yourself
          </p>
          <a
            href="/#contact"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Get Your Free Demo
          </a>
        </div>
      </div>

      <Footer />
    </>
  );
}
