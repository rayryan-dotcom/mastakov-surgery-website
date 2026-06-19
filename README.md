# Dr Mastakov Surgery - Cloudflare Pages Site

A modern, AHPRA-compliant static website for Dr Mastakov Surgery built with HTML, CSS, and JavaScript. Ready to deploy on Cloudflare Pages.

## 📋 Site Structure

```
mastakov-site/
├── index.html                          # Homepage
├── pages/
│   ├── about.html                      # About Dr Mastakov
│   ├── procedures.html                 # Procedures overview
│   ├── procedures/
│   │   ├── weight-loss.html           # Weight loss surgery
│   │   ├── hernia.html                # Hernia repair
│   │   ├── abdominoplasty.html        # Abdominoplasty
│   │   └── general-surgery.html       # General surgery
│   ├── locations.html                  # Clinic locations
│   ├── patient-info.html              # Patient info & FAQs
│   └── contact.html                    # Contact & appointment form
├── assets/
│   ├── css/
│   │   └── style.css                   # Main stylesheet
│   └── js/
│       └── main.js                     # JavaScript functionality
└── README.md                           # This file
```

## 🚀 Deployment to Cloudflare Pages

### Prerequisites
- GitHub account
- Git installed locally
- Cloudflare account

### Step 1: Initialize Git Repository

```bash
cd mastakov-site
git init
git add .
git commit -m "Initial commit: Dr Mastakov Surgery website"
```

### Step 2: Create GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Create a new repository: `mastakov-surgery-website`
3. Don't initialize with README (we already have one)
4. Copy the commands to add remote and push:

```bash
git remote add origin git@github.com:rayzatech.com.au/mastakov-surgery-website.git
git branch -M main
git push -u origin main
```

**Note:** Use your `git@rayzatech.com.au` credentials as specified.

### Step 3: Deploy to Cloudflare Pages

1. Log in to your [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Go to **Pages** > **Create a project**
3. Select **Connect to Git**
4. Choose the `mastakov-surgery-website` repository
5. Configure build settings:
   - **Framework preset:** None
   - **Build command:** (leave blank - it's a static site)
   - **Build output directory:** `/` (root)
6. Click **Save and Deploy**

Cloudflare will automatically deploy your site. You can then add your custom domain (`mastakovsurgery.com.au`) in the Pages settings.

## 🔧 Configuration

### Custom Domain
After deployment, connect your domain:
1. In Cloudflare Pages, go to **Custom domain**
2. Enter `mastakovsurgery.com.au`
3. Follow the DNS setup instructions

### Form Submissions (Optional)
The contact form is set up to work with Cloudflare Pages Forms:
- Replace `TURNSTILE_KEY` in `contact.html` with your Cloudflare Turnstile key
- Visit [Cloudflare Turnstile](https://dash.cloudflare.com/turnstile) to create a site key
- Or use a third-party form service like Formspree, Basin, or Netlify Forms

### Analytics
Cloudflare Pages includes analytics by default. View them in your dashboard under **Pages > your-site > Analytics**.

## 📱 Features

- **Fully Responsive** - Works on all devices (mobile, tablet, desktop)
- **AHPRA Compliant** - Factual, educational content without prohibited claims
- **SEO Optimized** - Proper meta tags, structured data, canonical URLs
- **Accessible** - WCAG 2.1 AA compliant
- **Fast** - Minified CSS/JS, optimized assets
- **Secure** - HTTPS by default with Cloudflare
- **No Dependencies** - Pure HTML, CSS, JavaScript (no frameworks required)

## 🎨 Customization

### Colors
Edit CSS variables in `assets/css/style.css`:
```css
:root {
  --color-primary: #009688;
  --color-primary-dark: #00796b;
  /* ... more colors ... */
}
```

### Content
All content is in HTML files. Edit directly or use find-and-replace to update:
- Practice contact details
- Location information
- Service descriptions
- Doctor information

### Images
To add images (Dr Mastakov's photo, etc.):
1. Create `assets/images/` directory
2. Add image files
3. Update `<img>` tags in HTML files
4. Example: `<img src="/assets/images/dr-mastakov.jpg" alt="Dr Mikhail Mastakov">`

## 📝 Content Guidelines

### AHPRA Compliance
The site content follows AHPRA advertising guidelines:
- ✅ No patient testimonials or star ratings
- ✅ No "guaranteed" or "best" claims
- ✅ No before/after images
- ✅ Educational, factual information
- ✅ Proper disclaimers on all procedure pages
- ✅ Clear emergency contact information

### Updating Information
When updating:
1. Check all pages for consistency
2. Update footer copyright year as needed
3. Test all links work correctly
4. Verify phone numbers and addresses

## 🔍 Testing Locally

To test locally before deploying:

```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (http-server)
npm install -g http-server
http-server
```

Visit `http://localhost:8000` and navigate through the site.

## 🚀 Updates & Maintenance

### To update the site:

1. Make changes locally
2. Test thoroughly
3. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update: [description of changes]"
   git push
   ```
4. Cloudflare Pages will automatically deploy the changes

### Monitoring
- Check Cloudflare Pages **Analytics** for traffic
- Monitor **Build & Deployment** for any errors
- Set up Cloudflare alerts for issues

## 📞 Support

- **Practice Contact:** 07 3414 3950
- **Hervey Bay:** 07 4148 7082
- **Mobile:** 0491 688 212

## 📄 License

Copyright © 2024 Dr Mastakov Surgery. All rights reserved.

---

**Last Updated:** June 2024  
**Built for:** Cloudflare Pages
