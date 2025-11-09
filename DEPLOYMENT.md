# 🚀 Deployment Guide - Lunor.ko

## Step 1: Push to GitHub

### A. Create GitHub Repository

1. Go to [github.com](https://github.com) and log in
2. Click the **"+"** button (top-right) → **"New repository"**
3. Repository name: `lunor-website` (or any name you prefer)
4. Description: "Lunor.ko - Modern Agency Website"
5. Choose **Public** or **Private**
6. **DO NOT** initialize with README (we already have one)
7. Click **"Create repository"**

### B. Push Your Code

After creating the repository, GitHub will show you commands. Use these:

```bash
cd /Users/gireshkumar/Downloads/Lunor

# Add GitHub as remote (replace YOUR-USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR-USERNAME/lunor-website.git

# Push to GitHub
git push -u origin main
```

**Example:**
If your GitHub username is `gireshkumar`, use:
```bash
git remote add origin https://github.com/gireshkumar/lunor-website.git
git push -u origin main
```

---

## Step 2: Deploy to Vercel

### A. Sign Up / Log In to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **"Sign Up"** (or **"Log In"** if you have an account)
3. Choose **"Continue with GitHub"**
4. Authorize Vercel to access your GitHub account

### B. Import Your Project

1. On Vercel dashboard, click **"Add New..."** → **"Project"**
2. You'll see a list of your GitHub repositories
3. Find **"lunor-website"** (or whatever you named it)
4. Click **"Import"**

### C. Configure Project

Vercel will auto-detect Next.js. Settings should be:

- **Framework Preset**: Next.js ✅ (auto-detected)
- **Root Directory**: `./` ✅
- **Build Command**: `next build` ✅
- **Output Directory**: `.next` ✅
- **Install Command**: `npm install` ✅

**No changes needed!** Just click **"Deploy"**

### D. Wait for Deployment

- Vercel will install dependencies (~2-3 minutes)
- Build your website (~1-2 minutes)
- Deploy to production

**Total time: ~5 minutes**

### E. Your Website is Live! 🎉

Vercel will give you:
- **Production URL**: `your-project.vercel.app`
- **Custom domain option**: Add `lunor.ko` if you own it

---

## Step 3: Add Custom Domain (Optional)

### If you own lunor.ko domain:

1. In Vercel project settings → **"Domains"**
2. Click **"Add"**
3. Enter: `lunor.ko` and `www.lunor.ko`
4. Vercel will provide DNS records
5. Add those DNS records to your domain provider
6. Wait for DNS propagation (~24 hours, usually faster)

---

## 🔄 Future Updates

After initial deployment, updating is easy:

```bash
# Make changes to your code
# Then:
git add .
git commit -m "Update: description of changes"
git push
```

Vercel automatically deploys every push to GitHub! 🚀

---

## ⚡ Quick Commands Reference

```bash
# Check git status
git status

# Stage all changes
git add .

# Commit changes
git commit -m "Your message"

# Push to GitHub
git push

# View git log
git log --oneline
```

---

## 📸 Adding Team Photos Later

1. Add images to `public/team/`
2. Run:
```bash
git add public/team/
git commit -m "Add team member photos"
git push
```

Vercel will auto-deploy the update!

---

## 🎯 Vercel Features You Get

✅ **Automatic HTTPS** - Free SSL certificate
✅ **Global CDN** - Fast loading worldwide
✅ **Auto-deployments** - Every git push deploys
✅ **Preview URLs** - Test before going live
✅ **Analytics** - Built-in performance tracking
✅ **99.99% Uptime** - Highly reliable

---

## 🆘 Troubleshooting

### Issue: Git push asks for password

**Solution**: Use Personal Access Token instead of password
1. Go to GitHub → Settings → Developer settings → Personal access tokens
2. Generate new token (classic)
3. Use token as password when pushing

**Or use SSH:**
```bash
git remote set-url origin git@github.com:YOUR-USERNAME/lunor-website.git
```

### Issue: Vercel build fails

**Check:**
- All dependencies in package.json
- No TypeScript errors
- Node version (use 18.x or 20.x)

**Fix**: In Vercel project settings:
- Override Node version to 18.x

---

## ✅ Deployment Checklist

- [ ] Create GitHub repository
- [ ] Push code to GitHub
- [ ] Sign up for Vercel
- [ ] Import GitHub repository
- [ ] Deploy (auto-configured)
- [ ] Get your live URL
- [ ] (Optional) Add custom domain
- [ ] Share your amazing website! 🎉

---

**Your Lunor.ko website will be live in under 10 minutes!** 🚀

