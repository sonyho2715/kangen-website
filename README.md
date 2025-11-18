# Kangen Website - Blessed & Beautiful Kangen Water

Modern, high-performance website for Lee Meadows' Kangen Water business in Honolulu, Hawaii. Built with Next.js 15, TypeScript, and Tailwind CSS 4.

![Kangen Water](./public/images/logo.png)

## Overview

This website showcases Enagic's Kangen Water products, educates visitors about alkaline water benefits, and provides tools for lead generation and customer engagement.

**Live Site**: [kangen-website.vercel.app](https://kangen-website.vercel.app)

## Features

### Current Features
- 🏠 **Modern Landing Page** - Hero with video demo, benefits, products showcase
- 💧 **Water Types Guide** - Interactive guide to 5 types of Kangen water
- 🧮 **ROI Calculator** - Show savings vs. bottled water
- 📝 **Interactive Quiz** - Help customers find their ideal water type
- 📸 **Photo Gallery** - Lifestyle images and customer photos
- 📚 **Blog** - Educational content about Kangen water
- 💼 **Business Opportunity** - Information for potential distributors
- 📞 **Contact Form** - Email integration with Nodemailer
- 🔍 **SEO Optimized** - Schema.org markup, meta tags, sitemap
- 📱 **Fully Responsive** - Mobile-first design
- ⚡ **Performance** - Optimized for Core Web Vitals

## Technology Stack

### Core
- **[Next.js 15.1](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI library
- **[TypeScript 5.7](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS

### Libraries
- **Zod** - Schema validation
- **React Hook Form** - Form state management
- **Lucide React** - Icon library
- **Nodemailer** - Email sending

### Deployment
- **Vercel** - Hosting and deployments
- **GitHub** - Version control

## Getting Started

### Prerequisites

- Node.js 24.x or higher
- npm 10.x or higher
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sonyho2715/kangen-website.git
   cd kangen-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```

   Edit `.env.local` with your values.

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000)** in your browser

### Building for Production

```bash
npm run build       # Build the application
npm run start       # Start production server
```

## Project Structure

```
kangen-website/
├── app/                    # Next.js App Router pages
├── components/             # React components
├── lib/                    # Utilities and helpers
├── types/                  # TypeScript types
├── content/                # Content management
├── public/                 # Static assets
└── config/                 # Configuration files
```

See [ARCHITECTURE.md](./ARCHITECTURE.md) for detailed documentation.

## Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript compiler check
npm run format       # Format code with Prettier
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push to GitHub
2. Import repository to Vercel
3. Configure environment variables
4. Deploy!

## Documentation

- [ARCHITECTURE.md](./ARCHITECTURE.md) - Comprehensive architecture documentation

## Support

For questions or issues:
- **Developer**: Sony Ho (mrsonyho@gmail.com)
- **Business Owner**: Lee Meadows
- **GitHub Issues**: [Create an issue](https://github.com/sonyho2715/kangen-website/issues)

## License

UNLICENSED - Private business website

---

**Version**: 2.0.0  
**Last Updated**: November 17, 2025  
**Built with**: Next.js 15 + TypeScript + Tailwind CSS 4  
**Deployed on**: Vercel
