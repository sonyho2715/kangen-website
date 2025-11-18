'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function WaterTypes() {
  const [selectedWater, setSelectedWater] = useState('kangen');

  const waterTypes = {
    strongKangen: {
      name: 'Strong Kangen Water',
      ph: '11.5 pH',
      color: 'from-purple-600 to-indigo-600',
      icon: '💪',
      description: 'Strong alkaline water for cleaning and food preparation',
      uses: [
        'Remove pesticides from fruits and vegetables',
        'Clean cutting boards and dishcloths',
        'Remove stubborn toilet bowl stains',
        'Clean grease and oil from surfaces',
        'Remove coffee and soy sauce stains',
        'Pre-soak vegetables to preserve freshness',
        'Whiten and brighten laundry',
        'Clean tile grout and bathroom surfaces'
      ],
      tips: [
        'Not for drinking',
        'Excellent natural cleaning agent',
        'Use for soaking and washing produce',
        'Great for removing stains without chemicals'
      ],
      features: [
        'High alkalinity',
        'Strong cleaning power',
        'Natural and chemical-free',
        'Environmentally friendly'
      ]
    },
    kangen: {
      name: 'Kangen Water',
      ph: '8.5 - 9.5 pH',
      color: 'from-blue-600 to-cyan-600',
      icon: '💧',
      description: 'Healthy drinking water - alkaline, antioxidant-rich, and ionized',
      uses: [
        'Daily drinking water for the whole family',
        'Cooking rice - makes it fluffier and better tasting',
        'Making coffee and tea - enhances flavor',
        'Cooking soups and stews',
        'Preparing infant formula (9.0 pH or lower)',
        'Watering plants - promotes healthy growth',
        'Making ice cubes',
        'Cooking pasta and vegetables'
      ],
      tips: [
        'Start with 8.5 pH and gradually increase',
        'Store in glass containers',
        'Best consumed fresh',
        'Perfect for daily hydration'
      ],
      features: [
        'Rich in minerals',
        'Antioxidant properties',
        'Smaller water clusters for better absorption',
        'Helps neutralize acidic waste in the body'
      ]
    },
    clean: {
      name: 'Clean Water',
      ph: '7.0 pH',
      color: 'from-gray-500 to-slate-600',
      icon: '🚰',
      description: 'Neutral pH water - free of chlorine, rust, and cloudiness',
      uses: [
        'Preparing baby food and formula',
        'Taking medications',
        'Drinking for those new to Kangen water',
        'Sensitive stomachs',
        'Preparing food for pets',
        'General cooking use',
        'Making beverages when neutral pH is preferred'
      ],
      tips: [
        'Clean, filtered water',
        'Chlorine-free',
        'Safe for everyone',
        'Good transition water'
      ],
      features: [
        'Neutral pH balance',
        'Filtered and clean',
        'Free of impurities',
        'Gentle on sensitive systems'
      ]
    },
    beauty: {
      name: 'Beauty Water',
      ph: '4.0 - 6.0 pH',
      color: 'from-pink-500 to-rose-600',
      icon: '✨',
      description: 'Acidic water for gentle cleaning and beauty care',
      uses: [
        'Facial wash and skin toner',
        'Hair rinse for shine and smoothness',
        'Shaving - get a closer shave',
        'Pet care - bathing and grooming',
        'Cleaning eyeglasses',
        'Polishing mirrors and glass',
        'Cleaning hardwood floors',
        'Gentle cleaning for sensitive surfaces'
      ],
      tips: [
        'Natural astringent properties',
        'Great for skin and hair',
        'Chemical-free beauty routine',
        'Use as a toner after washing'
      ],
      features: [
        'Mildly acidic',
        'Gentle on skin',
        'Conditions hair naturally',
        'Enhances natural beauty'
      ]
    },
    strongAcidic: {
      name: 'Strong Acidic Water',
      ph: '2.5 pH',
      color: 'from-red-600 to-orange-600',
      icon: '🔬',
      description: 'Strong acidic water for sanitizing and disinfecting',
      uses: [
        'Sanitize kitchen utensils and cutting boards',
        'Disinfect countertops',
        'Clean and sanitize bathroom surfaces',
        'Sterilize baby items',
        'Clean minor wounds and burns (approved by medical professionals)',
        'Sanitize hands and skin',
        'Clean dental appliances',
        'Disinfect pet areas'
      ],
      tips: [
        'Not for drinking',
        'Powerful disinfectant',
        'Chemical-free sanitizer',
        'Store in dark containers'
      ],
      features: [
        'Strong sanitizing power',
        'Kills bacteria and pathogens',
        'Natural disinfectant',
        'Eco-friendly cleaning solution'
      ]
    }
  };

  const waterData = waterTypes[selectedWater];

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">5 Types of Kangen Water</h1>
          <p className="text-2xl text-blue-100 max-w-3xl mx-auto">
            One machine. Five types of water. Endless possibilities for health, beauty, and cleaning.
          </p>
        </div>
      </div>

      {/* Water Type Selector */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {Object.entries(waterTypes).map(([key, water]) => (
              <button
                key={key}
                onClick={() => setSelectedWater(key)}
                className={`p-6 rounded-lg transition-all transform hover:scale-105 ${
                  selectedWater === key
                    ? `bg-gradient-to-r ${water.color} text-white shadow-xl`
                    : 'bg-white text-gray-700 hover:shadow-lg'
                }`}
              >
                <div className="text-4xl mb-2">{water.icon}</div>
                <div className="font-bold text-sm mb-1">{water.name}</div>
                <div className="text-xs opacity-90">{water.ph}</div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Detailed Water Info */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`bg-gradient-to-r ${waterData.color} text-white rounded-2xl p-8 mb-12 shadow-2xl`}>
            <div className="flex items-center mb-4">
              <div className="text-6xl mr-4">{waterData.icon}</div>
              <div>
                <h2 className="text-4xl font-bold">{waterData.name}</h2>
                <p className="text-2xl opacity-90">{waterData.ph}</p>
              </div>
            </div>
            <p className="text-xl">{waterData.description}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Uses */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-blue-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-3xl mr-3">🎯</span>
                Primary Uses
              </h3>
              <ul className="space-y-3">
                {waterData.uses.map((use, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">✓</span>
                    <span className="text-gray-700">{use}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Features */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-green-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-3xl mr-3">⭐</span>
                Key Features
              </h3>
              <ul className="space-y-3">
                {waterData.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-600 mr-3 mt-1">●</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tips */}
          <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl shadow-lg p-8 border-l-4 border-yellow-500">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="text-3xl mr-3">💡</span>
              Pro Tips
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {waterData.tips.map((tip, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-yellow-600 mr-3 mt-1">▸</span>
                  <span className="text-gray-700">{tip}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* pH Scale Visual */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">pH Scale Overview</h2>
          <div className="bg-white rounded-xl shadow-xl p-8">
            <div className="space-y-4">
              {Object.entries(waterTypes).reverse().map(([key, water]) => (
                <div
                  key={key}
                  className={`flex items-center p-4 rounded-lg cursor-pointer transition-all ${
                    selectedWater === key ? 'ring-4 ring-blue-400' : 'hover:bg-gray-50'
                  }`}
                  onClick={() => setSelectedWater(key)}
                >
                  <div className={`bg-gradient-to-r ${water.color} text-white px-6 py-3 rounded-lg font-bold min-w-[120px] text-center`}>
                    {water.ph}
                  </div>
                  <div className="ml-6 flex-1">
                    <div className="font-bold text-gray-900 flex items-center">
                      <span className="text-2xl mr-2">{water.icon}</span>
                      {water.name}
                    </div>
                    <div className="text-sm text-gray-600">{water.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Experience All 5 Types of Water</h2>
          <p className="text-xl text-blue-100 mb-8">
            One Kangen Water machine gives you access to all five types of water for drinking, beauty, cooking, cleaning, and sanitizing.
          </p>
          <a
            href="/#contact"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Schedule Your Free Demo
          </a>
        </div>
      </div>

      <Footer />
    </>
  );
}
