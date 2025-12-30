# HabitFlow - Smart Habit Tracking Device

A complete full-stack landing page website for HabitFlow, featuring a beautiful frontend and Express.js backend API.

## 🚀 Features

- **Modern Landing Page**: Beautiful, responsive design with gradient animations
- **Express.js Backend**: RESTful API for handling pre-orders and contact forms
- **API Endpoints**: 
  - Pre-order submission
  - Contact form submissions
  - Health check endpoint
- **Production Ready**: Docker support, environment configuration, and error handling

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Git (for version control)

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd habitflow-website
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
PORT=3000
NODE_ENV=development
```

4. Start the development server:
```bash
npm run dev
```

Or start the production server:
```bash
npm start
```

The server will run on `http://localhost:3000`

## 📁 Project Structure

```
habitflow-website/
├── public/
│   └── index.html          # Main HTML file (unchanged from original)
├── routes/
│   ├── preorder.js         # Pre-order API routes
│   └── contact.js          # Contact form API routes
├── config/                 # Configuration files (future use)
├── models/                 # Database models (future use)
├── server.js               # Express server entry point
├── package.json            # Node.js dependencies
├── .env                    # Environment variables
├── Dockerfile              # Docker configuration
├── docker-compose.yml      # Docker Compose configuration
└── README.md               # This file
```

## 🔌 API Endpoints

### Health Check
- `GET /api/health` - Server health status

### Pre-Orders
- `POST /api/preorder` - Submit a pre-order
  ```json
  {
    "email": "user@example.com",
    "name": "John Doe",
    "plan": "pro",
    "message": "Optional message"
  }
  ```
- `GET /api/preorder` - Get all pre-orders (admin)

### Contact
- `POST /api/contact` - Submit contact form
  ```json
  {
    "email": "user@example.com",
    "name": "John Doe",
    "subject": "Question",
    "message": "Your message here"
  }
  ```
- `GET /api/contact` - Get all contacts (admin)

## 🐳 Docker Deployment

### Using Docker Compose (Recommended)

```bash
docker-compose up -d
```

### Using Docker directly

```bash
# Build the image
docker build -t habitflow-website .

# Run the container
docker run -p 3000:3000 habitflow-website
```

## ☁️ GitHub Deployment

### 1. Initialize Git Repository

```bash
git init
git add .
git commit -m "Initial commit: HabitFlow website with backend"
```

### 2. Create GitHub Repository

1. Go to GitHub and create a new repository
2. Don't initialize with README (we already have one)

### 3. Connect and Push

```bash
git remote add origin https://github.com/YOUR_USERNAME/habitflow-website.git
git branch -M main
git push -u origin main
```

### 4. Deploy to Platforms

#### Option A: Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in project directory
3. Follow prompts

#### Option B: Heroku
```bash
heroku create habitflow-website
git push heroku main
```

#### Option C: Railway
1. Connect GitHub repository
2. Select the repository
3. Deploy automatically

#### Option D: Render
1. Connect GitHub repository
2. Set build command: `npm install`
3. Set start command: `npm start`

#### Option E: DigitalOcean App Platform
1. Connect GitHub repository
2. Configure build and run commands
3. Deploy

## 🔧 Environment Variables

Create a `.env` file with:

```env
PORT=3000
NODE_ENV=production
```

For production deployments, set these in your hosting platform's environment variables section.

## 📝 Development

- **Development mode with auto-reload**: `npm run dev`
- **Production mode**: `npm start`

## 🧪 Testing API Endpoints

You can test the API using curl or Postman:

```bash
# Health check
curl http://localhost:3000/api/health

# Submit pre-order
curl -X POST http://localhost:3000/api/preorder \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","plan":"pro","name":"Test User"}'

# Submit contact form
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","message":"Hello","name":"Test User"}'
```

## 🔒 Security Notes

- In production, implement authentication for admin endpoints
- Add rate limiting to prevent abuse
- Use a proper database instead of in-memory storage
- Set up proper CORS policies for your domain
- Use environment variables for sensitive data

## 📄 License

MIT

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

