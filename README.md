# Hotel Divine Inn - Next.js Multi-Page Application

A modern, fully responsive hotel website built with Next.js 15, TypeScript, and React 19 with separate routes for each page.

## 🚀 Features

- ✅ **Next.js 15** with App Router (Latest Version)
- ✅ **TypeScript** for type safety
- ✅ **Separate Routes** for each page (Home, About, Rooms, Gallery, Reviews, Contact)
- ✅ **Client-side navigation** with smooth transitions
- ✅ **Fully responsive** design for all devices
- ✅ **Mobile-friendly** hamburger menu
- ✅ **Google Maps** integration
- ✅ **WhatsApp** booking integration
- ✅ **SEO optimized** with page-specific metadata
- ✅ **Smooth animations** and transitions
- ✅ **Font Awesome icons**
- ✅ **Google Fonts** (Inter & Playfair Display)

## 📁 Project Structure

```
hotel-divine-inn/
├── app/
│   ├── layout.tsx              # Root layout with Navbar & Footer
│   ├── page.tsx                # Home page (/)
│   ├── globals.css             # Global styles
│   ├── about/
│   │   └── page.tsx            # About page (/about)
│   ├── rooms/
│   │   └── page.tsx            # Rooms page (/rooms)
│   ├── gallery/
│   │   └── page.tsx            # Gallery page (/gallery)
│   ├── reviews/
│   │   └── page.tsx            # Reviews page (/reviews)
│   └── contact/
│       └── page.tsx            # Contact page (/contact)
├── components/
│   ├── Navbar.tsx              # Navigation with routing
│   ├── Hero.tsx                # Hero section
│   ├── About.tsx               # About preview
│   └── Footer.tsx              # Footer section
├── public/
│   └── images/                 # Place your images here
├── package.json
├── tsconfig.json
├── next.config.ts
└── README.md
```

## 🌐 Routes

| Route | Description |
|-------|-------------|
| `/` | Home page with hero and about preview |
| `/about` | Full about page with values and features |
| `/rooms` | Rooms page with detailed room information |
| `/gallery` | Photo gallery of the hotel |
| `/reviews` | Customer reviews and testimonials |
| `/contact` | Contact information, map, and directions |

## 🛠️ Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. **Install dependencies:**

```bash
npm install
```

2. **Run development server:**

```bash
npm run dev
```

3. **Open in browser:**

Visit [http://localhost:3000](http://localhost:3000)

## 🏗️ Building for Production

```bash
npm run build
npm start
```

## 📝 Customization Guide

### 1. Update Contact Information

**Navigation & Footer:**
- `components/Navbar.tsx` - WhatsApp booking link
- `components/Footer.tsx` - Address, phone, email

### 2. Add Your Images

Place images in `public/images/`:
```
public/images/
├── hero-bg.jpg
├── room-1.jpg
├── room-2.jpg
├── room-3.jpg
├── gallery-1.jpg
├── gallery-2.jpg
etc...
```

### 3. Update Page Content

Each page has its own file:
- **Home:** `app/page.tsx`
- **About:** `app/about/page.tsx`
- **Rooms:** `app/rooms/page.tsx`
- **Gallery:** `app/gallery/page.tsx`
- **Reviews:** `app/reviews/page.tsx`
- **Contact:** `app/contact/page.tsx`

### 4. Change Colors

Edit CSS variables in `app/globals.css`:
```css
:root {
  --primary-color: #d4af37;      /* Gold */
  --secondary-color: #1a1a1a;    /* Dark */
  --text-dark: #2c2c2c;
  --text-light: #666;
  --bg-light: #f8f8f8;
}
```

### 5. Update SEO Metadata

Each page has metadata. Example from `app/rooms/page.tsx`:
```typescript
export const metadata: Metadata = {
  title: "Rooms | Hotel Divine Inn",
  description: "Your description here",
};
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy automatically

### Netlify

1. Push code to GitHub
2. Visit [netlify.com](https://netlify.com)
3. Import repository
4. Deploy

### Traditional Hosting

For static export:
```bash
# Add to next.config.ts:
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
};

# Build
npm run build

# Upload 'out' folder to hosting
```

## 📱 Responsive Breakpoints

- **Desktop:** > 968px
- **Tablet:** 577px - 968px
- **Mobile:** < 576px

## 🎨 Key Components

### Navbar
- Auto-active link highlighting based on current route
- Mobile responsive with hamburger menu
- Smooth navigation between pages

### Hero Section
- Full-screen hero with overlay
- CTA buttons for booking
- Statistics display

### Page Headers
- Unique header for each page
- Gradient background
- Breadcrumb navigation ready

## 🔧 Technologies Used

- **Framework:** Next.js 15.1.6
- **Language:** TypeScript 5
- **UI Library:** React 19
- **Styling:** CSS3 with CSS Variables
- **Icons:** Font Awesome 6.4.0
- **Fonts:** Google Fonts

## 📞 Support & Contact

For the hotel:
- **Phone:** +91 9974089159
- **Email:** info@hoteldivineinn.com
- **Location:** Dwarka, Gujarat 361335

## 📄 License

Created for Hotel Divine Inn, Dwarka.

## 🙏 Acknowledgments

Built with Next.js 15 and modern web technologies for optimal performance and SEO.
