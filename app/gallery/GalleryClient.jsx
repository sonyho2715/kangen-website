'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function GalleryClient() {
  const [selectedImage, setSelectedImage] = useState(null);

  // All lifestyle images from the folder
  const allImages = [
    'IMG_0505.jpeg', 'IMG_0595.jpeg', 'IMG_0623.jpeg', 'IMG_0683.jpeg',
    'IMG_0754.jpeg', 'IMG_0756.jpeg', 'IMG_0903.jpeg', 'IMG_2602.jpeg',
    'IMG_2607.JPG', 'IMG_2608.jpeg', 'IMG_2729.jpeg', 'IMG_3507.jpeg',
    'IMG_3829.jpeg', 'IMG_4110.jpeg', 'IMG_4301.JPG', 'IMG_4531.jpeg',
    'IMG_4696.jpeg', 'IMG_4710.jpeg', 'IMG_4747.jpeg', 'IMG_4832.JPG',
    'IMG_5034.jpeg', 'IMG_5036.jpeg', 'IMG_5039.jpeg', 'IMG_5140 (1).jpeg',
    'IMG_5140.jpeg', 'IMG_5435.jpeg', 'IMG_5591.jpeg', 'IMG_5593.jpeg',
    'IMG_5597.jpeg', 'IMG_5606.jpeg', 'IMG_5614.jpeg', 'IMG_5616.jpeg',
    'IMG_6096.jpeg', 'IMG_6101.JPG', 'IMG_6112.JPG', 'IMG_6114.jpeg',
    'IMG_6116.jpeg', 'IMG_6125.jpeg', 'IMG_6172.jpeg', 'IMG_6179.jpeg',
    'IMG_6183.jpeg', 'IMG_6213.jpeg', 'IMG_6221.jpeg', 'IMG_6223.jpeg',
    'IMG_6224.jpeg', 'IMG_6225.jpeg', 'IMG_6240.jpeg', 'IMG_6241.jpeg',
    'IMG_6242.jpeg', 'IMG_6243.jpeg', 'IMG_6245.jpeg', 'IMG_6246.jpeg',
    'IMG_6247.jpeg', 'IMG_6248.jpeg', 'IMG_6251.jpeg', 'IMG_6252.jpeg',
    'IMG_6253.jpeg', 'IMG_6254.jpeg', 'IMG_6262.jpeg', 'IMG_6274.jpeg',
    'IMG_6276.jpeg', 'IMG_6277.jpeg', 'IMG_6280.jpeg', 'IMG_6281.jpeg',
    'IMG_6286.jpeg', 'IMG_6289.jpeg', 'IMG_6294.jpeg', 'IMG_6302.jpeg',
    'IMG_6303.jpeg', 'IMG_6304.jpeg', 'IMG_6305.jpeg', 'IMG_6307.jpeg',
    'IMG_6308.jpeg', 'IMG_6309.JPG', 'IMG_6311.jpeg', 'IMG_6313.jpeg',
    'IMG_6318.JPG', 'IMG_6354.jpeg', 'IMG_6357.jpeg', 'IMG_6366.jpeg',
    'IMG_6715.JPG', 'IMG_6716.jpeg', 'IMG_6764.jpeg', 'IMG_6767.JPG',
    'IMG_6885.JPG', 'IMG_6900.JPG', 'IMG_7111.jpeg', 'IMG_7281.jpeg',
    'IMG_7288.jpeg', 'IMG_7290.jpeg', 'IMG_7291.jpeg', 'IMG_7292.jpeg',
    'IMG_7297.JPG', 'IMG_7331.JPG', 'IMG_7443.jpeg', 'IMG_7480.JPG',
    'IMG_7656.JPG', 'IMG_7662.jpeg', 'IMG_7765.jpeg', 'IMG_7786.jpeg',
    'IMG_7807.jpeg', 'IMG_7821.jpeg', 'IMG_7937.jpeg', 'IMG_7985.jpeg',
    'IMG_8017.JPG', 'IMG_8041.jpeg', 'IMG_8090.jpeg', 'IMG_8194.JPG',
    'IMG_8195.JPG', 'IMG_8216.jpeg', 'IMG_8217.jpeg', 'IMG_8218.jpeg',
    'IMG_8223.jpeg', 'IMG_8237.jpeg', 'IMG_8290.JPG', 'IMG_8340.JPG',
    'IMG_8520.jpeg', 'IMG_8521.jpeg', 'IMG_8522.jpeg', 'IMG_8525.jpeg',
    'IMG_8542.JPG', 'IMG_8550.JPG', 'IMG_8784.jpeg', 'IMG_8914.jpeg',
    'IMG_8915.jpeg', 'IMG_8916.jpeg', 'IMG_8917.jpeg', 'IMG_9041.jpeg',
    'IMG_9167.jpeg', 'IMG_9495.jpeg', 'IMG_9612.jpeg', 'IMG_9660.jpeg',
    'IMG_9732.jpeg', 'IMG_9816.jpeg', 'IMG_9843.jpeg', 'IMG_9844.jpeg',
    'IMG_9856.jpeg', 'IMG_9859.jpeg', 'IMG_9885.JPG', 'IMG_9887.jpeg',
    'IMG_9888.jpeg', 'IMG_9893.jpeg', 'IMG_9897.jpeg', 'IMG_9924 (1).jpeg',
    'IMG_9924.jpeg', 'IMG_9951.JPG', 'IMG_9968.jpeg', 'IMG_9971.jpeg',
    'Resized_20240509_193108_1715325939235.jpeg', 'Resized_20241111_180511.jpeg',
    'Resized_Resized_20240509_193319_1715325936451_1715325993089.jpeg'
  ];

  const galleryImages = allImages.map(filename => ({
    src: `/images/lifestyle/${filename}`,
    alt: `Kangen Water Community - ${filename.replace(/\.(jpeg|JPG|jpg)$/, '').replace(/_/g, ' ')}`
  }));

  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-kangen-blue to-kangen-darkblue text-white py-20 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">📸 Our Community in Action</h1>
          <p className="text-2xl text-blue-100 max-w-3xl mx-auto mb-4">
            Witness the transformation: Real customers, real results, real community
          </p>
          <p className="text-lg text-blue-200 max-w-2xl mx-auto">
            {galleryImages.length} photos showcasing the Blessed & Beautiful Kangen Water family in Honolulu, Hawaii
          </p>
        </div>
      </div>

      {/* Gallery Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 via-white to-kangen-light">
        <div className="max-w-7xl mx-auto">
          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="text-4xl mb-2">📸</div>
              <p className="text-3xl font-bold text-kangen-blue">{galleryImages.length}</p>
              <p className="text-gray-600">Photos</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="text-4xl mb-2">👥</div>
              <p className="text-3xl font-bold text-kangen-blue">5000+</p>
              <p className="text-gray-600">Happy Customers</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="text-4xl mb-2">⭐</div>
              <p className="text-3xl font-bold text-kangen-blue">5.0</p>
              <p className="text-gray-600">Rating</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="text-4xl mb-2">🌺</div>
              <p className="text-3xl font-bold text-kangen-blue">Honolulu</p>
              <p className="text-gray-600">Hawaii</p>
            </div>
          </div>

          {/* Masonry Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="text-white">
                    <p className="text-sm font-semibold">Click to view</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 bg-gradient-to-r from-kangen-blue to-kangen-darkblue rounded-2xl p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Join Our Community?</h3>
            <p className="text-xl text-blue-100 mb-6">
              Experience Kangen Water for yourself and become part of our growing family
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="bg-white text-kangen-blue px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-block"
              >
                Get Free Water Sample
              </Link>
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

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-6xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white text-4xl font-bold hover:text-gray-300 z-10 bg-black bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center"
            >
              ×
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
}
