#!/usr/bin/env bash

# Acanthis Journey - Quick Command Reference
# Save this file and use it as a quick reference for common commands

echo "🌍 Acanthis Journey - Command Reference"
echo "========================================"
echo ""

# Installation & Setup
echo "📦 INSTALLATION & SETUP"
echo "======================"
echo "npm install              # Install all dependencies"
echo "npm run dev             # Start development server (http://localhost:3000)"
echo "npm run build           # Create production build"
echo "npm start               # Start production server"
echo "npm run lint            # Check code for errors"
echo ""

# Deployment
echo "🚀 DEPLOYMENT"
echo "============="
echo "vercel                  # Deploy to Vercel (1-click deployment)"
echo "vercel --prod          # Deploy to production on Vercel"
echo ""

# Testing
echo "🧪 TESTING"
echo "=========="
echo "npm run build           # Test if build succeeds"
echo "npm run dev             # Test locally before deploying"
echo ""

# Common Issues
echo "🔧 TROUBLESHOOTING"
echo "=================="
echo "npm cache clean --force # Clear npm cache"
echo "rm -rf node_modules    # Delete node_modules"
echo "rm package-lock.json   # Delete package lock"
echo "npm install            # Reinstall all packages"
echo ""

# Git
echo "📚 GIT COMMANDS"
echo "==============="
echo "git init               # Initialize git repo"
echo "git add .              # Stage all files"
echo "git commit -m 'msg'    # Commit with message"
echo "git push               # Push to GitHub"
echo ""

# Port Management
echo "🔌 PORT MANAGEMENT"
echo "=================="
echo "netstat -ano | findstr :3000  # Check what's using port 3000 (Windows)"
echo "lsof -i :3000                 # Check what's using port 3000 (Mac/Linux)"
echo "npm run dev -- -p 3001        # Use different port (3001)"
echo ""

# File Management
echo "📁 FILE MANAGEMENT"
echo "=================="
echo "ls                      # List files (Mac/Linux)"
echo "dir                     # List files (Windows)"
echo "pwd                     # Show current directory"
echo "cd path/to/folder       # Change directory"
echo ""

# Environment
echo "⚙️ ENVIRONMENT"
echo "=============="
echo "node --version          # Check Node.js version"
echo "npm --version           # Check npm version"
echo "npm list                # List installed packages"
echo ""

# Quick Start
echo ""
echo "🚀 QUICK START (3 STEPS)"
echo "======================="
echo "1. npm install && npm run dev"
echo "2. Open http://localhost:3000"
echo "3. Test the website"
echo ""

# Deployment Quick Start
echo "🌐 DEPLOY TO VERCEL (3 STEPS)"
echo "============================="
echo "1. npm install -g vercel"
echo "2. vercel              (follow prompts)"
echo "3. Website is live!"
echo ""

echo "✅ For more help, see:"
echo "   - README.md (Overview)"
echo "   - WEBSITE_GUIDE.md (Features)"
echo "   - DEPLOYMENT_GUIDE.md (Deployment)"
echo "   - LAUNCH_CHECKLIST.md (Pre-launch tasks)"
echo ""
