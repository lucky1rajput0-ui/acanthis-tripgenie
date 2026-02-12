@echo off
REM Acanthis Journey - Quick Command Reference for Windows
REM This file lists common commands - just copy the command you need and run it

echo.
echo 🌍 Acanthis Journey - Command Reference for Windows
echo ==================================================
echo.

echo 📦 INSTALLATION ^& SETUP
echo =======================
echo npm install              -- Install all dependencies
echo npm run dev             -- Start development server (http://localhost:3000)
echo npm run build           -- Create production build
echo npm start               -- Start production server
echo npm run lint            -- Check code for errors
echo.

echo 🚀 DEPLOYMENT
echo =============
echo vercel                  -- Deploy to Vercel (1-click deployment)
echo vercel --prod          -- Deploy to production on Vercel
echo.

echo 🧪 TESTING
echo ==========
echo npm run build           -- Test if build succeeds
echo npm run dev             -- Test locally before deploying
echo.

echo 🔧 TROUBLESHOOTING
echo ==================
echo npm cache clean --force -- Clear npm cache
echo rmdir /s node_modules  -- Delete node_modules folder
echo del package-lock.json  -- Delete package lock file
echo npm install            -- Reinstall all packages
echo.

echo 📚 GIT COMMANDS
echo ===============
echo git init               -- Initialize git repo
echo git add .              -- Stage all files
echo git commit -m "msg"    -- Commit with message
echo git push               -- Push to GitHub
echo.

echo 🔌 PORT MANAGEMENT
echo ==================
echo netstat -ano | findstr :3000  -- Check what's using port 3000
echo npm run dev -- -p 3001        -- Use different port (3001)
echo.

echo 📁 FILE MANAGEMENT
echo ==================
echo dir                     -- List files
echo cd path\to\folder       -- Change directory
echo echo %%cd%%              -- Show current directory
echo.

echo ⚙️ ENVIRONMENT
echo ==============
echo node --version          -- Check Node.js version
echo npm --version           -- Check npm version
echo npm list                -- List installed packages
echo.

echo.
echo ===============================================
echo 🚀 QUICK START (3 STEPS)
echo ===============================================
echo 1. npm install ^&^& npm run dev
echo 2. Open http://localhost:3000 in browser
echo 3. Test the website
echo.

echo ===============================================
echo 🌐 DEPLOY TO VERCEL (3 STEPS)
echo ===============================================
echo 1. npm install -g vercel
echo 2. vercel              (follow prompts)
echo 3. Website is live!
echo.

echo ✅ For more help, see:
echo    - README.md (Overview)
echo    - WEBSITE_GUIDE.md (Features)
echo    - DEPLOYMENT_GUIDE.md (Deployment)
echo    - LAUNCH_CHECKLIST.md (Pre-launch tasks)
echo.

pause
