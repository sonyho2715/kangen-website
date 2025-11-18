# Kangen Website - Architecture Documentation

## Technology Stack

### Core Framework
- **Next.js 15.1** - React framework with App Router
- **React 19** - UI library
- **TypeScript 5.7** - Type-safe JavaScript
- **Tailwind CSS 4** - Utility-first CSS framework

### Additional Libraries
- **Zod** - Runtime type validation for forms and API
- **Nodemailer** - Email sending for contact forms
- **React Hook Form** - Form state management
- **Lucide React** - Icon library
- **Next SEO** - SEO optimization utilities

### Deployment & Infrastructure
- **Vercel** - Hosting platform
- **GitHub** - Version control
- **Vercel Analytics** - Performance monitoring
- **Google Analytics 4** - User analytics (to be added)

---

## Project Structure

```
kangen-website/
├── app/                          # Next.js App Router
│   ├── (marketing)/              # Marketing pages group
│   │   ├── layout.tsx            # Marketing layout with nav/footer
│   │   ├── page.tsx              # Home page
│   │   ├── water-types/          # Water types page
│   │   ├── tools/                # Interactive tools
│   │   ├── quiz/                 # Kangen quiz
│   │   ├── business/             # Business opportunity
│   │   ├── resources/            # Resources & downloads
│   │   └── gallery/              # Photo gallery
│   ├── blog/                     # Blog section
│   │   ├── [slug]/               # Dynamic blog posts
│   │   └── page.tsx              # Blog listing
│   ├── api/                      # API routes
│   │   ├── contact/              # Contact form endpoint
│   │   └── subscribe/            # Newsletter subscription
│   ├── legal/                    # Legal pages group
│   │   ├── privacy-policy/
│   │   ├── terms-of-service/
│   │   └── disclaimer/
│   ├── layout.tsx                # Root layout
│   ├── not-found.tsx             # 404 page
│   ├── error.tsx                 # Error boundary
│   ├── robots.ts                 # Robots.txt generation
│   ├── sitemap.ts                # Sitemap generation
│   └── manifest.ts               # PWA manifest
│
├── components/                   # React components
│   ├── layout/                   # Layout components
│   │   ├── Navigation.tsx
│   │   ├── Footer.tsx
│   │   └── MobileMenu.tsx
│   ├── sections/                 # Page sections
│   │   ├── Hero.tsx
│   │   ├── Benefits.tsx
│   │   ├── Products.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Contact.tsx
│   │   ├── FAQ.tsx
│   │   └── Certifications.tsx
│   ├── ui/                       # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   ├── Modal.tsx
│   │   └── Accordion.tsx
│   ├── features/                 # Feature-specific components
│   │   ├── ROICalculator.tsx
│   │   ├── QuizClient.tsx
│   │   ├── GalleryClient.tsx
│   │   └── CalendlyButton.tsx
│   └── providers/                # Context providers
│       └── ClientProviders.tsx
│
├── lib/                          # Utility libraries
│   ├── utils.ts                  # General utilities
│   ├── validations.ts            # Zod schemas
│   ├── constants.ts              # App constants
│   ├── email.ts                  # Email utilities
│   └── analytics.ts              # Analytics helpers
│
├── types/                        # TypeScript type definitions
│   ├── index.ts                  # Exported types
│   ├── blog.ts                   # Blog types
│   ├── product.ts                # Product types
│   └── contact.ts                # Contact form types
│
├── content/                      # Content management
│   ├── blog/                     # Blog posts (MDX)
│   │   ├── 10-benefits-kangen-water.mdx
│   │   └── ...
│   ├── products.ts               # Product data
│   ├── testimonials.ts           # Testimonials data
│   └── faq.ts                    # FAQ data
│
├── public/                       # Static assets
│   ├── images/                   # Images
│   │   ├── products/
│   │   ├── lifestyle/
│   │   ├── certifications/
│   │   ├── backgrounds/
│   │   └── team/
│   ├── fonts/                    # Custom fonts
│   └── videos/                   # Video files
│
├── styles/                       # Global styles
│   └── globals.css               # Global CSS + Tailwind
│
├── config/                       # Configuration files
│   ├── site.ts                   # Site configuration
│   └── seo.ts                    # SEO configuration
│
├── hooks/                        # Custom React hooks
│   ├── useScrollPosition.ts
│   ├── useMediaQuery.ts
│   └── useLocalStorage.ts
│
└── tests/                        # Test files (future)
    ├── unit/
    └── e2e/
```

---

## Architecture Principles

### 1. Component Organization

**Layout Components** (`components/layout/`)
- Navigation, Footer, Headers
- Reusable across all pages
- Handle responsive behavior

**Section Components** (`components/sections/`)
- Large page sections (Hero, Benefits, Products)
- Composed of UI components
- Page-specific logic

**UI Components** (`components/ui/`)
- Small, reusable components (Button, Input, Card)
- No business logic
- Highly composable

**Feature Components** (`components/features/`)
- Complex interactive features (Calculator, Quiz)
- May have internal state
- Business logic encapsulated

### 2. File Naming Conventions

- **Components**: PascalCase (e.g., `Navigation.tsx`, `ROICalculator.tsx`)
- **Utilities**: camelCase (e.g., `utils.ts`, `email.ts`)
- **Types**: PascalCase for types, camelCase for files (e.g., `types/product.ts` exports `Product`)
- **Pages**: lowercase with hyphens (e.g., `water-types/`, `privacy-policy/`)

### 3. State Management

**Client State**
- React hooks (useState, useReducer) for local state
- Context API for shared state (theme, user preferences)
- No external state management library (keep it simple)

**Server State**
- Server Components by default (Next.js 15)
- Client Components only when needed (interactivity, hooks)
- Use `"use client"` directive explicitly

### 4. Data Fetching

**Static Content**
- Blog posts: MDX files in `/content/blog/`
- Products, FAQs, Testimonials: TypeScript files in `/content/`
- Imported directly in Server Components

**Dynamic Data**
- Contact form: API route + Nodemailer
- Newsletter: API route + email service
- Analytics: Client-side tracking

### 5. Styling Strategy

**Tailwind CSS 4**
- Utility-first approach
- Custom theme in `tailwind.config.ts`
- Color palette: kangen-blue, kangen-darkblue, kangen-light, kangen-accent
- Component classes in separate files if complex

**Responsive Design**
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px), 2xl (1536px)
- Test on mobile, tablet, desktop

### 6. TypeScript Standards

**Strict Mode**
- `strict: true` in tsconfig.json
- No implicit any
- Proper type inference

**Type Organization**
- Shared types in `/types/`
- Component-specific types in component file
- API types in `/types/`

### 7. SEO Strategy

**Metadata API**
- Use Next.js 15 Metadata API
- Unique title/description per page
- Open Graph and Twitter cards
- Structured data (JSON-LD)

**Performance**
- Next.js Image component for all images
- Lazy loading for below-fold content
- Font optimization with next/font
- Core Web Vitals optimization

### 8. API Routes

**Contact Form** (`/api/contact`)
- POST endpoint
- Zod validation
- Rate limiting (future)
- Nodemailer integration
- Success/error responses

**Newsletter** (`/api/subscribe`)
- POST endpoint
- Email validation
- Integration with email service (Mailchimp/ConvertKit)

### 9. Environment Variables

**Required Variables**
```env
# Email Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
EMAIL_FROM=info@blessedandbeautifulkangen.com
EMAIL_TO=leemeadows@example.com

# Analytics (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_FACEBOOK_PIXEL_ID=xxxxxxxxxx

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://kangen-website.vercel.app
```

### 10. Performance Targets

**Core Web Vitals**
- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1

**Lighthouse Scores**
- Performance: > 90
- Accessibility: > 95
- Best Practices: > 95
- SEO: 100

---

## Deployment Strategy

### Development
```bash
npm run dev        # Run development server
```

### Production Build
```bash
npm run build      # Build for production
npm run start      # Start production server locally
```

### Vercel Deployment
- Automatic deployments from `main` branch
- Preview deployments for all PRs
- Environment variables set in Vercel dashboard
- Custom domain: kangen-website.vercel.app (to be changed to custom domain)

---

## Future Enhancements

### Phase 1 (Current)
- ✅ TypeScript migration
- ✅ Next.js 15 upgrade
- ✅ Tailwind CSS 4
- ✅ Proper architecture

### Phase 2 (Next 2 weeks)
- [ ] Google Analytics 4 integration
- [ ] Performance optimization (image optimization, lazy loading)
- [ ] Blog with MDX support
- [ ] SEO improvements (meta tags, schema markup)

### Phase 3 (2-4 weeks)
- [ ] Interactive tools (ROI calculator, water quality checker)
- [ ] Enhanced contact forms with auto-responder
- [ ] Customer testimonials with filtering
- [ ] Newsletter integration

### Phase 4 (1-2 months)
- [ ] Email marketing automation
- [ ] Customer portal
- [ ] Appointment booking system (Calendly integration)
- [ ] Referral program

### Phase 5 (Future)
- [ ] E-commerce for consumables
- [ ] Multi-language support
- [ ] CMS integration (Contentful/Sanity)
- [ ] Advanced analytics dashboard

---

## Maintenance Guidelines

### Code Quality
- Use ESLint for linting
- Use Prettier for formatting
- Write descriptive commit messages
- Follow conventional commits

### Testing (Future)
- Unit tests with Jest
- E2E tests with Playwright
- Visual regression testing

### Documentation
- Keep this ARCHITECTURE.md updated
- Document complex components
- Update README.md for setup instructions

---

## Security Considerations

- Environment variables never committed to Git
- Rate limiting on API routes (future)
- CSRF protection on forms (future)
- Content Security Policy headers
- Regular dependency updates

---

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile Safari (iOS 12+)
- Chrome Mobile (Android 8+)

---

**Last Updated**: November 17, 2025
**Maintainer**: Sony Ho (mrsonyho@gmail.com)
**Version**: 2.0.0
