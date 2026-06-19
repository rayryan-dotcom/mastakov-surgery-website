# Dr Mastakov Surgery - Deployment Quick Start

## 📦 What You Have

A complete, production-ready website with:
- ✅ 10 HTML pages (home, about, 4 procedures, locations, patient info, contact, legal)
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ AHPRA-compliant content
- ✅ SEO optimized (sitemap, robots.txt, meta tags)
- ✅ Security (HTTPS ready, form validation)
- ✅ No dependencies (pure HTML/CSS/JS)

## 🚀 Quick Deployment (5 minutes)

### Step 1: Initialize Git (1 min)
```bash
cd mastakov-site
git init
git add .
git commit -m "Initial commit: Dr Mastakov Surgery website"
```

### Step 2: Create GitHub Repo (1 min)
1. Visit: https://github.com/new
2. Create repository: `mastakov-surgery-website`
3. Run:
```bash
git remote add origin git@github.com:rayzatech.com.au/mastakov-surgery-website.git
git branch -M main
git push -u origin main
```

### Step 3: Deploy to Cloudflare (3 min)
1. Visit: https://dash.cloudflare.com/
2. Click: **Pages** → **Create a project** → **Connect to Git**
3. Select: `mastakov-surgery-website`
4. Build settings:
   - **Framework:** None
   - **Build command:** (leave blank)
   - **Output directory:** `/`
5. Click: **Save and Deploy**

✅ **Done!** Your site is live at `your-cloudflare-subdomain.pages.dev`

## 🔌 Connect Your Domain

1. In Cloudflare Pages: **Custom domain**
2. Enter: `mastakovsurgery.com.au`
3. Follow DNS setup

## 📝 Optional: Add Form Processing

### Option A: Cloudflare Pages Forms (Recommended)
1. Install Node.js
2. Create: `/functions/forms.js`
3. Handle form submissions

### Option B: Third-party Service
- [Formspree](https://formspree.io/) - Free tier available
- [Basin](https://usebasin.com/) - Simple, no code required
- [Netlify Forms](https://www.netlify.com/products/forms/) - Requires Netlify

## 📸 Add Images

1. Create: `assets/images/` folder
2. Add images (JPG recommended for photos)
3. Update HTML:
```html
<img src="/assets/images/dr-mastakov.jpg" alt="Dr Mikhail Mastakov">
```

## 🎨 Customize

### Colors: Edit `assets/css/style.css`
```css
:root {
  --color-primary: #009688;      /* Teal - change this */
  --color-primary-dark: #00796b;
  /* ... more variables ... */
}
```

### Content: Edit any `.html` file directly

### Phone Numbers: Use find-and-replace
- `07 3414 3950`
- `07 4148 7082`
- `0491 688 212`

## 📋 Checklist Before Going Live

- [ ] Update all phone numbers if needed
- [ ] Add Dr Mastakov's photo to `assets/images/`
- [ ] Update copyright year (2024) if needed
- [ ] Verify all links work (test locally first)
- [ ] Check mobile responsiveness
- [ ] Add form processing (Formspree or similar)
- [ ] Connect custom domain
- [ ] Test appointment form submission
- [ ] Set up Cloudflare email forwarding for contact inquiries
- [ ] Submit sitemap to Google Search Console

## 🧪 Test Locally

```bash
# Start local server
python -m http.server 8000

# Visit: http://localhost:8000
```

## 📞 Need Help?

- **Deployment:** See `README.md`
- **HTML editing:** Use any text editor (VS Code recommended)
- **GitHub:** https://docs.github.com/en/get-started
- **Cloudflare Pages:** https://developers.cloudflare.com/pages/

## 🔒 AHPRA Compliance Notes

This site follows all AHPRA advertising guidelines:
- ✅ No patient testimonials
- ✅ No testimonial star ratings
- ✅ No "best", "guaranteed" or "free" claims
- ✅ No outcome guarantees
- ✅ Educational content only
- ✅ Proper medical emergency disclaimers
- ✅ Clear appointment process (not "instant booking")

## 📊 Monitor Performance

Once deployed:
1. **Analytics:** Cloudflare Pages Dashboard → Analytics
2. **Search Console:** Google Search Console (add sitemap)
3. **Uptime:** Cloudflare provides 99.9% SLA

---

**You're ready to go live!** 🎉
