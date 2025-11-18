import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import GalleryClient from './GalleryClient';

export const metadata = {
  title: 'Community Gallery - Blessed & Beautiful Kangen Water',
  description: 'View 147+ photos of our thriving Kangen Water community in Honolulu, Hawaii. Real customers, real results, real transformations with alkaline ionized water.',
  keywords: 'Kangen water photos, Honolulu community, customer testimonials, water ionizer results, alkaline water Hawaii',
};

export default function GalleryPage() {
  return (
    <>
      <Navigation />
      <GalleryClient />
      <Footer />
    </>
  );
}
