# Quick Start Guide

Get your HabitFlow website up and running in minutes!

## 🚀 Local Development

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```
   Visit: http://localhost:3000

## 📤 Push to GitHub

1. **Configure Git** (if first time)
   ```bash
   git config --global user.email "your-email@example.com"
   git config --global user.name "Your Name"
   ```

2. **Create Initial Commit**
   ```bash
   git add .
   git commit -m "Initial commit: HabitFlow website"
   git branch -M main
   ```

3. **Create GitHub Repository**
   - Go to https://github.com/new
   - Create repository (don't initialize with README)
   - Copy the repository URL

4. **Push to GitHub**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/habitflow-website.git
   git push -u origin main
   ```

## ☁️ Deploy (Choose One)

### Vercel (Easiest)
1. Go to vercel.com
2. Import GitHub repository
3. Deploy (automatic)

### Render
1. Go to render.com
2. New Web Service
3. Connect GitHub repo
4. Build: `npm install`
5. Start: `npm start`

**For detailed instructions, see:**
- `GITHUB_SETUP.md` - GitHub setup guide
- `DEPLOYMENT.md` - Full deployment guide
- `README.md` - Complete documentation

