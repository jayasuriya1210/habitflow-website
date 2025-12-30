# Deployment Guide for HabitFlow Website

This guide will help you deploy the HabitFlow website to GitHub and various hosting platforms.

## 📦 Step 1: Initial Git Setup

The repository is already initialized. Here's how to set it up for GitHub:

### 1.1 Add all files to Git

```bash
git add .
```

### 1.2 Create initial commit

```bash
git commit -m "Initial commit: HabitFlow website with Express.js backend"
```

### 1.3 Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Repository name: `habitflow-website` (or your preferred name)
5. Description: "HabitFlow - Smart Habit Tracking Device Landing Page"
6. Choose Public or Private
7. **DO NOT** initialize with README, .gitignore, or license (we already have them)
8. Click "Create repository"

### 1.4 Connect Local Repository to GitHub

Replace `YOUR_USERNAME` with your GitHub username:

```bash
git remote add origin https://github.com/YOUR_USERNAME/habitflow-website.git
git branch -M main
git push -u origin main
```

If you get authentication errors, you may need to:
- Use a Personal Access Token instead of password
- Or set up SSH keys for GitHub

## ☁️ Step 2: Deploy to Hosting Platforms

### Option A: Deploy to Vercel (Recommended for Node.js)

1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with GitHub
3. Click "New Project"
4. Import your `habitflow-website` repository
5. Vercel will auto-detect Node.js settings
6. Configure:
   - Build Command: `npm install`
   - Output Directory: `public`
   - Install Command: `npm install`
7. Add Environment Variables:
   - `NODE_ENV` = `production`
   - `PORT` = `3000` (Vercel assigns this automatically, but include it)
8. Click "Deploy"
9. Your site will be live at `https://your-project.vercel.app`

### Option B: Deploy to Render

1. Go to [render.com](https://render.com)
2. Sign up/Login with GitHub
3. Click "New +" → "Web Service"
4. Connect your GitHub repository
5. Configure:
   - Name: `habitflow-website`
   - Environment: `Node`
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Plan: Free or Paid
6. Add Environment Variables:
   - `NODE_ENV` = `production`
   - `PORT` = `3000` (Render assigns this automatically)
7. Click "Create Web Service"
8. Your site will be live at `https://habitflow-website.onrender.com`

### Option C: Deploy to Railway

1. Go to [railway.app](https://railway.app)
2. Sign up/Login with GitHub
3. Click "New Project"
4. Select "Deploy from GitHub repo"
5. Choose your `habitflow-website` repository
6. Railway will auto-detect Node.js
7. Add Environment Variables:
   - `NODE_ENV` = `production`
8. Click "Deploy"
9. Railway will provide a live URL

### Option D: Deploy to Heroku

1. Install Heroku CLI: [heroku.com/cli](https://devcenter.heroku.com/articles/heroku-cli)

2. Login to Heroku:
```bash
heroku login
```

3. Create Heroku app:
```bash
heroku create habitflow-website
```

4. Add environment variables:
```bash
heroku config:set NODE_ENV=production
```

5. Deploy:
```bash
git push heroku main
```

6. Open your app:
```bash
heroku open
```

### Option E: Deploy to DigitalOcean App Platform

1. Go to [cloud.digitalocean.com](https://cloud.digitalocean.com)
2. Navigate to "App Platform"
3. Click "Create App"
4. Connect GitHub and select your repository
5. Configure:
   - Type: Web Service
   - Build Command: `npm install`
   - Run Command: `npm start`
   - HTTP Port: `3000`
6. Add Environment Variables:
   - `NODE_ENV` = `production`
   - `PORT` = `3000`
7. Choose a plan and deploy

### Option F: Deploy with Docker (Any Platform)

If your hosting platform supports Docker:

1. Build Docker image:
```bash
docker build -t habitflow-website .
```

2. Run container:
```bash
docker run -p 3000:3000 -e NODE_ENV=production habitflow-website
```

For Docker Compose:
```bash
docker-compose up -d
```

## 🔄 Step 3: Continuous Deployment

Once connected to GitHub, most platforms will automatically deploy when you push to the main branch.

To deploy updates:
```bash
git add .
git commit -m "Your commit message"
git push origin main
```

## 🔒 Step 4: Environment Variables

For production, set these environment variables in your hosting platform:

- `NODE_ENV` = `production`
- `PORT` = `3000` (usually auto-assigned by platform)

Future variables you might add:
- `DATABASE_URL` (when you add a database)
- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS` (for email notifications)

## 📝 Step 5: Custom Domain (Optional)

Most platforms allow you to add a custom domain:

1. Go to your hosting platform's domain settings
2. Add your custom domain (e.g., `habitflow.com`)
3. Update DNS records as instructed
4. SSL certificate is usually auto-configured

## ✅ Step 6: Verify Deployment

1. Check that your site is accessible
2. Test the API endpoints:
   - `https://your-domain.com/api/health`
   - `https://your-domain.com/api/preorder` (POST)
   - `https://your-domain.com/api/contact` (POST)
3. Test the frontend loads correctly
4. Check browser console for errors

## 🐛 Troubleshooting

### Build Fails
- Check Node.js version (should be 14+)
- Verify all dependencies in `package.json`
- Check build logs on your hosting platform

### App Crashes
- Check environment variables are set correctly
- Verify PORT is correctly configured
- Check server logs on your hosting platform

### API Endpoints Not Working
- Ensure CORS is configured correctly
- Check that routes are properly set up
- Verify the API endpoints in your hosting platform logs

## 📚 Additional Resources

- [GitHub Documentation](https://docs.github.com)
- [Vercel Documentation](https://vercel.com/docs)
- [Render Documentation](https://render.com/docs)
- [Heroku Documentation](https://devcenter.heroku.com)
- [Docker Documentation](https://docs.docker.com)

