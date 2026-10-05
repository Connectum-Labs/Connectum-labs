# Connectum Labs — Website

Multi-page Next.js website for Connectum Labs Pty Ltd.

## Pages

- `/` — Homepage
- `/about` — Company info
- `/ventures` — All ventures
- `/ventures/agencyops` — AgencyOps (also `/agencyops`)
- `/ventures/celestial` — Celestial app
- `/contact` — Contact form

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

### 1. Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/connectum-labs.git
git push -u origin main
```

### 2. Connect to Vercel
- Go to [vercel.com](https://vercel.com) and sign in with GitHub
- Click **Add New → Project**
- Import your `connectum-labs` repo
- Leave all settings as default — Vercel auto-detects Next.js
- Click **Deploy**

### 3. Add your custom domain
In Vercel: **Project → Settings → Domains → Add → connectumlabs.com**

Vercel will show you two DNS records to add. Then:

**In Squarespace (your domain registrar):**
- Go to Domains → connectumlabs.com → DNS Settings
- Add the records Vercel gives you (usually an A record and a CNAME)
- Save — propagation takes 10 min to 1 hour

## Customisation

### Update your email
Search for `hello@connectumlabs.com.au` and replace with your real address.

### Add your ABN
In `app/about/page.tsx`, find the `details` array and add:
```ts
{ label: 'ABN', value: 'XX XXX XXX XXX' },
```

### Add Celestial's public URL
In `app/ventures/celestial/page.tsx`, update the CTA link once Celestial launches publicly.

### Upgrade the contact form
When ready to stop using mailto, sign up at [formspree.io](https://formspree.io) (free),
create a form, and replace the `ContactForm` component's `handleSubmit` with a fetch POST.
