# Quick Start Guide - Blessed & Beautiful Kangen Water Website

## ⚡ Get Running in 2 Minutes

### Step 1: Install & Run
```bash
# Navigate to project folder
cd kangen-website

# Install dependencies (first time only)
npm install

# Start development server
npm run dev
```

### Step 2: Open Browser
Visit: **http://localhost:3000** ✅

That's it! Your website is running locally!

---

## 📁 Project Structure Overview

```
kangen-website/
├── components/          ← All website sections
│   ├── Navigation.jsx   (Header with menu)
│   ├── Hero.jsx         (Main banner)
│   ├── Benefits.jsx     (Why Kangen Water)
│   ├── Products.jsx     (K8 Machine details)
│   ├── About.jsx        (About Lee)
│   ├── Testimonials.jsx (Customer reviews)
│   ├── Contact.jsx      (Contact form)
│   └── Footer.jsx       (Bottom section)
├── app/
│   ├── page.jsx         (Main page - combines all sections)
│   ├── layout.jsx       (Website wrapper)
│   └── api/
│       └── contact/     (Backend form handler)
└── styles/
    └── globals.css      (Website styling)
```

---

## 🎨 Making Changes

### Update Contact Info
Edit `components/Contact.jsx` - Line 40+:
- Phone number
- Email
- Address
- Hours

### Update Business Details
Edit `components/About.jsx`:
- Lee's bio
- Business description
- Testimonials

### Change Colors
Edit `tailwind.config.js`:
```javascript
kangen: {
  blue: '#0066CC',
  darkblue: '#003D99',
  // etc...
}
```

### Update Testimonials
Edit `components/Testimonials.jsx` - testimonials array

---

## ✅ Common Tasks

### Add a New Section
1. Create new file in `components/MySection.jsx`
2. Add to `app/page.jsx`
3. Done!

### Update Text Content
Find the text in any component file (`.jsx`) and edit it

### Change Images/Icons
We use emoji icons (💧, 👩‍💼, etc.) - easy to update!

### Fix Styling
Edit `styles/globals.css` or use Tailwind classes in components

---

## 🚀 Deploy to Live Website

### Easiest Option: Vercel (FREE)

1. Push code to GitHub
2. Go to https://vercel.com
3. Click "New Project"
4. Select your GitHub repo
5. Click "Deploy"
6. ✅ Live!

**Get custom domain:**
- Buy from GoDaddy/Namecheap
- Add to Vercel Settings
- Done!

### Alternative: Netlify
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod
```

---

## 🧪 Test Your Website

### Check Mobile Version
- Resize browser window
- Or use DevTools (F12) → Mobile view

### Test Contact Form
- Fill out and submit
- Check console for success/error

### Test Links
- Click all navigation links
- Verify smooth scrolling

---

## 📋 Customization Checklist

- [ ] Update phone number
- [ ] Update email address
- [ ] Update physical address
- [ ] Update hours of operation
- [ ] Update About Lee section
- [ ] Add/update testimonials
- [ ] Choose custom colors
- [ ] Add logo if desired
- [ ] Test contact form
- [ ] Deploy to live site

---

## 🆘 Troubleshooting

### Port 3000 Already in Use?
```bash
npm run dev -- -p 3001
```
Then visit: `http://localhost:3001`

### Styling Looks Wrong?
```bash
npm run build
npm start
```

### Contact Form Not Working?
- Check browser console (F12)
- Make sure backend is running
- Verify email config in `.env.local`

### Can't See Changes?
- Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- Clear browser cache

---

## 📚 Useful Commands

```bash
# Development
npm run dev              # Start dev server (port 3000)

# Production
npm run build            # Build for production
npm start                # Run production build

# Debugging
npm run lint             # Check for code issues

# Dependencies
npm install              # Install all packages
npm update               # Update packages
npm outdated             # See outdated packages
```

---

## 🎯 Next Steps

1. **Customize Content**
   - Update all business information
   - Add your own testimonials
   - Add high-quality photos

2. **Set Up Email**
   - Enable contact form emails
   - Test submissions

3. **Deploy**
   - Push to GitHub
   - Deploy to Vercel/Netlify
   - Get custom domain

4. **Market It**
   - Share on social media
   - Send to email list
   - Tell customers about it!

---

## 📞 Quick Reference

**Business Location:**
3457 Waialae Ave, Ste 201
Honolulu, Hawaii 96816

**Phone:**
(808) 501-9878

**Email:**
info@blessedandbeautifulkangen.com

**Owner:**
Lee Meadows

---

## 💡 Tips

✅ Save work frequently
✅ Test on mobile regularly
✅ Keep backups on GitHub
✅ Deploy to Vercel for free hosting
✅ Use custom domain for professionalism

---

**You're all set! Enjoy building! 🚀**

Questions? Check README.md or DEPLOYMENT.md for more details.
