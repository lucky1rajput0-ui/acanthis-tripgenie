# 🌍 Acanthis Journey - Lead Generation Website

A professional, modern **lead-generation website** for Acanthis Journey, specializing in national and international trip planning services.

## 🚀 Features

### **Pages & Sections**

1. **Home Page** (`/`)
   - Eye-catching hero section with clear value proposition
   - Why Choose Us section (6 feature cards)
   - Popular destinations showcase (8 destinations)
   - Call-to-action sections
   - Testimonials from satisfied customers
   - Mobile responsive design

2. **Trip Planner** (`/planner`)
   - Easy-to-use form to capture leads
   - Collects: Origin, Destination, Duration, Number of People, Travel Style
   - Automatic WhatsApp integration for lead follow-up
   - Confirmation page with next steps

3. **Thank You Page** (`/thank-you`)
   - Success confirmation after form submission
   - Next steps guidance
   - WhatsApp and call contact options
   - Professional follow-up messaging

4. **Destinations Page** (`/destinations`)
   - Showcases 8+ popular destinations
   - Highlights, best time to visit, and duration
   - Direct links to plan trips for each destination
   - Custom trip option for other destinations

5. **About Us Page** (`/about`)
   - Company story and mission
   - Statistics (customers, destinations, happy travelers)
   - Team member profiles
   - Core values display

6. **Contact Page** (`/contact`)
   - Contact form with WhatsApp integration
   - Direct phone, WhatsApp, and email contacts
   - Frequently Asked Questions (FAQ)
   - Business hours and support information

### **Technical Stack**

- **Framework**: Next.js 16.1.6
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Frontend**: React 19.2.3
- **Integrations**: WhatsApp API, Phone links

### **Design Highlights**

✨ **Modern & Professional**
- Gradient backgrounds with modern color scheme (Indigo & Purple)
- Smooth animations and hover effects
- Clean typography and spacing
- Mobile-first responsive design

🎯 **Conversion Optimized**
- Multiple clear CTAs (Call-to-action buttons)
- Minimal form fields for quick submissions
- Trust signals (testimonials, statistics)
- Urgency messaging ("Get reply within 30 minutes")

📱 **Mobile Responsive**
- Fully responsive on all devices
- Touch-friendly buttons and forms
- Optimized navigation for mobile

## 📋 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Clone the repository
cd acanthis-tripgenie

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:3000`

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
acanthis-tripgenie/
├── app/
│   ├── components/
│   │   ├── Header.tsx       # Navigation header
│   │   └── Footer.tsx       # Footer component
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   ├── globals.css          # Global styles
│   ├── planner/
│   │   └── page.tsx         # Trip planner form
│   ├── thank you/
│   │   └── page.tsx         # Thank you page
│   ├── about/
│   │   └── page.tsx         # About page
│   ├── destinations/
│   │   └── page.tsx         # Destinations showcase
│   └── contact/
│       └── page.tsx         # Contact page
├── public/                  # Static assets
├── package.json            # Dependencies
├── tsconfig.json           # TypeScript config
└── next.config.ts          # Next.js config
```

## 🔄 Lead Generation Flow

1. **User arrives at home page** → Sees compelling value propositions
2. **Clicks "Start Planning"** → Navigates to `/planner`
3. **Fills out trip preferences** → Submits form
4. **Redirected to WhatsApp** → Sales team receives lead
5. **Led to thank you page** → Awaits follow-up

## 📊 WhatsApp Integration

The form integrates with WhatsApp Business API:
- **Phone Number**: +91 98306 39007
- **Message Template**: Automatically formatted with trip details
- **Follow-up**: Direct conversation with sales team

## 🎨 Color Scheme

- **Primary**: Indigo (#4F46E5)
- **Secondary**: Purple (#A855F7)
- **Accent**: Blue (#3B82F6)
- **Text**: Gray (#1F2937)
- **Background**: White & Gradients

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔍 SEO Features

- Semantic HTML structure
- Meta tags for social sharing
- Optimized page titles and descriptions
- Mobile-friendly design
- Fast page load times (Next.js optimization)

## ✅ Customization Guide

### Update Business Phone Number
- Search for `9830639007` (or `919830639007`) across files
- Replace with your WhatsApp Business number

### Change Color Scheme
- Open `app/globals.css` or component files
- Update Tailwind color classes (indigo, purple, etc.)
- See: `from-indigo-600`, `text-indigo-700`, etc.

### Update Business Info
- **Company Name**: "Acanthis Journey" appears throughout (replace as needed)
- **Destinations**: Edit in `/destinations/page.tsx`
- **Team**: Edit in `/about/page.tsx`
- **Testimonials**: Edit in home page

### Add Social Media Links
- Open `app/components/Footer.tsx`
- Update social media URLs
- Add your Instagram, Facebook, Twitter links

## 🚀 Deployment

### Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Deploy to Other Platforms
- Deploy to Netlify, Heroku, or AWS
- Build: `npm run build`
- Start: `npm start`

## 📈 Growth Tips

1. **Add Blog Section** - Create travel guides for SEO
2. **Email Capture** - Add newsletter signup
3. **Analytics** - Integrate Google Analytics
4. **Reviews** - Add booking.com/tripadvisor reviews
5. **Video** - Add travel destination videos
6. **Chat Widget** - Add live chat for instant support

## 🛠 Troubleshooting

**Port Already in Use**
```bash
# Use different port
npm run dev -- -p 3001
```

**Build Issues**
```bash
# Clear cache and reinstall
rm -rf .next node_modules package-lock.json
npm install
npm run dev
```

## 📞 Support Contact

- **WhatsApp**: +91 98306 39007
- **Email**: acanthisjourney@gmail.com
- **Phone**: +91 98306 39007
- **Hours**: 10 AM - 10 PM, 7 days a week

## 📄 License

This website is proprietary to Acanthis Journey.

---

**Built with ❤️ for Acanthis Journey** | *Creating unforgettable travel memories*
