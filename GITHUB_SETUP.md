# Quick GitHub Setup Guide

## ✅ Your Repository is Ready!

Your HabitFlow website is now ready to be pushed to GitHub. Follow these steps:

## ⚙️ Step 0: Configure Git (If Not Already Done)

If you haven't configured Git before, run these commands first:

```bash
git config --global user.email "your-email@example.com"
git config --global user.name "Your Name"
```

**Or use the setup script (PowerShell):**
```powershell
.\setup-git.ps1
```

This will configure Git and create the initial commit automatically.

## 📤 Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `habitflow-website`
3. Description: `HabitFlow - Smart Habit Tracking Device Landing Page with Full-Stack Backend`
4. Choose Public or Private
5. **IMPORTANT**: Do NOT initialize with README, .gitignore, or license (we already have them)
6. Click "Create repository"

## 🔗 Step 2: Connect and Push to GitHub

After creating the repository, GitHub will show you commands. Use these:

**Replace `YOUR_USERNAME` with your actual GitHub username:**

```bash
cd "c:\Users\ADMIN\Downloads\habitflow-website"
git remote add origin https://github.com/YOUR_USERNAME/habitflow-website.git
git push -u origin main
```

**If you need to use SSH instead:**

```bash
git remote add origin git@github.com:YOUR_USERNAME/habitflow-website.git
git push -u origin main
```

## 🔐 Authentication

If you get authentication errors:

### Option A: Personal Access Token
1. Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token with `repo` permissions
3. Use the token as your password when pushing

### Option B: GitHub CLI
```bash
# Install GitHub CLI, then:
gh auth login
git push -u origin main
```

## ✅ Verify

After pushing, refresh your GitHub repository page. You should see all your files!

## 📋 What's Included

Your repository includes:
- ✅ Complete Express.js backend server
- ✅ API routes for pre-orders and contact forms
- ✅ Original HTML file (unchanged) in `public/index.html`
- ✅ Docker configuration for easy deployment
- ✅ GitHub Actions workflow for CI/CD
- ✅ Complete documentation (README.md, DEPLOYMENT.md)
- ✅ Environment configuration files

## 🚀 Next Steps

After pushing to GitHub, see `DEPLOYMENT.md` for instructions on deploying to:
- Vercel (recommended)
- Render
- Railway
- Heroku
- DigitalOcean
- Any Docker-compatible platform

## 📝 Future Commits

To make changes and push updates:

```bash
git add .
git commit -m "Your commit message"
git push origin main
```

