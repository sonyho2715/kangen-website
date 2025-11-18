export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-r from-kangen-light to-blue-50">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Lee Meadows Image */}
          <div>
            <div className="bg-gradient-to-br from-kangen-blue to-kangen-darkblue rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/team/lee Meadows.png"
                alt="Lee Meadows - Kangen Water Distributor"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* About Content */}
          <div>
            <h2 className="section-title">About Lee Meadows</h2>
            <p className="text-lg text-gray-700 mb-6">
              Lee Meadows is the founder and owner of <span className="font-bold">Blessed & Beautiful Kangen Water LLC</span>, passionate about transforming lives through pure, healthy water in Honolulu, Hawaii.
            </p>

            <p className="text-lg text-gray-700 mb-6">
              With genuine care for her community, Lee provides expert guidance on water ionization and the incredible health benefits of Kangen water. Her mission is simple: <span className="font-semibold italic">"Change Your Water, Change Your Life"</span>
            </p>

            <h3 className="text-2xl font-bold mb-4 text-kangen-blue">What Makes Lee Special</h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="text-kangen-blue font-bold mr-3">✓</span>
                <span className="text-gray-700"><span className="font-semibold">Knowledgeable Expert:</span> Deep understanding of Kangen water technology and health benefits</span>
              </li>
              <li className="flex items-start">
                <span className="text-kangen-blue font-bold mr-3">✓</span>
                <span className="text-gray-700"><span className="font-semibold">Genuine Care:</span> Truly invested in helping people transform their health</span>
              </li>
              <li className="flex items-start">
                <span className="text-kangen-blue font-bold mr-3">✓</span>
                <span className="text-gray-700"><span className="font-semibold">Community Leader:</span> Trusted by dozens of satisfied customers across Hawaii</span>
              </li>
              <li className="flex items-start">
                <span className="text-kangen-blue font-bold mr-3">✓</span>
                <span className="text-gray-700"><span className="font-semibold">Professional Service:</span> Honest, transparent, and committed to integrity</span>
              </li>
            </ul>

            {/* Testimonial Quote */}
            <div className="bg-white p-6 rounded-lg border-l-4 border-kangen-blue shadow-lg">
              <p className="text-gray-700 italic mb-3">
                "Lee is the most amazing businesswoman I've met. Honest, professional, and high integrity! She genuinely cares about people and their success. Highly recommended for any of your Kangen water needs and beyond!"
              </p>
              <p className="font-bold text-kangen-blue">— Satisfied Customer, Honolulu</p>
            </div>

            {/* Contact Button */}
            <div className="mt-8">
              <p className="text-gray-700 mb-4">Ready to meet Lee and start your water transformation journey?</p>
              <div className="flex gap-4">
                <a href="/#contact" className="btn-primary">Free Consultation</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
