# 🚀 Lunor.ko Installation Guide

## Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** or **yarn** package manager

## Quick Start

### 1. Install Dependencies

Open your terminal in the project directory and run:

```bash
npm install
```

This will install all required dependencies including:
- Next.js
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Three.js
- And more...

### 2. Run Development Server

Start the development server:

```bash
npm run dev
```

The website will be available at **http://localhost:3000**

### 3. Build for Production

When you're ready to deploy:

```bash
npm run build
npm start
```

## Installation Steps (Detailed)

### Step 1: Verify Node.js Installation

Check your Node.js version:

```bash
node --version
```

You should see v18.0.0 or higher.

### Step 2: Install Dependencies

```bash
# Using npm
npm install

# Or using yarn
yarn install

# Or using pnpm
pnpm install
```

### Step 3: Development

```bash
npm run dev
```

Your browser should automatically open to http://localhost:3000

If not, manually navigate to that URL.

## What You'll See

Upon successful installation and running the dev server, you'll see:

1. **Hero Section** - 3D animated sphere with particle effects
2. **About Section** - Company mission and features
3. **Services Section** - Interactive service cards
4. **Portfolio Section** - Project showcase with filters
5. **Tech Stack** - Animated technology display
6. **Testimonials** - Client feedback
7. **Contact Form** - Interactive contact section
8. **AI Chatbot** - Bottom-right corner
9. **Project Estimator** - Bottom-left corner

## Common Issues & Solutions

### Issue: Port 3000 already in use

**Solution**: Use a different port

```bash
npm run dev -- -p 3001
```

### Issue: Module not found errors

**Solution**: Clear cache and reinstall

```bash
rm -rf node_modules
rm package-lock.json
npm install
```

### Issue: TypeScript errors

**Solution**: Ensure TypeScript is properly installed

```bash
npm install -D typescript @types/react @types/node
```

### Issue: Three.js warnings

**Solution**: These are usually harmless. The 3D elements should still work.

## Development Tips

### Hot Reload

The development server supports hot reload. Changes to:
- Components
- Styles
- Pages

Will automatically refresh in the browser.

### Component Structure

All main components are in the `components/` directory:
- `Hero.tsx` - Main hero section
- `Scene3D.tsx` - Three.js 3D scene
- `Services.tsx` - Services section
- `Portfolio.tsx` - Portfolio showcase
- `Contact.tsx` - Contact form
- etc.

### Customization

To customize content:

1. **Colors**: Edit `tailwind.config.ts`
2. **Content**: Edit respective component files
3. **Styles**: Modify `app/globals.css`

## Next Steps

1. ✅ Customize the content in each component
2. ✅ Update contact information
3. ✅ Add your own projects to portfolio
4. ✅ Modify color scheme if desired
5. ✅ Test on different devices
6. ✅ Deploy to production

## Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

### Deploy to Netlify

1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Build settings should auto-detect
6. Click "Deploy"

## Support

If you encounter any issues:

1. Check the console for errors
2. Refer to the README.md
3. Contact: hello@lunor.ko

## Performance

The website is optimized for:
- ⚡ Fast loading times
- 🎨 Smooth animations
- 📱 Mobile responsiveness
- ♿ Accessibility
- 🔍 SEO

Enjoy building with Lunor.ko! 🎉

