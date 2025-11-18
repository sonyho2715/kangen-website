'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    type: 'sample',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          type: 'sample',
        });
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-white to-kangen-light">
      <div className="container-custom">
        <h2 className="section-title text-center">Get Your Free Water Sample</h2>
        <p className="section-subtitle text-center max-w-3xl mx-auto">
          Experience the difference of Kangen water. Contact Lee Meadows in Honolulu for a free consultation and water sample.
        </p>

        {/* Decorative Images */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="relative overflow-hidden rounded-xl shadow-lg h-48">
            <img
              src="https://images.unsplash.com/photo-1542259009477-d625272157b7?w=600&h=400&fit=crop"
              alt="Honolulu Hawaii"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-kangen-blue/80 to-transparent flex items-end p-4">
              <p className="text-white font-semibold">🌺 Located in Honolulu</p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-xl shadow-lg h-48">
            <img
              src="https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=600&h=400&fit=crop"
              alt="Pure water pour"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-kangen-blue/80 to-transparent flex items-end p-4">
              <p className="text-white font-semibold">💧 Premium Water Quality</p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-xl shadow-lg h-48">
            <img
              src="https://images.unsplash.com/photo-1521791055366-0d553872125f?w=600&h=400&fit=crop"
              alt="Customer consultation"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-kangen-blue/80 to-transparent flex items-end p-4">
              <p className="text-white font-semibold">🤝 Expert Consultation</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="text-3xl">📍</div>
                <div>
                  <p className="font-bold text-gray-900">Location</p>
                  <p className="text-gray-700">3457 Waialae Avenue, Ste 201</p>
                  <p className="text-gray-700">Honolulu, Hawaii 96816</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-3xl">📱</div>
                <div>
                  <p className="font-bold text-gray-900">Phone</p>
                  <a href="tel:8085019878" className="text-kangen-blue hover:underline">
                    (808) 501-9878
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-3xl">✉️</div>
                <div>
                  <p className="font-bold text-gray-900">Email</p>
                  <a href="mailto:info@blessedandbeautifulkangen.com" className="text-kangen-blue hover:underline">
                    info@blessedandbeautifulkangen.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-3xl">🕐</div>
                <div>
                  <p className="font-bold text-gray-900">Hours</p>
                  <p className="text-gray-700">Monday - Friday: 10am - 6pm</p>
                  <p className="text-gray-700">Saturday: 10am - 4pm</p>
                  <p className="text-gray-700">Sunday: By Appointment</p>
                </div>
              </div>
            </div>

            {/* Benefits Card */}
            <div className="mt-8 bg-kangen-blue text-white rounded-xl p-6">
              <p className="font-bold mb-3">Why Visit Our Showroom?</p>
              <ul className="space-y-2 text-sm">
                <li>✓ Free water sample tasting</li>
                <li>✓ Live K8 machine demonstration</li>
                <li>✓ Expert consultation with Lee</li>
                <li>✓ Learn about business opportunity</li>
                <li>✓ Financing options available</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            {submitted && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                ✓ Thank you! We'll contact you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block font-semibold text-gray-900 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-kangen-blue"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-semibold text-gray-900 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-kangen-blue"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block font-semibold text-gray-900 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-kangen-blue"
                  placeholder="(808) 555-0000"
                />
              </div>

              <div>
                <label htmlFor="type" className="block font-semibold text-gray-900 mb-2">
                  I'm interested in...
                </label>
                <select
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-kangen-blue"
                >
                  <option value="sample">Free Water Sample</option>
                  <option value="demo">K8 Machine Demo</option>
                  <option value="business">Business Opportunity</option>
                  <option value="consultation">Health Consultation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block font-semibold text-gray-900 mb-2">
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-kangen-blue"
                  placeholder="Tell us what interests you..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full"
              >
                {loading ? 'Sending...' : 'Send My Request'}
              </button>

              <p className="text-sm text-gray-600 text-center">
                Lee will respond within 24 hours
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
