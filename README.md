# Lunor.ko - Modern Agency Website

A stunning, futuristic agency website built with Next.js, Three.js, and Framer Motion. Features immersive 3D elements, smooth animations, and a modern dark theme with neon gradients.

## 🚀 Features

- **3D Interactive Hero**: Animated sphere with particle effects using Three.js
- **Smooth Animations**: Powered by Framer Motion and GSAP
- **Dark Theme**: Modern dark design with neon blue, purple, and cyan accents
- **Responsive Design**: Fully responsive across all devices
- **Interactive Components**: 
  - Service cards with modal details
  - Portfolio grid with category filters
  - Animated tech stack display
  - Glassmorphic testimonial cards
  - Animated contact form
  - AI Chatbot
- **Performance Optimized**: Fast loading and smooth scrolling
- **SEO Ready**: Proper meta tags and semantic HTML

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (React 18)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion, GSAP
- **3D Graphics**: Three.js, React Three Fiber, Drei
- **Icons**: Lucide React

## 📦 Installation

1. **Install Dependencies**

```bash
npm install
```

2. **Run Development Server**

```bash
npm run dev
```

3. **Open Browser**

Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
lunor-agency/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles
├── components/
│   ├── Hero.tsx            # Hero section with 3D
│   ├── Scene3D.tsx         # Three.js 3D scene
│   ├── About.tsx           # About section
│   ├── Services.tsx        # Services with modals
│   ├── Portfolio.tsx       # Portfolio grid
│   ├── TechStack.tsx       # Tech stack display
│   ├── Testimonials.tsx    # Client testimonials
│   ├── Contact.tsx         # Contact form
│   ├── Footer.tsx          # Footer
│   ├── Navbar.tsx          # Navigation
│   ├── CursorGlow.tsx      # Cursor effect
│   └── ChatBot.tsx         # AI chatbot
├── public/                 # Static assets
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript config
└── package.json            # Dependencies
```

## 🎨 Customization

### Colors

Edit `tailwind.config.ts` to change the color scheme:

```typescript
colors: {
  'neon-blue': '#00D4FF',
  'neon-purple': '#9D4EDD',
  'neon-cyan': '#00FFF5',
  'dark-bg': '#0A0A0F',
  'dark-surface': '#121218',
}
```

### Content

- **Hero Section**: Edit `components/Hero.tsx`
- **Services**: Update the `services` array in `components/Services.tsx`
- **Portfolio**: Modify the `projects` array in `components/Portfolio.tsx`
- **Tech Stack**: Update the `technologies` array in `components/TechStack.tsx`
- **Testimonials**: Edit the `testimonials` array in `components/Testimonials.tsx`

### Contact Information

Update contact details in `components/Contact.tsx`:
- Email
- Phone
- Location
- Social media links

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy with one click

### Netlify

1. Connect your repository
2. Build command: `npm run build`
3. Publish directory: `.next`

### Other Platforms

The app is a standard Next.js application and can be deployed to any platform that supports Node.js.

## 🎯 Key Sections

1. **Hero**: Full-screen 3D interactive section with animated sphere
2. **About**: Company mission and values with scroll animations
3. **Services**: Interactive service cards with detailed modals
4. **Portfolio**: Filterable project showcase
5. **Tech Stack**: Animated technology badges with rotating rings
6. **Testimonials**: Client reviews with auto-scrolling
7. **Contact**: Animated form with real-time validation
8. **Footer**: Comprehensive footer with newsletter and social links

## 🤖 AI Chatbot

The website includes an AI-powered chatbot in the bottom-right corner that can:
- Answer common questions
- Provide service information
- Help with project inquiries

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Environment Variables

Create a `.env.local` file for environment-specific settings:

```env
NEXT_PUBLIC_SITE_URL=https://lunor.ko
NEXT_PUBLIC_API_URL=your-api-url
```

## 📄 License

This project is created for Lunor.ko. All rights reserved.

## 🤝 Support

For questions or support:
- Email: hello@lunor.ko
- Website: [lunor.ko](https://lunor.ko)

## 🎉 Credits

Built with ❤️ by the Lunor Team

---

**Note**: This is a modern, production-ready website template. Customize it to match your brand and requirements.

