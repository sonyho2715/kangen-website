'use client';

export default function LifestyleGallery() {
  // Curated selection of lifestyle images for homepage preview
  const galleryImages = [
    { src: '/images/lifestyle/IMG_6240.jpeg', alt: 'Kangen Water Lifestyle' },
    { src: '/images/lifestyle/IMG_6241.jpeg', alt: 'Health and Wellness' },
    { src: '/images/lifestyle/IMG_6242.jpeg', alt: 'Community Event' },
    { src: '/images/lifestyle/IMG_6243.jpeg', alt: 'Kangen Water Benefits' },
    { src: '/images/lifestyle/IMG_6245.jpeg', alt: 'Happy Customers' },
    { src: '/images/lifestyle/IMG_6246.jpeg', alt: 'Water Demonstration' },
    { src: '/images/lifestyle/IMG_6247.jpeg', alt: 'Product Showcase' },
    { src: '/images/lifestyle/IMG_6248.jpeg', alt: 'Customer Testimonial' },
    { src: '/images/lifestyle/IMG_6251.jpeg', alt: 'Healthy Living' },
    { src: '/images/lifestyle/IMG_6252.jpeg', alt: 'Kangen Experience' },
    { src: '/images/lifestyle/IMG_6253.jpeg', alt: 'Water Quality' },
    { src: '/images/lifestyle/IMG_6254.jpeg', alt: 'Community Gathering' },
    { src: '/images/lifestyle/IMG_6262.jpeg', alt: 'Product Display' },
    { src: '/images/lifestyle/IMG_6274.jpeg', alt: 'Customer Success' },
    { src: '/images/lifestyle/IMG_6276.jpeg', alt: 'Health Journey' },
    { src: '/images/lifestyle/IMG_6277.jpeg', alt: 'Wellness Event' },
    { src: '/images/lifestyle/IMG_6280.jpeg', alt: 'Kangen Community' },
    { src: '/images/lifestyle/IMG_6281.jpeg', alt: 'Product Benefits' },
    { src: '/images/lifestyle/IMG_6286.jpeg', alt: 'Success Stories' },
    { src: '/images/lifestyle/IMG_6289.jpeg', alt: 'Water Testing' },
    { src: '/images/lifestyle/IMG_6294.jpeg', alt: 'Customer Experience' },
    { src: '/images/lifestyle/IMG_6302.jpeg', alt: 'Lifestyle Change' },
    { src: '/images/lifestyle/IMG_6303.jpeg', alt: 'Healthy Choices' },
    { src: '/images/lifestyle/IMG_6304.jpeg', alt: 'Water Education' },
    { src: '/images/lifestyle/IMG_5591.jpeg', alt: 'Team Event' },
    { src: '/images/lifestyle/IMG_5593.jpeg', alt: 'Group Meeting' },
    { src: '/images/lifestyle/IMG_5597.jpeg', alt: 'Customer Appreciation' },
    { src: '/images/lifestyle/IMG_5606.jpeg', alt: 'Business Success' },
    { src: '/images/lifestyle/IMG_6101.JPG', alt: 'Product Demo' },
    { src: '/images/lifestyle/IMG_6112.JPG', alt: 'Wellness Journey' },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            📸 Our Community in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See real customers experiencing the transformative benefits of Kangen Water in Honolulu, Hawaii
          </p>
        </div>

        {/* Masonry-style Gallery Grid - Show first 12 images */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.slice(0, 12).map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-sm font-semibold">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Gallery Button */}
        <div className="text-center mt-12">
          <a
            href="/gallery"
            className="inline-block bg-gradient-to-r from-kangen-blue to-kangen-darkblue text-white px-10 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            📷 View Full Gallery ({galleryImages.length}+ Photos)
          </a>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-kangen-blue to-kangen-darkblue rounded-2xl p-10 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Want to Join Our Community?</h3>
          <p className="text-xl text-blue-100 mb-6">
            Experience Kangen Water for yourself. Schedule a free consultation and water sample today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#contact"
              className="bg-white text-kangen-blue px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-block"
            >
              Get Free Water Sample
            </a>
            <a
              href="tel:8085019878"
              className="bg-kangen-accent text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-colors inline-block"
            >
              📞 Call: (808) 501-9878
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
