export default function Certifications() {
  const certifications = [
    {
      image: '/images/certifications/certif-img-01.png',
      title: 'ISO 9001 Certified',
      description: 'Quality Management System'
    },
    {
      image: '/images/certifications/certif-img-03.png',
      title: 'ISO 14001 Certified',
      description: 'Environmental Management'
    },
    {
      image: '/images/certifications/certif-img-04.png',
      title: 'ISO 13485 Certified',
      description: 'Medical Device Quality'
    },
    {
      image: '/images/certifications/certif-img-05.png',
      title: 'WQA Gold Seal',
      description: 'Water Quality Association'
    },
    {
      image: '/images/certifications/certif-img-06.png',
      title: 'FDA Registered',
      description: 'Medical Device Facility'
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            🏆 Certifications & Awards
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enagic is recognized worldwide for quality, safety, and environmental excellence
          </p>
        </div>

        {/* Certification Badges */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {certifications.map((cert, index) => (
            <div key={index} className="flex flex-col items-center group">
              <div className="bg-gradient-to-br from-kangen-light to-blue-50 rounded-xl p-6 mb-4 transition-all hover:shadow-lg hover:scale-105 border-2 border-transparent hover:border-kangen-blue">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-24 object-contain"
                />
              </div>
              <h3 className="font-bold text-sm text-center text-gray-900 mb-1">
                {cert.title}
              </h3>
              <p className="text-xs text-gray-600 text-center">
                {cert.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="bg-gradient-to-r from-kangen-blue to-kangen-darkblue rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl mb-3">🏥</div>
              <h3 className="font-bold text-xl mb-2">Medical Device Certified</h3>
              <p className="text-sm text-blue-100">
                Recognized by Japan's Ministry of Health as a medical device
              </p>
            </div>
            <div>
              <div className="text-4xl mb-3">🌍</div>
              <h3 className="font-bold text-xl mb-2">International Standards</h3>
              <p className="text-sm text-blue-100">
                Meets ISO 9001, 14001, and 13485 global quality standards
              </p>
            </div>
            <div>
              <div className="text-4xl mb-3">✅</div>
              <h3 className="font-bold text-xl mb-2">FDA Registered</h3>
              <p className="text-sm text-blue-100">
                Manufacturing facility registered with the U.S. FDA
              </p>
            </div>
          </div>
        </div>

        {/* Downloadable Certificates */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-center mb-8">📄 Download Certificates</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="/images/certifications/certificates_fda.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-50 hover:bg-gray-100 rounded-lg p-6 border-2 border-gray-200 hover:border-kangen-blue transition-all group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-3xl">📋</span>
                <span className="text-kangen-blue text-2xl group-hover:translate-x-1 transition-transform">→</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">FDA Registration</h4>
              <p className="text-sm text-gray-600">Medical Device Facility Certificate</p>
            </a>

            <a
              href="/images/certifications/iso9001.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-50 hover:bg-gray-100 rounded-lg p-6 border-2 border-gray-200 hover:border-kangen-blue transition-all group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-3xl">📋</span>
                <span className="text-kangen-blue text-2xl group-hover:translate-x-1 transition-transform">→</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">ISO 9001</h4>
              <p className="text-sm text-gray-600">Quality Management Certificate</p>
            </a>

            <a
              href="/images/certifications/iso14001.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-50 hover:bg-gray-100 rounded-lg p-6 border-2 border-gray-200 hover:border-kangen-blue transition-all group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-3xl">📋</span>
                <span className="text-kangen-blue text-2xl group-hover:translate-x-1 transition-transform">→</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">ISO 14001</h4>
              <p className="text-sm text-gray-600">Environmental Management Certificate</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
