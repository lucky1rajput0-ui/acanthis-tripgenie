# 🚀 Deployment & Setup Guide

## Quick Start (5 minutes)

### 1. Install & Run Locally

```bash
# Navigate to project
cd acanthis-tripgenie

# Install dependencies
npm install

# Start development server
npm run dev

# Open in browser
# http://localhost:3000
```

### 2. Test the Website

- Visit **http://localhost:3000** to see the home page
- Click "Start Planning Now" to test the lead capture form
- Try filling the form - you'll be redirected to WhatsApp
- Verify all pages load correctly:
  - Home: http://localhost:3000
  - Planner: http://localhost:3000/planner
  - Destinations: http://localhost:3000/destinations
  - About: http://localhost:3000/about
  - Contact: http://localhost:3000/contact

---

## Deploy to Production

### Option 1: Vercel (Recommended - Easiest)

**Vercel is built for Next.js and offers free hosting:**

1. **Push code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/acanthis-tripgenie.git
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to https://vercel.com
   - Sign up with GitHub
   - Click "New Project"
   - Select your repository
   - Click "Deploy"
   - Your site is live! (e.g., acanthis-tripgenie.vercel.app)

### Option 2: Netlify

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Build and deploy**
   ```bash
   npm run build
   netlify deploy --prod --dir=.next
   ```

3. **Follow the prompts** to complete deployment

### Option 3: Traditional Server (Linux/Ubuntu)

1. **Connect via SSH**
   ```bash
   ssh username@your-server-ip
   ```

2. **Install Node.js**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

3. **Clone and deploy**
   ```bash
   cd /var/www
   git clone https://github.com/YOUR_USERNAME/acanthis-tripgenie.git
   cd acanthis-tripgenie
   npm install
   npm run build
   ```

4. **Setup PM2 (Process Manager)**
   ```bash
   npm install -g pm2
   pm2 start "npm start" --name "acanthis-journey"
   pm2 startup
   pm2 save
   ```

5. **Setup Nginx Reverse Proxy**
   ```bash
   sudo apt-get install nginx
   ```
   
   Create `/etc/nginx/sites-available/acanthis-journey`:
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
       }
   }
   ```

   Enable and restart:
   ```bash
   sudo ln -s /etc/nginx/sites-available/acanthis-journey /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   ```

### Option 4: Docker (Advanced)

Create `Dockerfile`:
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

Build and run:
```bash
docker build -t acanthis-journey .
docker run -p 3000:3000 acanthis-journey
```

---

## Post-Deployment Steps

### 1. Setup Custom Domain

1. **Register domain** (GoDaddy, Namecheap, etc.)
2. **Update DNS records** to point to your hosting
3. **Enable HTTPS** (automatic on Vercel/Netlify, use Let's Encrypt on VPS)

### 2. Setup Email

- Get business email: acanthisjourney@gmail.com
- Setup email forwarding to your personal email
- Configure in contact form

### 3. Analytics

Add Google Analytics to `app/layout.tsx`:
```tsx
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 4. Setup WhatsApp Business

1. Go to https://www.whatsapp.com/business
2. Create business account
3. Get approved for WhatsApp API
4. Use phone number: +91 98306 39007

### 5. SSL Certificate

If using VPS:
```bash
sudo certbot certonly --nginx -d your-domain.com
sudo systemctl restart nginx
```

---

## Environment Variables

Create `.env.local` (never commit this):
```
NEXT_PUBLIC_WHATSAPP_NUMBER=919830639007
NEXT_PUBLIC_PHONE_NUMBER=+91 98306 39007
NEXT_PUBLIC_EMAIL=acanthisjourney@gmail.com
```

---

## Monitoring & Maintenance

### Check Logs (PM2)
```bash
pm2 logs acanthis-journey
```

### Monitor Server Health
```bash
pm2 monit
```

### Update Website
```bash
git pull origin main
npm install
npm run build
pm2 restart acanthis-journey
```

### Database Backups
- No database needed for this website
- All data goes via WhatsApp/contact forms

---

## Performance Optimization

The website is already optimized with:
- ✅ Automatic code splitting
- ✅ Image optimization
- ✅ Minification & compression
- ✅ Caching strategies

To further optimize:

1. **Enable Compression**
   ```javascript
   // next.config.ts
   compress: true,
   ```

2. **Setup CDN** (Cloudflare, CloudFront)
3. **Add lazy loading** for images
4. **Minify images** before adding them

---

## Troubleshooting

### Build Fails
```bash
rm -rf .next node_modules
npm install
npm run build
```

### Port 3000 Already in Use
```bash
npx kill-port 3000
npm run dev
```

### WhatsApp Links Not Working
- Check phone number format: `919830639007` (11 digits with country code)
- WhatApp app must be installed on device
- Use `https://wa.me/919830639007` format

### Pages Not Loading
1. Check browser console for errors (F12)
2. Check server logs
3. Verify all routes exist in `/app`

---

## Scaling Tips

As traffic grows:
1. **Upgrade Vercel plan** → Automatic scaling
2. **Use CDN** → Faster global delivery
3. **Add load balancer** → Distribute traffic
4. **Database** → If you add one, use managed PostgreSQL

---

## Learning Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **React**: https://react.dev
- **TypeScript**: https://www.typescriptlang.org/docs

---

## Support

Need help?
- **Next.js Forum**: https://github.com/vercel/next.js/discussions
- **Stack Overflow**: Tag questions with `next.js`
- **Documentation**: Read the guides above

---

**Happy deploying! 🚀**
