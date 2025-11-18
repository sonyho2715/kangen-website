import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import Products from '@/components/Products';
import Certifications from '@/components/Certifications';
import ROICalculator from '@/components/ROICalculator';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import LifestyleGallery from '@/components/LifestyleGallery';
import GoogleReviews from '@/components/GoogleReviews';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import FDADisclaimer from '@/components/FDADisclaimer';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Benefits />
      <Products />
      <Certifications />
      <div className="max-w-7xl mx-auto px-4">
        <ROICalculator />
        <FDADisclaimer />
      </div>
      <About />
      <Testimonials />
      <LifestyleGallery />
      <GoogleReviews />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
