export default function GoogleReviews() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-kangen-light to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            ⭐ Google Reviews
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            See what our customers are saying on Google
          </p>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex text-yellow-400 text-3xl">
              ⭐⭐⭐⭐⭐
            </div>
            <span className="text-2xl font-bold text-gray-900">5.0</span>
          </div>
          <p className="text-gray-600">Based on Google Reviews</p>
        </div>

        {/* Google Maps Embed */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
          <div className="aspect-video w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3717.4848929891746!2d-157.8044631!3d21.283951099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c006d48d817c27b%3A0x9abd08752527e226!2sBlessed%20%26%20Beautiful%20Kangen%20Water%20LLC!5e0!3m2!1sen!2sus!4v1729285431836!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Blessed & Beautiful Kangen Water LLC Location"
            ></iframe>
          </div>
        </div>

        {/* CTA to Leave/View Reviews */}
        <div className="grid md:grid-cols-2 gap-6">
          <a
            href="https://www.google.com/maps/place/Blessed+%26+Beautiful+Kangen+Water+LLC/@21.2839511,-157.8044631,1022m/data=!3m1!1e3!4m8!3m7!1s0x7c006d48d817c27b:0x9abd08752527e226!8m2!3d21.2839461!4d-157.8018828!9m1!1b1!16s%2Fg%2F11s85nxdmm?entry=ttu&g_ep=EgoyMDI1MTAxNC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white hover:bg-gray-50 rounded-xl p-8 border-2 border-gray-200 hover:border-kangen-blue transition-all group text-center"
          >
            <div className="text-5xl mb-4">👀</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Read Our Reviews</h3>
            <p className="text-gray-600 mb-4">
              See what customers in Honolulu are saying about their Kangen Water experience
            </p>
            <span className="text-kangen-blue font-semibold group-hover:underline">
              View on Google Maps →
            </span>
          </a>

          <a
            href="https://g.page/r/CebiJyV1CLqaEBM/review"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-br from-kangen-blue to-kangen-darkblue hover:shadow-xl rounded-xl p-8 transition-all group text-center text-white"
          >
            <div className="text-5xl mb-4">✍️</div>
            <h3 className="text-2xl font-bold mb-3">Leave a Review</h3>
            <p className="text-blue-100 mb-4">
              Share your Kangen Water story and help others discover the benefits
            </p>
            <span className="bg-white text-kangen-blue px-6 py-3 rounded-lg font-semibold inline-block group-hover:scale-105 transition-transform">
              Write a Review
            </span>
          </a>
        </div>

        {/* Location Info */}
        <div className="mt-8 bg-white rounded-xl p-8 shadow-lg">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl mb-2">📍</div>
              <h4 className="font-bold text-gray-900 mb-2">Visit Our Showroom</h4>
              <p className="text-gray-600 text-sm">
                3457 Waialae Avenue, Ste 201<br />
                Honolulu, Hawaii 96816
              </p>
            </div>
            <div>
              <div className="text-3xl mb-2">🕐</div>
              <h4 className="font-bold text-gray-900 mb-2">Hours</h4>
              <p className="text-gray-600 text-sm">
                Mon-Fri: 10am - 6pm<br />
                Sat: 10am - 4pm<br />
                Sun: By Appointment
              </p>
            </div>
            <div>
              <div className="text-3xl mb-2">📞</div>
              <h4 className="font-bold text-gray-900 mb-2">Contact</h4>
              <p className="text-gray-600 text-sm">
                <a href="tel:8085019878" className="text-kangen-blue hover:underline">
                  (808) 501-9878
                </a><br />
                Free parking available
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
