import Link from 'next/link';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-kangen-blue via-kangen-darkblue to-blue-900 text-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Transform Your Water, Transform Your Life
            </h1>
            <p className="text-xl mb-4 text-blue-100">
              Experience pure, ionized alkaline water with <span className="font-semibold">Kangen Water 808</span> - rich in antioxidants, hydrogen, and wellness.
            </p>
            <p className="text-lg text-blue-100 mb-8">
              "Change Your Water, Change Your Life" — Lee Meadows, Honolulu
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#contact" className="btn-primary inline-block text-center">
                Free Water Sample
              </Link>
              <a href="https://leemeadows.ecokangen.com/en_US/shop/product/k8" target="_blank" rel="noopener noreferrer" className="btn-secondary inline-block text-center">
                Buy Now
              </a>
            </div>

            {/* Trust Badges */}
            <div className="mt-12 grid grid-cols-3 gap-6">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 text-center">
                <p className="text-3xl font-bold">50+</p>
                <p className="text-blue-100 text-sm">Years Excellence</p>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 text-center">
                <p className="text-3xl font-bold">🏆</p>
                <p className="text-blue-100 text-sm">Enagic Certified</p>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 text-center">
                <p className="text-3xl font-bold">🌊</p>
                <p className="text-blue-100 text-sm">Pure & Alkaline</p>
              </div>
            </div>
          </div>

          {/* Right - Demo Video */}
          <div>
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-4 border border-white border-opacity-20 shadow-2xl">
              <div className="relative rounded-xl overflow-hidden aspect-video">
                <video
                  className="w-full h-full object-cover"
                  controls
                  poster="/images/products/Kangen K8.png"
                >
                  <source src="https://video.wixstatic.com/video/16897f_94327201f83548d9a2c505a598f13f23/1080p/mp4/file.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="mt-4 text-center">
                <p className="text-lg font-semibold">Watch Our Demo</p>
                <p className="text-sm text-blue-100">See Kangen Water in action</p>
              </div>
            </div>

            {/* Feature Card Below Video on Desktop */}
            <div className="mt-6 bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-6 border border-white border-opacity-20">
              <h3 className="text-xl font-bold mb-4 text-center">K8 Machine Features</h3>
              <ul className="space-y-2 text-blue-100 text-sm">
                <li className="flex items-start">
                  <span className="text-kangen-accent mr-3">✓</span>
                  <span>8 Platinum-Dipped Titanium Plates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-kangen-accent mr-3">✓</span>
                  <span>Touchscreen LCD Display</span>
                </li>
                <li className="flex items-start">
                  <span className="text-kangen-accent mr-3">✓</span>
                  <span>5 Types of Water</span>
                </li>
                <li className="flex items-start">
                  <span className="text-kangen-accent mr-3">✓</span>
                  <span>5-Year Warranty</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
