import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Resources & Blog - Blessed & Beautiful Kangen Water',
  description: 'Educational resources, articles, and guides about Kangen Water, alkaline water benefits, and healthy living',
};

export default function Resources() {
  const blogPosts = [
    {
      title: "10 Amazing Benefits of Drinking Kangen Water Daily",
      category: "Health & Wellness",
      excerpt: "Discover how switching to Kangen Water can transform your health, boost energy levels, and support your body's natural balance.",
      date: "December 15, 2024",
      readTime: "5 min read",
      icon: "💧",
      slug: "10-benefits-kangen-water"
    },
    {
      title: "Understanding pH Levels: Why Alkaline Water Matters",
      category: "Education",
      excerpt: "Learn about pH balance, how it affects your body, and why alkaline water is essential for optimal health.",
      date: "December 10, 2024",
      readTime: "7 min read",
      icon: "🔬",
      slug: "understanding-ph-levels"
    },
    {
      title: "Kangen Water vs Bottled Water: The Ultimate Comparison",
      category: "Comparison",
      excerpt: "See how Kangen Water stacks up against regular bottled water in quality, cost, and environmental impact.",
      date: "December 5, 2024",
      readTime: "6 min read",
      icon: "⚖️",
      slug: "kangen-vs-bottled-water"
    },
    {
      title: "5 Ways to Use Beauty Water for Radiant Skin",
      category: "Beauty & Skincare",
      excerpt: "Unlock the beauty secrets of acidic water for healthier skin, shinier hair, and natural glow.",
      date: "November 28, 2024",
      readTime: "4 min read",
      icon: "✨",
      slug: "beauty-water-skin-care"
    },
    {
      title: "How to Clean Your Home Naturally with Strong Kangen Water",
      category: "Home & Lifestyle",
      excerpt: "Ditch harmful chemicals! Learn how to use Strong Kangen Water as a powerful, eco-friendly cleaning solution.",
      date: "November 20, 2024",
      readTime: "5 min read",
      icon: "🧼",
      slug: "natural-cleaning-kangen-water"
    },
    {
      title: "The Science Behind Molecular Hydrogen in Kangen Water",
      category: "Science",
      excerpt: "Explore the scientific research on molecular hydrogen and its powerful antioxidant properties.",
      date: "November 15, 2024",
      readTime: "8 min read",
      icon: "🧬",
      slug: "molecular-hydrogen-science"
    },
    {
      title: "Kangen Water for Athletes: Hydration and Performance",
      category: "Fitness",
      excerpt: "Discover why professional athletes choose Kangen Water for superior hydration and faster recovery.",
      date: "November 10, 2024",
      readTime: "6 min read",
      icon: "🏃",
      slug: "kangen-water-athletes"
    },
    {
      title: "Cooking with Kangen Water: Recipes and Tips",
      category: "Food & Recipes",
      excerpt: "Enhance your cooking with different types of Kangen Water. Learn which water to use for different dishes.",
      date: "November 5, 2024",
      readTime: "7 min read",
      icon: "👨‍🍳",
      slug: "cooking-with-kangen-water"
    }
  ];

  const resources = [
    {
      title: "Kangen Water Beginner's Guide",
      description: "Complete guide for new users covering setup, daily usage, and maintenance",
      type: "PDF Guide",
      icon: "📖"
    },
    {
      title: "K8 Machine User Manual",
      description: "Official user manual with detailed instructions and specifications",
      type: "PDF Manual",
      icon: "📋"
    },
    {
      title: "pH Level Chart & Reference",
      description: "Handy chart showing pH levels and recommended uses for each water type",
      type: "Printable Chart",
      icon: "📊"
    },
    {
      title: "Health Benefits Research",
      description: "Collection of scientific studies on alkaline water and health benefits",
      type: "Research Paper",
      icon: "🔬"
    },
    {
      title: "Kangen Water Recipe Book",
      description: "50+ recipes optimized for cooking with Kangen Water",
      type: "Recipe Book",
      icon: "🍳"
    },
    {
      title: "Cleaning Guide with Strong Kangen Water",
      description: "Room-by-room cleaning guide using chemical-free Kangen Water",
      type: "Guide",
      icon: "🧹"
    }
  ];

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-kangen-blue to-kangen-darkblue text-white py-20 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Resources & Learning Center</h1>
          <p className="text-2xl text-blue-100 max-w-3xl mx-auto">
            Everything you need to know about Kangen Water, health, and wellness
          </p>
        </div>
      </div>

      {/* Blog Posts Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Articles</h2>
            <p className="text-xl text-gray-600">
              Expert insights, tips, and guides for your Kangen Water journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-1">
                <div className="bg-gradient-to-br from-kangen-light to-blue-50 p-8 text-center">
                  <div className="text-6xl mb-2">{post.icon}</div>
                  <span className="inline-block bg-kangen-blue text-white text-xs px-3 py-1 rounded-full font-semibold">
                    {post.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-kangen-blue transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                    <span>📅 {post.date}</span>
                    <span>⏱️ {post.readTime}</span>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-block bg-kangen-blue text-white px-6 py-2 rounded-lg font-semibold hover:bg-kangen-darkblue transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Downloadable Resources */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Downloadable Resources</h2>
            <p className="text-xl text-gray-600">
              Free guides, manuals, and educational materials
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 border-2 border-gray-200 hover:border-kangen-blue transition-all hover:shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="text-4xl flex-shrink-0">{resource.icon}</div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">
                      {resource.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      {resource.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500 bg-white px-2 py-1 rounded">
                        {resource.type}
                      </span>
                      <button className="text-kangen-blue font-semibold text-sm hover:text-kangen-darkblue">
                        Download →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
            <p className="text-gray-700">
              <strong>📧 Want More Resources?</strong> Subscribe to our newsletter to receive exclusive guides, tips, and updates directly to your inbox.
            </p>
          </div>
        </div>
      </section>

      {/* Video Library */}
      <section className="py-20 px-4 bg-gradient-to-br from-kangen-light to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Video Library</h2>
            <p className="text-xl text-gray-600">
              Watch and learn about Kangen Water benefits and usage
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-kangen-blue to-kangen-darkblue flex items-center justify-center text-white text-6xl">
                ▶️
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Kangen Water Introduction</h3>
                <p className="text-gray-600 mb-4">Learn the basics of Kangen Water and how it can benefit your health</p>
                <span className="text-sm text-gray-500">Duration: 5:30</span>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-kangen-blue to-kangen-darkblue flex items-center justify-center text-white text-6xl">
                ▶️
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">K8 Machine Setup Tutorial</h3>
                <p className="text-gray-600 mb-4">Step-by-step installation and setup guide for your K8 machine</p>
                <span className="text-sm text-gray-500">Duration: 8:45</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-kangen-blue to-kangen-darkblue text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Kangen Water Journey?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Schedule a free consultation and water demo with Lee Meadows today
          </p>
          <Link
            href="/#contact"
            className="inline-block bg-white text-kangen-blue px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Get Your Free Demo
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
