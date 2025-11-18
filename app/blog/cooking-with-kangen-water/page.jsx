import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Cooking with Kangen Water: Recipes & Kitchen Tips | Blessed & Beautiful',
  description: 'Discover how to enhance your cooking with different pH levels of Kangen Water. Recipes, tips, and kitchen secrets revealed.',
};

export default function CookingWithKangenWater() {
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
              <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">Cooking & Recipes</span>
              <span className="text-gray-500">December 15, 2024 • 10 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Cooking with Kangen Water: Elevate Your Culinary Game
            </h1>
          </header>

          <img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1200&h=600&fit=crop" alt="Cooking ingredients and water" className="w-full rounded-2xl mb-12" />

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-8">
              Did you know that water quality significantly impacts the taste, texture, and nutritional value of your food? Kangen Water isn't just for drinking—it's a versatile cooking tool that can transform your culinary creations. Let's explore how different pH levels enhance various cooking techniques.
            </p>

            <h2 className="text-3xl font-bold mb-4">Why Water Matters in Cooking</h2>
            <p className="text-gray-700 mb-6">
              Water is often called the "forgotten ingredient," yet it makes up a significant portion of most dishes. The pH and mineral content of water affects:
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-700">
              <li>Flavor extraction and infusion</li>
              <li>Texture of vegetables, meats, and grains</li>
              <li>Color vibrancy of ingredients</li>
              <li>Nutrient preservation</li>
              <li>Cooking time and efficiency</li>
            </ul>

            <h2 className="text-3xl font-bold mb-4 mt-12">Kangen Water (pH 8.5-9.5) 💧</h2>
            <p className="text-gray-700 mb-6">
              <strong>Best for: Vegetables, rice, pasta, soups, tea, coffee</strong>
            </p>

            <h3 className="text-2xl font-bold mb-3">Vegetable Cooking</h3>
            <p className="text-gray-700 mb-4">
              Alkaline water brings out the natural colors and flavors of vegetables:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li><strong>Brighter Colors:</strong> Greens stay vibrant, not dull</li>
              <li><strong>Better Texture:</strong> Vegetables maintain crispness</li>
              <li><strong>Enhanced Flavor:</strong> Natural sweetness comes through</li>
              <li><strong>Faster Cooking:</strong> Reduced boiling time</li>
            </ul>

            <div className="bg-green-50 p-6 rounded-xl mb-8">
              <h4 className="font-bold text-lg mb-3">🥦 Perfect Steamed Broccoli</h4>
              <p className="text-gray-700 mb-2"><strong>Ingredients:</strong></p>
              <ul className="text-gray-700 space-y-1 mb-3">
                <li>• 1 head broccoli, cut into florets</li>
                <li>• 2 cups Kangen Water (pH 9.5)</li>
                <li>• Pinch of sea salt</li>
              </ul>
              <p className="text-gray-700 mb-2"><strong>Instructions:</strong></p>
              <ol className="text-gray-700 space-y-1">
                <li>1. Bring Kangen Water to boil in steamer</li>
                <li>2. Add broccoli, steam for 3-4 minutes</li>
                <li>3. Broccoli stays bright green and crisp-tender</li>
              </ol>
            </div>

            <h3 className="text-2xl font-bold mb-3">Rice & Grains</h3>
            <p className="text-gray-700 mb-6">
              Cooking rice with Kangen Water produces fluffier, more flavorful results. The alkaline water helps break down the outer layer of grains, allowing better water absorption and more even cooking.
            </p>

            <div className="bg-green-50 p-6 rounded-xl mb-8">
              <h4 className="font-bold text-lg mb-3">🍚 Restaurant-Quality Rice</h4>
              <p className="text-gray-700 mb-2"><strong>Ingredients:</strong></p>
              <ul className="text-gray-700 space-y-1 mb-3">
                <li>• 2 cups white or brown rice</li>
                <li>• 3 cups Kangen Water (pH 9.0)</li>
              </ul>
              <p className="text-gray-700 mb-2"><strong>Instructions:</strong></p>
              <ol className="text-gray-700 space-y-1">
                <li>1. Rinse rice with Kangen Water</li>
                <li>2. Add rice and Kangen Water to rice cooker</li>
                <li>3. Cook as normal—enjoy fluffier, tastier rice</li>
              </ol>
            </div>

            <h3 className="text-2xl font-bold mb-3">Tea & Coffee ☕</h3>
            <p className="text-gray-700 mb-6">
              Alkaline water extracts more flavor and aroma from tea leaves and coffee beans, resulting in:
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-700">
              <li>Richer, fuller flavor profiles</li>
              <li>Less bitterness and astringency</li>
              <li>Beautiful golden color in tea</li>
              <li>Smoother coffee taste</li>
            </ul>

            <h2 className="text-3xl font-bold mb-4 mt-12">Strong Kangen Water (pH 11.5) 🧼</h2>
            <p className="text-gray-700 mb-6">
              <strong>Best for: Removing pesticides, oil removal, deep cleaning</strong>
            </p>

            <h3 className="text-2xl font-bold mb-3">Produce Preparation</h3>
            <div className="bg-blue-50 p-6 rounded-xl mb-8">
              <h4 className="font-bold text-lg mb-3">🥬 Pesticide-Free Vegetables</h4>
              <p className="text-gray-700 mb-2"><strong>Process:</strong></p>
              <ol className="text-gray-700 space-y-2">
                <li>1. Fill large bowl with Strong Kangen Water</li>
                <li>2. Soak fruits/vegetables for 5-10 minutes</li>
                <li>3. Watch dirt, wax, and residues lift off</li>
                <li>4. Rinse with Clean Water (pH 7.0)</li>
                <li>5. Produce is cleaner and stays fresh longer</li>
              </ol>
            </div>

            <h3 className="text-2xl font-bold mb-3">Oil & Grease Removal</h3>
            <p className="text-gray-700 mb-6">
              Strong Kangen Water naturally emulsifies oils, making it perfect for:
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-700">
              <li>Removing oil from beans before cooking</li>
              <li>Degreasing meats</li>
              <li>Cleaning oily fish</li>
              <li>Washing greasy cookware</li>
            </ul>

            <h2 className="text-3xl font-bold mb-4 mt-12">Clean Water (pH 7.0) 💊</h2>
            <p className="text-gray-700 mb-6">
              <strong>Best for: Baby formula, taking medications, delicate recipes</strong>
            </p>
            <p className="text-gray-700 mb-8">
              Neutral pH water won't interfere with medications or formulas. It's also ideal for recipes requiring precise pH balance, like bread making or fermentation.
            </p>

            <h2 className="text-3xl font-bold mb-4 mt-12">Beauty Water (pH 5.5-6.0) 🍝</h2>
            <p className="text-gray-700 mb-6">
              <strong>Best for: Pasta, stir-fries, polishing, preserving</strong>
            </p>

            <h3 className="text-2xl font-bold mb-3">Perfect Pasta</h3>
            <p className="text-gray-700 mb-6">
              Slightly acidic water helps pasta maintain its texture and prevents stickiness:
            </p>
            <div className="bg-purple-50 p-6 rounded-xl mb-8">
              <h4 className="font-bold text-lg mb-3">🍝 Al Dente Pasta</h4>
              <p className="text-gray-700 mb-2"><strong>Instructions:</strong></p>
              <ol className="text-gray-700 space-y-1">
                <li>1. Boil Beauty Water with salt</li>
                <li>2. Cook pasta according to package directions</li>
                <li>3. Pasta stays firmer, less sticky</li>
                <li>4. Better sauce adhesion</li>
              </ol>
            </div>

            <h3 className="text-2xl font-bold mb-3">Stir-Fry Vegetables</h3>
            <p className="text-gray-700 mb-8">
              Misting vegetables with Beauty Water during stir-frying helps them stay crisp and colorful. The acidic water helps vegetables maintain their structure at high heat.
            </p>

            <h2 className="text-3xl font-bold mb-4 mt-12">Complete Recipe: Kangen Kitchen Soup 🍲</h2>
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-xl mb-12">
              <h3 className="text-2xl font-bold mb-4">Alkaline Vegetable Soup</h3>
              <p className="text-gray-700 mb-4"><strong>Ingredients:</strong></p>
              <ul className="text-gray-700 space-y-1 mb-6">
                <li>• 2 tablespoons olive oil</li>
                <li>• 1 onion, diced</li>
                <li>• 3 cloves garlic, minced</li>
                <li>• 2 carrots, chopped</li>
                <li>• 2 celery stalks, chopped</li>
                <li>• 1 zucchini, cubed</li>
                <li>• 2 cups chopped kale</li>
                <li>• 6 cups Kangen Water (pH 9.5)</li>
                <li>• 1 can diced tomatoes</li>
                <li>• 1 can white beans, drained</li>
                <li>• 2 teaspoons Italian seasoning</li>
                <li>• Sea salt and pepper to taste</li>
              </ul>
              <p className="text-gray-700 mb-4"><strong>Instructions:</strong></p>
              <ol className="text-gray-700 space-y-2 mb-4">
                <li>1. Soak all vegetables in Strong Kangen Water for 5 minutes, then rinse</li>
                <li>2. Heat olive oil in large pot over medium heat</li>
                <li>3. Sauté onion and garlic until fragrant (2-3 minutes)</li>
                <li>4. Add carrots, celery, zucchini—cook 5 minutes</li>
                <li>5. Pour in Kangen Water, tomatoes, and Italian seasoning</li>
                <li>6. Bring to boil, then reduce to simmer for 15 minutes</li>
                <li>7. Add kale and beans, cook until kale is tender (5 minutes)</li>
                <li>8. Season with salt and pepper</li>
                <li>9. Serve hot and enjoy vibrant colors and rich flavors!</li>
              </ol>
              <p className="text-gray-700 italic">
                <strong>Note:</strong> The Kangen Water enhances vegetable flavors and creates a more alkaline, nutritious soup that's easier on digestion.
              </p>
            </div>

            <h2 className="text-3xl font-bold mb-4 mt-12">Kitchen Tips & Tricks</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="font-bold text-lg mb-3">🥗 Crispy Lettuce</h4>
                <p className="text-gray-700 text-sm">Soak wilted lettuce in Kangen Water (pH 9.5) for 10 minutes. It'll crisp right back up!</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="font-bold text-lg mb-3">🫘 Beans Cook Faster</h4>
                <p className="text-gray-700 text-sm">Soak dried beans overnight in Kangen Water. They'll cook 30% faster with better texture.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="font-bold text-lg mb-3">🍓 Extend Freshness</h4>
                <p className="text-gray-700 text-sm">Rinse berries with Beauty Water to remove mold spores and extend shelf life by days.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="font-bold text-lg mb-3">🍞 Fluffier Bread</h4>
                <p className="text-gray-700 text-sm">Use Kangen Water in bread dough for improved rise, texture, and moisture retention.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="font-bold text-lg mb-3">🥤 Better Smoothies</h4>
                <p className="text-gray-700 text-sm">Blend fruits with Kangen Water for enhanced nutrient extraction and smoother consistency.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="font-bold text-lg mb-3">🍗 Tender Meat</h4>
                <p className="text-gray-700 text-sm">Marinate meat in Kangen Water for 30 minutes before cooking for increased tenderness.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-4 mt-12">Quick Reference Guide</h2>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl mb-8">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b-2 border-gray-300">
                    <th className="pb-3 font-bold">Water Type</th>
                    <th className="pb-3 font-bold">pH Level</th>
                    <th className="pb-3 font-bold">Cooking Use</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b border-gray-200">
                    <td className="py-3">Strong Kangen</td>
                    <td className="py-3">11.5</td>
                    <td className="py-3">Cleaning produce, removing oils</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3">Kangen</td>
                    <td className="py-3">8.5-9.5</td>
                    <td className="py-3">Vegetables, rice, soups, tea</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3">Clean</td>
                    <td className="py-3">7.0</td>
                    <td className="py-3">Baby formula, medications, bread</td>
                  </tr>
                  <tr>
                    <td className="py-3">Beauty</td>
                    <td className="py-3">5.5-6.0</td>
                    <td className="py-3">Pasta, preserving, stir-fries</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold mb-4 mt-12">The Taste Test Challenge</h2>
            <p className="text-gray-700 mb-6">
              Don't just take our word for it! Try this simple experiment:
            </p>
            <ol className="list-decimal pl-6 mb-8 space-y-2 text-gray-700">
              <li>Make two cups of your favorite tea</li>
              <li>Use tap water for one, Kangen Water (pH 9.5) for the other</li>
              <li>Brew at the same temperature and time</li>
              <li>Compare the color, aroma, and taste</li>
              <li>Notice the dramatic difference!</li>
            </ol>

            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 my-8">
              <h3 className="font-bold text-xl mb-2">Chef's Tip</h3>
              <p className="text-gray-700">
                The key to cooking with Kangen Water is consistency. Once you experience the difference in flavor and texture, you'll never want to cook with regular tap water again. Start with simple dishes like rice or steamed vegetables to notice the improvement right away!
              </p>
            </div>

            <h2 className="text-3xl font-bold mb-4 mt-12">Cost Savings in the Kitchen</h2>
            <p className="text-gray-700 mb-6">
              Beyond better taste and nutrition, Kangen Water saves money:
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-700">
              <li>Produce stays fresh longer (less waste)</li>
              <li>Replace expensive vegetable washes</li>
              <li>No need for bottled water in recipes</li>
              <li>Beans cook faster (less energy usage)</li>
              <li>Better ingredient extraction (use less tea, coffee)</li>
            </ul>
          </div>

          <div className="mt-16 bg-gradient-to-r from-green-600 to-emerald-700 text-white rounded-2xl p-8 text-center">
            <h3 className="text-3xl font-bold mb-4">Transform Your Cooking Today</h3>
            <p className="text-xl mb-6">
              Discover how Kangen Water elevates every dish
            </p>
            <Link href="/#contact" className="inline-block bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors">
              Schedule Your Tasting Demo
            </Link>
          </div>
        </div>
      </article>
      <Footer />
    </>
  );
}
