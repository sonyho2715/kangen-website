import '../styles/globals.css';
import ClientProviders from '@/components/ClientProviders';
import StructuredData from '@/components/StructuredData';

export const metadata = {
  metadataBase: new URL('https://kangen-website-rnsv4zf63-sony-hos-projects.vercel.app'),
  title: {
    default: 'Blessed & Beautiful Kangen Water - Honolulu, Hawaii',
    template: '%s | Blessed & Beautiful Kangen Water'
  },
  description: 'Transform your water, transform your life. Discover pure, healthy alkaline Kangen water from Lee Meadows in Honolulu, Hawaii. K8 ionizer systems, free samples, and expert consultation.',
  keywords: 'Kangen water, alkaline water, water ionizer, Honolulu Hawaii, Lee Meadows, Enagic, K8 machine, ionized water, hydrogen water, healthy water Hawaii',
  authors: [{ name: 'Lee Meadows' }],
  creator: 'Blessed & Beautiful Kangen Water LLC',
  publisher: 'Blessed & Beautiful Kangen Water LLC',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kangen-website-rnsv4zf63-sony-hos-projects.vercel.app',
    siteName: 'Blessed & Beautiful Kangen Water',
    title: 'Blessed & Beautiful Kangen Water - Honolulu, Hawaii',
    description: 'Transform your water, transform your life. Premium Kangen Water K8 systems, free samples, and expert consultation in Honolulu, Hawaii.',
    images: [
      {
        url: 'https://kangen-website-rnsv4zf63-sony-hos-projects.vercel.app/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'Blessed & Beautiful Kangen Water',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blessed & Beautiful Kangen Water - Honolulu, Hawaii',
    description: 'Transform your water, transform your life. Premium Kangen Water systems in Honolulu, Hawaii.',
    images: ['https://kangen-website-rnsv4zf63-sony-hos-projects.vercel.app/images/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add Google Search Console verification when available
    // google: 'your-google-verification-code',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body className="bg-white">
        {children}
        <ClientProviders />
      </body>
    </html>
  );
}
