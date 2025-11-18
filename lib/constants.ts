/**
 * Application-wide constants
 */

export const SITE_NAME = 'Blessed & Beautiful Kangen Water';
export const SITE_DESCRIPTION =
  'Transform your water, transform your life. Discover pure, healthy alkaline Kangen water from Lee Meadows in Honolulu, Hawaii.';

export const BUSINESS_INFO = {
  name: 'Blessed & Beautiful Kangen Water LLC',
  owner: 'Lee Meadows',
  phone: '+1-808-501-9878',
  email: 'info@blessedandbeautifulkangen.com',
  address: {
    street: '3457 Waialae Avenue, Suite 201',
    city: 'Honolulu',
    state: 'HI',
    zip: '96816',
    country: 'US',
  },
  hours: {
    weekday: { open: '10:00', close: '18:00' },
    saturday: { open: '10:00', close: '16:00' },
    sunday: 'Closed',
  },
  coordinates: {
    lat: 21.2839511,
    lng: -157.8044631,
  },
} as const;

export const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/kangenwaterblessedandbeautiful',
  instagram: '',
  twitter: '',
  youtube: '',
} as const;

export const ENAGIC_LINKS = {
  k8Shop: 'https://leemeadows.ecokangen.com/en_US/shop/product/k8',
  anespaShop: 'https://leemeadows.ecokangen.com/en_US/shop/product/anespa',
  ukonShop: 'https://leemeadows.ecokangen.com/en_US/shop/product/ukon',
} as const;

export const WATER_TYPES = {
  strongKangen: {
    ph: 11.0,
    name: 'Strong Kangen Water',
    description: 'Heavy-duty cleaning and food preparation',
    color: '#0066CC',
  },
  kangen: {
    ph: [8.5, 9.0, 9.5],
    name: 'Kangen Water',
    description: 'Drinking water for health and wellness',
    color: '#00AAFF',
  },
  neutral: {
    ph: 7.0,
    name: 'Clean Water',
    description: 'Pure filtered water for medication and baby formula',
    color: '#66DD66',
  },
  acidic: {
    ph: [4.0, 6.0],
    name: 'Beauty Water',
    description: 'Gentle acidic water for skin and hair care',
    color: '#FFAA00',
  },
  strongAcidic: {
    ph: 2.7,
    name: 'Strong Acidic Water',
    description: 'Disinfecting and sanitizing',
    color: '#FF6600',
  },
} as const;

export const NAVIGATION_LINKS = [
  { href: '/#benefits', label: 'Benefits' },
  { href: '/water-types', label: 'Water Types' },
  { href: '/tools', label: 'Tools' },
  { href: '/quiz', label: 'Quiz' },
  { href: '/business', label: 'Business' },
  { href: '/resources', label: 'Resources' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/#faq', label: 'FAQ' },
] as const;

export const PRODUCT_FEATURES = {
  k8: [
    '8 Platinum-Dipped Titanium Plates',
    'Touchscreen LCD Display',
    '5 Types of Water',
    'Auto-Cleaning Technology',
    'Multi-Voltage Worldwide',
    '5-Year Warranty',
  ],
  anespa: [
    'Removes 100% Chlorine',
    'Moisturizes Skin & Hair',
    'Natural Hot Spring Minerals',
    'pH 6.8-7.5 Alkaline Water',
  ],
  emguarde: [
    '4-Meter Radius Protection',
    '3MHz to 1000MHz Range',
    'Patented Technology',
    '5+ Year Lifespan',
  ],
  ukon: [
    '100% Organic & Vegetarian',
    'Rich in Curcumin Antioxidants',
    'Grown on Enagic Farms',
    'No Artificial Additives',
  ],
} as const;

export const HEALTH_BENEFITS = [
  {
    icon: '💪',
    title: 'Improved Hydration',
    description: 'Micro-clustered water molecules penetrate cells more effectively.',
  },
  {
    icon: '⚡',
    title: 'Increased Energy',
    description: 'Experience sustained energy levels with hydrogen-rich water.',
  },
  {
    icon: '🧬',
    title: 'Powerful Antioxidants',
    description: 'Molecular hydrogen acts as an efficient antioxidant.',
  },
  {
    icon: '🫧',
    title: 'Detoxification',
    description: 'Flush toxins and support natural detoxification processes.',
  },
  {
    icon: '🛡️',
    title: 'Immune Support',
    description: 'Strengthen your immune system with mineral-rich alkaline water.',
  },
  {
    icon: '🧘',
    title: 'Better Digestion',
    description: 'Improved pH balance helps optimize digestive health.',
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: 'What is Kangen Water?',
    answer:
      'Kangen Water is alkaline, hydrogen-rich, ionized water produced by Enagic machines. "Kangen" means "return to origin" in Japanese, representing water that helps restore your body to its natural balanced state.',
  },
  {
    question: 'How does the K8 machine work?',
    answer:
      'The K8 uses electrolysis to separate water into alkaline and acidic streams. Its 8 platinum-dipped titanium plates create ionized water with different pH levels for various uses.',
  },
  {
    question: 'Is Kangen Water safe to drink?',
    answer:
      'Yes, Kangen Water is completely safe. Enagic machines are certified by ISO, WQA, and other international organizations. The alkaline water (pH 8.5-9.5) is ideal for daily drinking.',
  },
  {
    question: 'How long does the K8 machine last?',
    answer:
      'The K8 comes with a 5-year warranty and has an average lifespan of 30 years with proper maintenance. Regular cleaning and filter replacements ensure optimal performance.',
  },
  {
    question: 'Can I try Kangen Water before buying?',
    answer:
      'Yes! We offer free water samples. Contact us to schedule a demo or pick up a sample bottle to experience the difference.',
  },
  {
    question: 'Do you offer financing?',
    answer:
      'Yes, we offer flexible payment plans through Enagic. Contact us to learn more about financing options.',
  },
] as const;
