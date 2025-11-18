'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function QuizClient() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 'primary_use',
      question: 'What is your primary interest in Kangen Water?',
      options: [
        { value: 'drinking', label: '💧 Daily Drinking & Hydration', description: 'Improve overall health and energy' },
        { value: 'cooking', label: '🍳 Cooking & Food Preparation', description: 'Enhance flavors and nutrition' },
        { value: 'beauty', label: '✨ Beauty & Skin Care', description: 'Natural skincare and hair care' },
        { value: 'cleaning', label: '🧹 Cleaning & Sanitizing', description: 'Chemical-free home cleaning' },
        { value: 'all', label: '🌟 All of the Above', description: 'Complete lifestyle transformation' }
      ]
    },
    {
      id: 'health_goals',
      question: 'What are your main health goals?',
      options: [
        { value: 'energy', label: '⚡ Increase Energy & Vitality', description: 'Feel more energized throughout the day' },
        { value: 'detox', label: '🔄 Detoxification & Cleansing', description: 'Support natural body detox' },
        { value: 'digestion', label: '🌿 Better Digestion', description: 'Improve digestive health' },
        { value: 'immunity', label: '🛡️ Boost Immune System', description: 'Strengthen immune response' },
        { value: 'antiaging', label: '💎 Anti-Aging & Wellness', description: 'Slow aging process naturally' }
      ]
    },
    {
      id: 'current_water',
      question: 'What water do you currently drink?',
      options: [
        { value: 'tap', label: '🚰 Tap Water', description: 'Straight from the faucet' },
        { value: 'filtered', label: '🔧 Filtered Tap Water', description: 'Using Brita or similar filter' },
        { value: 'bottled', label: '🍼 Bottled Water', description: 'Store-bought bottles' },
        { value: 'alkaline', label: '💎 Store-Bought Alkaline', description: 'Alkaline water from stores' },
        { value: 'other', label: '🤔 Other/Mixed', description: 'Varies or unsure' }
      ]
    },
    {
      id: 'family_size',
      question: 'How many people in your household?',
      options: [
        { value: '1', label: '1️⃣ Just Me', description: 'Solo user' },
        { value: '2', label: '2️⃣ 2 People', description: 'Couple or small household' },
        { value: '3-4', label: '👨‍👩‍👧 3-4 People', description: 'Small family' },
        { value: '5+', label: '👨‍👩‍👧‍👦 5+ People', description: 'Large family' },
        { value: 'business', label: '🏢 Business Use', description: 'Commercial or office' }
      ]
    },
    {
      id: 'budget_concern',
      question: 'What matters most to you?',
      options: [
        { value: 'quality', label: '⭐ Best Quality', description: 'Top-tier performance and features' },
        { value: 'value', label: '💰 Best Value', description: 'Long-term savings and ROI' },
        { value: 'environment', label: '🌍 Environmental Impact', description: 'Reduce plastic waste' },
        { value: 'health', label: '❤️ Health Benefits', description: 'Maximum health improvement' },
        { value: 'convenience', label: '⚡ Convenience', description: 'Easy to use and maintain' }
      ]
    }
  ];

  const handleAnswer = (questionId, value) => {
    setAnswers({ ...answers, [questionId]: value });

    if (currentQuestion < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
      }, 300);
    } else {
      setTimeout(() => {
        setShowResults(true);
      }, 300);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
  };

  const getRecommendations = () => {
    const recommendations = [];

    // Drinking Water Recommendation
    if (answers.primary_use === 'drinking' || answers.primary_use === 'all') {
      recommendations.push({
        type: 'Kangen Water (pH 8.5-9.5)',
        icon: '💧',
        color: 'from-blue-500 to-blue-600',
        usage: 'Daily Drinking',
        benefits: [
          'Optimal hydration with micro-clustered water molecules',
          'Rich in molecular hydrogen (antioxidants)',
          'Supports natural pH balance',
          'Increases energy and mental clarity',
          'Start with pH 8.5 and gradually increase to 9.5'
        ],
        howToUse: 'Drink throughout the day, especially first thing in the morning and before meals'
      });
    }

    // Cooking Recommendation
    if (answers.primary_use === 'cooking' || answers.primary_use === 'all') {
      recommendations.push({
        type: 'Kangen Water (pH 8.5-9.5) + Strong Kangen (pH 11.5)',
        icon: '🍳',
        color: 'from-orange-500 to-red-600',
        usage: 'Cooking & Food Prep',
        benefits: [
          'pH 8.5-9.5: Cook rice, pasta, soups for enhanced flavor',
          'pH 11.5: Wash vegetables to remove pesticides',
          'Make coffee and tea taste better with less bitterness',
          'Bring out natural colors in vegetables',
          'Tenderize meat and improve texture'
        ],
        howToUse: 'Use pH 11.5 for washing produce, pH 8.5-9.5 for cooking'
      });
    }

    // Beauty Water Recommendation
    if (answers.primary_use === 'beauty' || answers.primary_use === 'all' || answers.health_goals === 'antiaging') {
      recommendations.push({
        type: 'Beauty Water (pH 4.0-6.0)',
        icon: '✨',
        color: 'from-pink-500 to-purple-600',
        usage: 'Beauty & Skin Care',
        benefits: [
          'Natural facial toner that balances skin pH',
          'Gentle astringent effect tightens pores',
          'Softens and conditions hair (replaces conditioner)',
          'Soothes minor skin irritations',
          'Chemical-free beauty routine'
        ],
        howToUse: 'Use as final rinse after washing face or shampooing hair'
      });
    }

    // Cleaning Recommendation
    if (answers.primary_use === 'cleaning' || answers.primary_use === 'all') {
      recommendations.push({
        type: 'Strong Kangen (pH 11.5) + Strong Acidic (pH 2.5)',
        icon: '🧹',
        color: 'from-green-500 to-teal-600',
        usage: 'Cleaning & Sanitizing',
        benefits: [
          'pH 11.5: Removes grease, oil, and tough stains',
          'pH 2.5: Sanitizes and disinfects surfaces',
          'Replace chemical cleaners throughout your home',
          'Safe for food prep areas',
          'Eco-friendly and cost-effective'
        ],
        howToUse: 'Use pH 11.5 for cleaning, pH 2.5 for sanitizing'
      });
    }

    // If no specific recommendations yet, add general recommendation
    if (recommendations.length === 0) {
      recommendations.push({
        type: 'Kangen Water (pH 8.5-9.5)',
        icon: '💧',
        color: 'from-blue-500 to-blue-600',
        usage: 'Start Here - Daily Drinking',
        benefits: [
          'Perfect starting point for Kangen Water',
          'Optimal daily hydration',
          'Supports overall health and wellness',
          'Notice results within 2-3 weeks',
          'Gradually build healthy water habits'
        ],
        howToUse: 'Start with 1-2 glasses daily, increase to 8+ glasses over 2 weeks'
      });
    }

    return recommendations;
  };

  const getPersonalizedMessage = () => {
    let message = "Based on your answers, ";

    if (answers.family_size === '5+' || answers.family_size === 'business') {
      message += "the K8 machine is perfect for your high-volume needs. ";
    }

    if (answers.current_water === 'bottled') {
      const savings = answers.family_size === '5+' ? '$3,000-$5,000' :
                     answers.family_size === '3-4' ? '$1,500-$2,500' : '$800-$1,500';
      message += `You could save ${savings} annually by eliminating bottled water purchases! `;
    }

    if (answers.budget_concern === 'environment') {
      message += "You'll be making a huge environmental impact by eliminating plastic bottles. ";
    }

    if (answers.health_goals === 'energy') {
      message += "Most customers report increased energy within the first week of drinking Kangen Water!";
    }

    return message;
  };

  if (showResults) {
    const recommendations = getRecommendations();
    const personalizedMessage = getPersonalizedMessage();

    return (
      <>
        {/* Results Hero */}
        <div className="bg-gradient-to-r from-kangen-blue to-kangen-darkblue text-white py-20 mt-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">🎉 Your Personalized Results!</h1>
            <p className="text-2xl text-blue-100 mb-8">
              {personalizedMessage}
            </p>
          </div>
        </div>

        {/* Recommendations */}
        <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
              Your Recommended Water Types
            </h2>

            <div className="space-y-8">
              {recommendations.map((rec, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden">
                  <div className={`bg-gradient-to-r ${rec.color} text-white p-6`}>
                    <div className="flex items-center gap-4">
                      <span className="text-5xl">{rec.icon}</span>
                      <div>
                        <h3 className="text-2xl font-bold">{rec.type}</h3>
                        <p className="text-lg opacity-90">{rec.usage}</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-8">
                    <h4 className="text-xl font-bold mb-4 text-gray-900">Benefits:</h4>
                    <ul className="space-y-3 mb-6">
                      {rec.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="text-green-600 font-bold mt-1">✓</span>
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="bg-blue-50 rounded-lg p-4">
                      <h5 className="font-bold text-kangen-blue mb-2">How to Use:</h5>
                      <p className="text-gray-700">{rec.howToUse}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="mt-16 bg-gradient-to-r from-kangen-blue to-kangen-darkblue rounded-2xl p-12 text-center text-white">
              <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-xl text-blue-100 mb-8">
                Experience these benefits for yourself with a FREE water sample and consultation
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <Link href="/#contact" className="bg-white text-kangen-blue px-10 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-block text-lg">
                  Get Free Water Sample
                </Link>
                <a href="tel:8085019878" className="bg-kangen-accent text-white px-10 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-colors inline-block text-lg">
                  📞 Call: (808) 501-9878
                </a>
              </div>
              <button onClick={restartQuiz} className="text-blue-200 hover:text-white underline">
                ← Retake Quiz
              </button>
            </div>
          </div>
        </section>
      </>
    );
  }

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <>
      {/* Quiz Hero */}
      <div className="bg-gradient-to-r from-kangen-blue to-kangen-darkblue text-white py-20 mt-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">🔍 Find Your Perfect Water Type</h1>
          <p className="text-2xl text-blue-100 mb-8">
            Answer 5 quick questions to get personalized Kangen Water recommendations
          </p>

          {/* Progress Bar */}
          <div className="max-w-md mx-auto">
            <div className="bg-blue-900 bg-opacity-50 rounded-full h-3 mb-2">
              <div
                className="bg-kangen-accent h-3 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="text-sm text-blue-200">
              Question {currentQuestion + 1} of {questions.length}
            </p>
          </div>
        </div>
      </div>

      {/* Question */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-white min-h-screen">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {question.question}
            </h2>

            <div className="grid gap-4">
              {question.options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleAnswer(question.id, option.value)}
                  className="bg-gradient-to-r from-gray-50 to-blue-50 hover:from-kangen-blue hover:to-kangen-darkblue border-2 border-gray-200 hover:border-kangen-blue rounded-xl p-6 text-left transition-all duration-300 hover:shadow-xl hover:scale-102 group"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-3xl group-hover:scale-110 transition-transform">
                      {option.label.split(' ')[0]}
                    </span>
                    <div className="flex-1">
                      <p className="text-lg font-bold text-gray-900 group-hover:text-white mb-1">
                        {option.label.split(' ').slice(1).join(' ')}
                      </p>
                      <p className="text-sm text-gray-600 group-hover:text-blue-100">
                        {option.description}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Back Button */}
            {currentQuestion > 0 && (
              <div className="mt-8 text-center">
                <button
                  onClick={() => setCurrentQuestion(currentQuestion - 1)}
                  className="text-kangen-blue hover:text-kangen-darkblue font-semibold"
                >
                  ← Previous Question
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }
      `}</style>
    </>
  );
}
