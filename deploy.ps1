#!/usr/bin/env powershell

# Acanthis Journey - Easy Deploy Script
# This deploys your website to Vercel with one command

Write-Host "🌍 Deploying Acanthis Journey Website..." -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Step 1: Login to Vercel
Write-Host "📝 Step 1: Logging into Vercel..." -ForegroundColor Yellow
Write-Host "  (A browser window will open, sign in with your email/GitHub)" -ForegroundColor Gray
vercel login

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Login failed. Please try again." -ForegroundColor Red
    exit 1
}

Write-Host "✅ Login successful!" -ForegroundColor Green
Write-Host ""

# Step 2: Deploy
Write-Host "🚀 Step 2: Deploying to Vercel..." -ForegroundColor Yellow
Write-Host "  This may take 30-60 seconds..." -ForegroundColor Gray
Write-Host ""

vercel --prod

Write-Host ""
Write-Host "✅ Deployment Complete!" -ForegroundColor Green
Write-Host ""
Write-Host "📍 Your website is now LIVE!" -ForegroundColor Cyan
Write-Host "   Check Vercel dashboard for your URL:" -ForegroundColor Green
Write-Host "   https://vercel.com/dashboard" -ForegroundColor Cyan
Write-Host ""
Write-Host "💡 To find your URL:" -ForegroundColor Yellow
Write-Host "   1. Go to https://vercel.com/dashboard" -ForegroundColor Gray
Write-Host "   2. Click on 'acanthis-tripgenie'" -ForegroundColor Gray
Write-Host "   3. Copy the URL from the top" -ForegroundColor Gray
Write-Host "   4. Share it with your friends!" -ForegroundColor Gray
Write-Host ""
