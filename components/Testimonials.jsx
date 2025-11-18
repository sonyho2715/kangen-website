export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      title: 'Health Enthusiast',
      text: 'Lee is incredible! She knows exactly what she is doing. She has helped transform my family\'s health. I admire and have so much respect for her amazing leadership.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    },
    {
      name: 'Michael Chen',
      title: 'Business Owner',
      text: 'The showroom is so welcoming. Lee is super friendly, genuine, knowledgeable, and easy to talk to. Highly recommend getting to this room and learning about Kangen!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    },
    {
      name: 'Patricia Martinez',
      title: 'Wellness Coach',
      text: 'Lee\'s presentation of the Kangen-8 machine was informative and eye-opening. I love the free water samples. She truly cares about people\'s success.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    },
    {
      name: 'David Suzuki',
      title: 'New Member',
      text: 'Lee showed me how to get my machine back for free. I\'m so blessed to have met her and learned about the incredible opportunity available. She\'s amazing!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    },
    {
      name: 'Jennifer Wong',
      title: 'Health Practitioner',
      text: 'I\'ve been recommending Lee\'s Kangen water to all my clients. The quality is superior and the health benefits are remarkable. She\'s the best!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop',
    },
    {
      name: 'Robert Kahale',
      title: 'Community Member',
      text: 'Lee changed my life! I have more energy, my digestion improved, and I feel younger. Thank you for introducing me to Kangen water!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop',
    },
  ];

  return (
    <section id="testimonials" className="py-20 px-4 bg-white">
      <div className="container-custom">
        <h2 className="section-title text-center">What Our Customers Say</h2>
        <p className="section-subtitle text-center max-w-3xl mx-auto">
          Join hundreds of satisfied customers who have transformed their lives with Kangen water
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-kangen-light rounded-xl p-8 shadow-lg hover:shadow-xl transition">
              {/* Avatar and Rating */}
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-kangen-blue"
                />
                <div className="flex-1">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">⭐</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quote */}
              <p className="text-gray-700 mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="border-t pt-4">
                <p className="font-bold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-kangen-blue">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof */}
        <div className="mt-16 bg-gradient-to-r from-kangen-blue to-kangen-darkblue rounded-2xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Join Our Growing Community</h3>
          <p className="text-xl mb-8 opacity-90">
            Over 5000+ satisfied customers in Honolulu trust Lee Meadows for their Kangen water needs
          </p>
          <div className="flex justify-center gap-12">
            <div>
              <p className="text-4xl font-bold">5000+</p>
              <p>Happy Customers</p>
            </div>
            <div>
              <p className="text-4xl font-bold">⭐⭐⭐⭐⭐</p>
              <p>Highly Rated</p>
            </div>
            <div>
              <p className="text-4xl font-bold">🏆</p>
              <p>Trusted Expert</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
