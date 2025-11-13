# 📁 Lunor.ko - Project Structure

## Directory Layout

```
Lunor/
├── 📂 app/
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Main homepage
│   └── globals.css          # Global styles & animations
│
├── 📂 components/
│   ├── Hero.tsx             # 🎯 Hero section with 3D
│   ├── Scene3D.tsx          # 🌐 Three.js 3D scene
│   ├── About.tsx            # 📖 About section
│   ├── Services.tsx         # 💼 Services with modals
│   ├── Portfolio.tsx        # 🎨 Portfolio showcase
│   ├── TechStack.tsx        # 💻 Tech stack display
│   ├── Testimonials.tsx     # 💬 Client testimonials
│   ├── Contact.tsx          # 📧 Contact form
│   ├── Footer.tsx           # 🔗 Footer section
│   ├── Navbar.tsx           # 🧭 Navigation bar
│   ├── CursorGlow.tsx       # ✨ Cursor effect
│   ├── ChatBot.tsx          # 🤖 AI chatbot
│   └── ProjectEstimator.tsx # 🧮 Cost estimator
│
├── 📂 public/               # Static assets (images, etc.)
│
├── 📄 Configuration Files
├── package.json             # Dependencies
├── tsconfig.json            # TypeScript config
├── tailwind.config.ts       # Tailwind settings
├── postcss.config.js        # PostCSS config
├── next.config.js           # Next.js config
├── .eslintrc.json           # ESLint rules
└── .gitignore               # Git ignore rules
│
└── 📄 Documentation
    ├── README.md            # Main documentation
    ├── QUICKSTART.md        # Quick start guide
    ├── INSTALLATION.md      # Installation guide
    ├── FEATURES.md          # Complete feature list
    └── PROJECT_STRUCTURE.md # This file
```

## Component Breakdown

### 🎯 Core Pages (app/)

#### `layout.tsx`
- Root layout wrapper
- Metadata configuration
- Font loading
- Global providers

#### `page.tsx`
- Main homepage
- Imports all sections
- Renders components in order
- Includes effects (cursor, spotlight)

#### `globals.css`
- Tailwind directives
- Custom utilities
- Animations (float, glow, slide)
- Scrollbar styles
- Background effects

---

### 🧩 Components (components/)

#### Navigation & Layout

**`Navbar.tsx`** (116 lines)
- Fixed navigation bar
- Desktop & mobile menus
- Smooth scroll links
- Glass effect on scroll

**`Footer.tsx`** (185 lines)
- Company links
- Newsletter signup
- Social media
- Scroll to top button

---

#### Hero & 3D

**`Hero.tsx`** (147 lines)
- Full-screen hero
- Animated headlines
- CTA buttons
- Stats grid
- Scroll indicator

**`Scene3D.tsx`** (82 lines)
- Three.js canvas
- Animated sphere
- Particle field
- Auto-rotation
- Lighting effects

---

#### Content Sections

**`About.tsx`** (128 lines)
- Company mission
- Feature cards (4)
- Scroll animations
- Glassmorphic design

**`Services.tsx`** (182 lines)
- 6 service cards
- Hover tilt effects
- Modal with details
- Feature lists
- Animated icons

**`Portfolio.tsx`** (196 lines)
- 9 project cards
- Category filtering
- Hover effects
- Technology tags
- External links

**`TechStack.tsx`** (213 lines)
- 24+ tech badges
- Rotating ring animation
- Central core
- Hover tooltips
- Stats display

**`Testimonials.tsx`** (173 lines)
- 6 testimonials
- Auto-carousel
- Star ratings
- Glassmorphic cards
- Navigation dots

**`Contact.tsx`** (267 lines)
- Split layout
- Animated form
- Contact info cards
- Success animation
- Social links

---

#### Interactive Features

**`CursorGlow.tsx`** (24 lines)
- Mouse tracking
- Radial gradient glow
- Smooth follow effect

**`ChatBot.tsx`** (158 lines)
- Chat interface
- Message history
- Auto-responses
- Slide-in animation
- User/bot avatars

**`ProjectEstimator.tsx`** (214 lines)
- Cost calculator
- Project type selector
- Feature checkboxes
- Real-time pricing
- CTA integration

---

## File Sizes (Approximate)

```
Component          Lines    Features
─────────────────────────────────────
Hero.tsx             147    3D, Animations
Scene3D.tsx           82    Three.js
About.tsx            128    Cards, Scroll
Services.tsx         182    Modals, Hover
Portfolio.tsx        196    Filtering
TechStack.tsx        213    Animations
Testimonials.tsx     173    Carousel
Contact.tsx          267    Form, Validation
Footer.tsx           185    Links, Newsletter
Navbar.tsx           116    Navigation
ChatBot.tsx          158    AI Chat
ProjectEstimator.tsx 214    Calculator
CursorGlow.tsx        24    Mouse effect
─────────────────────────────────────
Total              ~2,085   All features
```

## Configuration Files

### `package.json`
**Purpose**: Manages dependencies
- Next.js, React, TypeScript
- Framer Motion, Three.js
- Tailwind CSS, Lucide icons
- Development tools

### `tsconfig.json`
**Purpose**: TypeScript configuration
- Strict type checking
- Path aliases (@/)
- ES2020 target
- JSX support

### `tailwind.config.ts`
**Purpose**: Tailwind customization
- Custom colors (neon theme)
- Animations (float, glow)
- Extended utilities
- Gradient configurations

### `next.config.js`
**Purpose**: Next.js settings
- React strict mode
- Image domains
- Build optimizations

### `.eslintrc.json`
**Purpose**: Code quality
- Next.js rules
- TypeScript rules
- Warning levels

## Documentation Files

### `README.md`
Main documentation with:
- Feature overview
- Tech stack
- Installation
- Customization
- Deployment

### `QUICKSTART.md`
Fast-track guide:
- 3-step setup
- First customizations
- Common tasks
- Troubleshooting

### `INSTALLATION.md`
Detailed installation:
- Prerequisites
- Step-by-step
- Common issues
- Development tips

### `FEATURES.md`
Complete feature list:
- All sections
- Animations
- Interactions
- Technical details

## Data Flow

```
User Interaction
      ↓
   Component
      ↓
  State Change
      ↓
  Re-render
      ↓
  Animation
      ↓
Visual Feedback
```

## Component Dependencies

```
page.tsx
  ├── Navbar
  ├── Hero
  │   └── Scene3D (Three.js)
  ├── About
  ├── Services
  ├── Portfolio
  ├── TechStack
  ├── Testimonials
  ├── Contact
  ├── Footer
  ├── CursorGlow
  ├── ChatBot
  └── ProjectEstimator
```

## State Management

- **Local State**: useState for component-specific state
- **Form State**: Contact form, chatbot input
- **UI State**: Modals, menus, filters
- **Animation State**: Framer Motion variants

## Styling Approach

1. **Tailwind Utility Classes**: Primary styling method
2. **Custom CSS**: Complex animations in globals.css
3. **Inline Styles**: Dynamic values (3D positions, gradients)
4. **CSS Modules**: Not used (Tailwind preferred)

## Performance Considerations

- **Code Splitting**: Automatic with Next.js
- **Lazy Loading**: Components load as needed
- **Image Optimization**: Next.js Image component ready
- **3D Optimization**: Reduced particle count option
- **Animation Performance**: GPU-accelerated transforms

## Best Practices Used

✅ TypeScript for type safety
✅ Component composition
✅ Responsive design
✅ Accessibility considerations
✅ SEO optimization
✅ Clean code structure
✅ Reusable utilities
✅ Documentation

## Adding New Components

1. Create file in `components/`
2. Import in `app/page.tsx`
3. Add to render sequence
4. Update this documentation

## Modifying Existing Components

1. Locate component file
2. Edit JSX structure
3. Update Tailwind classes
4. Test responsiveness
5. Check animations

---

**Total Files**: 25+
**Total Components**: 13
**Lines of Code**: ~3,000+
**Dependencies**: 15+

This structure ensures:
- 🎯 Easy maintenance
- 🔄 Reusability
- 📈 Scalability
- 🚀 Performance
- 📖 Clear organization

---

Built with modern best practices for a production-ready website! 🎉

