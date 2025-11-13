# ⚡ Quick Start Guide - Lunor.ko

Get your stunning agency website running in **3 simple steps**!

## 🎯 Prerequisites

- Node.js v18+ installed ([Download](https://nodejs.org/))
- A code editor (VS Code recommended)
- Terminal/Command Prompt

## 🚀 3-Step Launch

### Step 1: Install Dependencies (1 minute)

Open terminal in the project folder and run:

```bash
npm install
```

☕ Grab a coffee while packages install (~1-2 minutes)

### Step 2: Start Development Server (10 seconds)

```bash
npm run dev
```

### Step 3: Open Browser

Navigate to: **http://localhost:3000**

🎉 **That's it!** Your website is live!

---

## 🎨 First Customizations (5 minutes)

### 1. Update Company Name

**File**: `app/layout.tsx`

```typescript
export const metadata: Metadata = {
  title: 'YourCompany - Building Digital Innovation', // Change this
  description: 'Your custom description', // And this
}
```

### 2. Change Contact Info

**File**: `components/Contact.tsx`

Find and update:
```typescript
{
  icon: Mail,
  label: 'Email',
  value: 'your-email@example.com', // Your email
  link: 'mailto:your-email@example.com',
},
{
  icon: Phone,
  label: 'Phone',
  value: '+1 (555) 123-4567', // Your phone
  link: 'tel:+15551234567',
},
```

### 3. Add Your Projects

**File**: `components/Portfolio.tsx`

Add to the `projects` array:
```typescript
{
  title: 'Your Project Name',
  category: 'Web', // or 'Mobile', 'AI/ML', etc.
  description: 'Brief description',
  image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  technologies: ['React', 'Node.js', 'MongoDB'],
  link: 'https://your-project.com',
  github: 'https://github.com/your-repo',
},
```

---

## 🎬 What You Get

### ✅ Homepage Features
- **Hero** with 3D animated sphere
- **About** section with your mission
- **Services** showcase with 6 service cards
- **Portfolio** with project filtering
- **Tech Stack** animated display
- **Testimonials** carousel
- **Contact** form with animations
- **AI Chatbot** (bottom-right)
- **Project Estimator** (bottom-left)

### ✅ Design Features
- Dark theme with neon accents
- Smooth animations throughout
- Fully responsive (mobile, tablet, desktop)
- Glassmorphism effects
- Interactive hover states
- Scroll-triggered animations

### ✅ Technical Features
- Next.js 14 (latest)
- TypeScript for type safety
- Tailwind CSS for styling
- Framer Motion for animations
- Three.js for 3D graphics
- SEO optimized
- Performance optimized

---

## 🎯 Common Tasks

### Update Colors

**File**: `tailwind.config.ts`

```typescript
colors: {
  'neon-blue': '#00D4FF',    // Change these
  'neon-purple': '#9D4EDD',  // to your
  'neon-cyan': '#00FFF5',    // brand colors
}
```

### Add Services

**File**: `components/Services.tsx`

```typescript
const services = [
  {
    icon: Code, // Import icon from 'lucide-react'
    title: 'Your Service',
    shortDesc: 'Brief description',
    fullDesc: 'Detailed description',
    features: ['Feature 1', 'Feature 2'],
    gradient: 'from-blue-500 to-cyan-500',
  },
  // ... add more
]
```

### Modify Hero Text

**File**: `components/Hero.tsx`

```typescript
<h1>
  <span className="block mb-4">We Build the</span>
  <span className="text-gradient glow-text">Future</span>
</h1>
```

---

## 📱 Testing on Mobile

### Local Network Testing

1. Find your computer's IP address:
   - **Windows**: `ipconfig` in CMD
   - **Mac/Linux**: `ifconfig` in Terminal

2. On your phone, visit:
   ```
   http://YOUR-IP-ADDRESS:3000
   ```

Example: `http://192.168.1.100:3000`

---

## 🚀 Deploy to Production

### Option 1: Vercel (Easiest - Free)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repo
5. Click "Deploy"

⏱️ **Live in 2 minutes!**

### Option 2: Netlify (Also Free)

1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Select your repo
5. Deploy

### Option 3: Your Own Server

```bash
npm run build
npm start
```

Serve on port 3000 or use a process manager like PM2.

---

## 🐛 Troubleshooting

### Port Already in Use?

```bash
npm run dev -- -p 3001
```

### Errors After Install?

```bash
rm -rf node_modules package-lock.json
npm install
```

### 3D Scene Not Loading?

Check browser console. Ensure WebGL is supported.

### Animations Laggy?

Reduce particle count in `components/Scene3D.tsx`:
```typescript
const particlesCount = 500 // Reduce from 1000
```

---

## 📚 Next Steps

1. ✅ Customize content
2. ✅ Add your projects
3. ✅ Update contact info
4. ✅ Change colors to match brand
5. ✅ Add your testimonials
6. ✅ Test on multiple devices
7. ✅ Deploy to production

---

## 🎓 Learn More

- **Full Documentation**: See `README.md`
- **Feature List**: See `FEATURES.md`
- **Installation Guide**: See `INSTALLATION.md`

---

## 💡 Pro Tips

1. **Hot Reload**: Changes appear instantly while dev server runs
2. **Component-Based**: Each section is a separate component
3. **TypeScript**: Enjoy autocomplete and type checking
4. **Tailwind**: Use utility classes for quick styling
5. **Mobile First**: Test on mobile devices early

---

## 🆘 Need Help?

- Check console for errors
- Review documentation files
- Contact: hello@lunor.ko

---

## 🎉 You're All Set!

Your modern, stunning agency website is ready to impress clients and showcase your work.

**Happy coding!** 🚀

---

Built with ❤️ by Lunor Team

