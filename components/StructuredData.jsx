export default function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': 'https://kangen-website-rnsv4zf63-sony-hos-projects.vercel.app/#business',
        name: 'Blessed & Beautiful Kangen Water LLC',
        image: 'https://kangen-website-rnsv4zf63-sony-hos-projects.vercel.app/images/logo.png',
        description: 'Premium Kangen Water distributor in Honolulu, Hawaii. Offering K8 water ionizers, health consultations, and alkaline water solutions for homes and businesses.',
        url: 'https://kangen-website-rnsv4zf63-sony-hos-projects.vercel.app',
        telephone: '+1-808-501-9878',
        email: 'info@blessedandbeautifulkangen.com',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '3457 Waialae Avenue, Suite 201',
          addressLocality: 'Honolulu',
          addressRegion: 'HI',
          postalCode: '96816',
          addressCountry: 'US'
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 21.2839511,
          longitude: -157.8044631
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '10:00',
            closes: '18:00'
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: 'Saturday',
            opens: '10:00',
            closes: '16:00'
          }
        ],
        priceRange: '$$$$',
        servesCuisine: null,
        areaServed: {
          '@type': 'City',
          name: 'Honolulu'
        },
        founder: {
          '@type': 'Person',
          name: 'Lee Meadows',
          jobTitle: 'Owner & Kangen Water Specialist'
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '5.0',
          reviewCount: '50',
          bestRating: '5',
          worstRating: '1'
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Kangen Water Products',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Product',
                name: 'Kangen K8 Water Ionizer',
                description: '8-plate platinum ionizer producing 5 types of water',
                brand: {
                  '@type': 'Brand',
                  name: 'Enagic'
                }
              }
            }
          ]
        },
        sameAs: [
          'https://www.facebook.com/kangenwaterblessedandbeautiful',
          'https://www.google.com/maps/place/Blessed+%26+Beautiful+Kangen+Water+LLC'
        ]
      },
      {
        '@type': 'WebSite',
        '@id': 'https://kangen-website-rnsv4zf63-sony-hos-projects.vercel.app/#website',
        url: 'https://kangen-website-rnsv4zf63-sony-hos-projects.vercel.app',
        name: 'Blessed & Beautiful Kangen Water',
        description: 'Transform your water, transform your life. Premium Kangen Water solutions in Honolulu, Hawaii.',
        publisher: {
          '@id': 'https://kangen-website-rnsv4zf63-sony-hos-projects.vercel.app/#business'
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://kangen-website-rnsv4zf63-sony-hos-projects.vercel.app/?s={search_term_string}',
          'query-input': 'required name=search_term_string'
        }
      },
      {
        '@type': 'Organization',
        '@id': 'https://kangen-website-rnsv4zf63-sony-hos-projects.vercel.app/#organization',
        name: 'Blessed & Beautiful Kangen Water LLC',
        url: 'https://kangen-website-rnsv4zf63-sony-hos-projects.vercel.app',
        logo: {
          '@type': 'ImageObject',
          url: 'https://kangen-website-rnsv4zf63-sony-hos-projects.vercel.app/images/logo.png',
          width: 800,
          height: 600
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+1-808-501-9878',
          contactType: 'Customer Service',
          email: 'info@blessedandbeautifulkangen.com',
          availableLanguage: ['English'],
          areaServed: 'US'
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
