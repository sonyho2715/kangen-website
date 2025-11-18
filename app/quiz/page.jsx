import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import QuizClient from './QuizClient';

export const metadata = {
  title: 'Water Type Quiz - Find Your Perfect Kangen Water | Blessed & Beautiful',
  description: 'Take our interactive quiz to discover which Kangen Water type is best for your needs. Personalized recommendations for drinking, cooking, beauty, and cleaning.',
  keywords: 'Kangen water quiz, water type assessment, alkaline water guide, pH water selector, Kangen water recommendation',
};

export default function QuizPage() {
  return (
    <>
      <Navigation />
      <QuizClient />
      <Footer />
    </>
  );
}
