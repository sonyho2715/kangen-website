'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      category: "Product & Technology",
      questions: [
        {
          question: "What is Kangen Water?",
          answer: "Kangen Water is ionized alkaline water produced by Enagic's water ionization machines. It's rich in molecular hydrogen, has antioxidant properties, and helps restore your body to a more alkaline state. The term 'Kangen' means 'return to origin' in Japanese."
        },
        {
          question: "How does the K8 machine work?",
          answer: "The K8 machine uses 8 platinum-dipped titanium plates and advanced electrolysis technology to ionize and restructure your tap water. It produces 5 different types of water (pH 2.5 to 11.5) for various uses including drinking, cooking, beauty care, and cleaning."
        },
        {
          question: "What are the 5 types of water produced?",
          answer: "1) Strong Kangen Water (pH 11.5) for cleaning, 2) Kangen Water (pH 8.5-9.5) for drinking, 3) Clean Water (pH 7.0) for medications, 4) Beauty Water (pH 4.0-6.0) for skin care, and 5) Strong Acidic Water (pH 2.5) for sanitizing."
        },
        {
          question: "How long does the K8 machine last?",
          answer: "With proper maintenance, Kangen machines have an average lifespan of 30 years. The K8 comes with a 5-year warranty and features automatic cleaning technology to ensure longevity."
        }
      ]
    },
    {
      category: "Health & Benefits",
      questions: [
        {
          question: "Is Kangen Water safe to drink every day?",
          answer: "Yes, Kangen Water is safe for daily consumption. We recommend starting with pH 8.5 and gradually increasing to 9.0 or 9.5 over 2-3 weeks to allow your body to adjust. Always consult with your healthcare provider if you have specific health concerns."
        },
        {
          question: "What are the main health benefits?",
          answer: "Benefits include improved hydration (micro-clustered water molecules), increased energy, powerful antioxidant properties, detoxification support, immune system strengthening, and better pH balance for optimal digestive health."
        },
        {
          question: "Can I use Kangen Water if I'm taking medication?",
          answer: "For taking medication, use Clean Water (pH 7.0) which is neutral. Wait 30 minutes before or after medication before drinking alkaline Kangen Water. Always consult your doctor about your specific medications."
        },
        {
          question: "How much Kangen Water should I drink daily?",
          answer: "We recommend drinking half your body weight in ounces daily. For example, if you weigh 150 lbs, aim for 75 oz (about 2.2 liters) per day. Start gradually and increase intake over time."
        }
      ]
    },
    {
      category: "Purchase & Pricing",
      questions: [
        {
          question: "How much does the K8 machine cost?",
          answer: "The K8 machine is a premium investment in your health. Contact us for current pricing, financing options, and special promotions. We offer flexible payment plans to make it accessible for families."
        },
        {
          question: "Do you offer financing?",
          answer: "Yes! Enagic offers financing options to make your purchase more affordable. We can discuss payment plans that fit your budget during your free consultation."
        },
        {
          question: "Is there a warranty?",
          answer: "Absolutely! The K8 comes with a comprehensive 5-year warranty covering parts and labor. Enagic stands behind their products with exceptional customer service and support."
        },
        {
          question: "Can I try before I buy?",
          answer: "Yes! We offer free water samples and in-home demonstrations so you can experience Kangen Water firsthand. Contact us to schedule your free demo in the Honolulu area."
        }
      ]
    },
    {
      category: "Installation & Maintenance",
      questions: [
        {
          question: "Is installation difficult?",
          answer: "No! The K8 is designed for easy installation. It connects to your kitchen faucet with a diverter valve (included) and sits on your countertop. Most people can install it themselves in 10-15 minutes. We also provide installation support."
        },
        {
          question: "What maintenance is required?",
          answer: "The K8 features automatic cleaning after each use. Deep cleaning is recommended every 2-4 weeks using citric acid. The filter should be replaced annually depending on water quality and usage."
        },
        {
          question: "Do I need special plumbing?",
          answer: "No special plumbing is required. The K8 works with standard kitchen faucets. It includes adapters to fit most faucet types."
        },
        {
          question: "What if my water quality is poor?",
          answer: "If you have hard water or poor quality tap water, we may recommend a pre-filter system. We can test your water and provide the best solution for your specific situation."
        }
      ]
    },
    {
      category: "Business Opportunity",
      questions: [
        {
          question: "Can I become a distributor?",
          answer: "Yes! Enagic offers an exceptional business opportunity with a generous compensation plan. As a distributor, you can earn income by sharing Kangen Water with others. Contact Lee Meadows to learn about the business opportunity."
        },
        {
          question: "What kind of income can I earn?",
          answer: "Income potential varies based on your effort and commitment. Enagic's 8-point compensation plan rewards distributors at multiple levels. Many distributors create substantial full-time or part-time income. Results depend on individual performance."
        },
        {
          question: "Do I need experience in sales?",
          answer: "No prior experience is necessary! We provide comprehensive training, support materials, and mentorship. If you're passionate about health and helping others, you can succeed with Enagic."
        },
        {
          question: "What support do distributors receive?",
          answer: "Distributors receive training materials, marketing support, access to the Enagic community, and direct mentorship from experienced leaders like Lee Meadows. You're never alone in building your business."
        }
      ]
    }
  ];

  const toggleFAQ = (categoryIndex, questionIndex) => {
    const index = `${categoryIndex}-${questionIndex}`;
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-4 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Get answers to common questions about Kangen Water, the K8 machine, and our services
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-2xl font-bold text-kangen-blue mb-4 flex items-center">
                <span className="mr-3">
                  {categoryIndex === 0 ? '⚙️' : categoryIndex === 1 ? '💪' : categoryIndex === 2 ? '💰' : categoryIndex === 3 ? '🔧' : '💼'}
                </span>
                {category.category}
              </h3>

              <div className="space-y-3">
                {category.questions.map((faq, questionIndex) => {
                  const isOpen = openIndex === `${categoryIndex}-${questionIndex}`;

                  return (
                    <div
                      key={questionIndex}
                      className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200 hover:border-kangen-blue transition-colors"
                    >
                      <button
                        onClick={() => toggleFAQ(categoryIndex, questionIndex)}
                        className="w-full text-left p-5 flex justify-between items-center hover:bg-gray-100 transition-colors"
                      >
                        <span className="font-semibold text-gray-900 pr-4">
                          {faq.question}
                        </span>
                        <span className={`text-kangen-blue text-2xl flex-shrink-0 transform transition-transform ${isOpen ? 'rotate-45' : ''}`}>
                          +
                        </span>
                      </button>

                      {isOpen && (
                        <div className="px-5 pb-5 pt-2">
                          <p className="text-gray-700 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-16 bg-gradient-to-r from-kangen-blue to-kangen-darkblue text-white rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold mb-4">Still Have Questions?</h3>
          <p className="text-xl text-blue-100 mb-6">
            We're here to help! Contact Lee Meadows for personalized answers and a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:8085019878" className="bg-white text-kangen-blue px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-block">
              📞 Call: (808) 501-9878
            </a>
            <a href="/#contact" className="bg-kangen-accent text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-colors inline-block">
              ✉️ Send a Message
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
