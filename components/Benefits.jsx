export default function Benefits() {
  const benefits = [
    {
      icon: '💪',
      title: 'Improved Hydration',
      description: 'Micro-clustered water molecules penetrate cells more effectively than regular water.',
    },
    {
      icon: '⚡',
      title: 'Increased Energy',
      description: 'Experience sustained energy levels throughout your day with hydrogen-rich water.',
    },
    {
      icon: '🧬',
      title: 'Powerful Antioxidants',
      description: 'Molecular hydrogen acts as an efficient antioxidant to reduce free radicals.',
    },
    {
      icon: '🫧',
      title: 'Detoxification',
      description: 'Flush toxins from your body and support natural detoxification processes.',
    },
    {
      icon: '🛡️',
      title: 'Immune Support',
      description: 'Strengthen your immune system with mineral-rich alkaline water.',
    },
    {
      icon: '🧘',
      title: 'Better Digestion',
      description: 'Improved pH balance helps optimize digestive health and nutrient absorption.',
    },
  ];

  return (
    <section
      id="benefits"
      className="py-20 px-4 relative bg-kangen-light"
      style={{
        backgroundImage: `linear-gradient(rgba(232, 244, 255, 0.95), rgba(232, 244, 255, 0.95)), url('/images/backgrounds/water-background-hd-wallpaper-14611 (1).jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container-custom">
        <h2 className="section-title text-center">Health Benefits of Kangen Water</h2>
        <p className="section-subtitle text-center max-w-3xl mx-auto">
          Kangen means "return to origin" in Japanese. Our ionized alkaline water helps restore your body to its naturally balanced state.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition">
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Key Stats */}
        <div className="mt-16 bg-white rounded-xl p-12 shadow-lg">
          <h3 className="text-2xl font-bold mb-8 text-center">Why Kangen Water?</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-kangen-blue mb-3 flex items-center">
                <span className="text-2xl mr-3">🔬</span> Science-Backed
              </h4>
              <p className="text-gray-700">
                Over 50 years of research and development from Japan's leading water ionization experts at Enagic.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-kangen-blue mb-3 flex items-center">
                <span className="text-2xl mr-3">♻️</span> Eco-Friendly
              </h4>
              <p className="text-gray-700">
                Reduce plastic waste by eliminating bottled water. One machine replaces thousands of bottles.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-kangen-blue mb-3 flex items-center">
                <span className="text-2xl mr-3">💰</span> Cost-Effective
              </h4>
              <p className="text-gray-700">
                Save money on bottled water and cleaning products. Kangen water does it all.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-kangen-blue mb-3 flex items-center">
                <span className="text-2xl mr-3">👨‍⚕️</span> Doctor Recommended
              </h4>
              <p className="text-gray-700">
                Used in Japanese hospitals and wellness centers for over five decades.
              </p>
            </div>
          </div>
        </div>

        {/* Lifestyle Gallery */}
        <div className="mt-16 grid md:grid-cols-4 gap-6">
          <div className="relative overflow-hidden rounded-xl shadow-lg group">
            <img
              src="https://images.unsplash.com/photo-1571770095004-6b61b1cf308a?w=400&h=300&fit=crop"
              alt="Woman drinking healthy water"
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
              <p className="text-white font-semibold">Improved Hydration</p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-xl shadow-lg group">
            <img
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop"
              alt="Active healthy lifestyle"
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
              <p className="text-white font-semibold">Increased Energy</p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-xl shadow-lg group">
            <img
              src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=300&fit=crop"
              alt="Fresh healthy food and water"
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
              <p className="text-white font-semibold">Better Nutrition</p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-xl shadow-lg group">
            <img
              src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=300&fit=crop"
              alt="Yoga and wellness"
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
              <p className="text-white font-semibold">Overall Wellness</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
