# Git Setup Script for HabitFlow Website
# Run this script to configure Git and prepare for GitHub push

Write-Host "=== HabitFlow Git Setup ===" -ForegroundColor Cyan
Write-Host ""

# Check if git config is set
$gitEmail = git config --global user.email
$gitName = git config --global user.name

if (-not $gitEmail -or -not $gitName) {
    Write-Host "Git user configuration is not set." -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Please configure Git with your details:" -ForegroundColor Yellow
    Write-Host "  git config --global user.email `"your-email@example.com`"" -ForegroundColor Green
    Write-Host "  git config --global user.name `"Your Name`"" -ForegroundColor Green
    Write-Host ""
    
    $configure = Read-Host "Do you want to configure Git now? (y/n)"
    if ($configure -eq 'y' -or $configure -eq 'Y') {
        $email = Read-Host "Enter your email"
        $name = Read-Host "Enter your name"
        git config --global user.email $email
        git config --global user.name $name
        Write-Host "Git configured successfully!" -ForegroundColor Green
    } else {
        Write-Host "Please configure Git manually before committing." -ForegroundColor Red
        exit 1
    }
} else {
    Write-Host "Git is already configured:" -ForegroundColor Green
    Write-Host "  Email: $gitEmail" -ForegroundColor Cyan
    Write-Host "  Name: $gitName" -ForegroundColor Cyan
    Write-Host ""
}

# Check if repository is initialized
if (-not (Test-Path ".git")) {
    Write-Host "Initializing Git repository..." -ForegroundColor Yellow
    git init
    git branch -M main
}

# Check if there are uncommitted changes
$status = git status --porcelain
if ($status) {
    Write-Host "Staging files..." -ForegroundColor Yellow
    git add .
    
    Write-Host "Creating initial commit..." -ForegroundColor Yellow
    git commit -m "Initial commit: HabitFlow website with Express.js backend API"
    Write-Host "Initial commit created!" -ForegroundColor Green
} else {
    Write-Host "No uncommitted changes found." -ForegroundColor Green
}

Write-Host ""
Write-Host "=== Setup Complete ===" -ForegroundColor Cyan
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "1. Create a repository on GitHub (github.com/new)" -ForegroundColor White
Write-Host "2. Run these commands to push:" -ForegroundColor White
Write-Host "   git remote add origin https://github.com/YOUR_USERNAME/habitflow-website.git" -ForegroundColor Green
Write-Host "   git push -u origin main" -ForegroundColor Green
Write-Host ""
Write-Host "See GITHUB_SETUP.md for detailed instructions." -ForegroundColor Cyan

