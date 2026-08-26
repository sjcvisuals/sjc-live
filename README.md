# SJC.live

Marketing site for SJC / SJCVisuals Ltd — virtual production tools, media-server programming, and client-side VP supervision.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Deployment**: Railway (Docker)

## Local Development

### Prerequisites

- Node.js 22+
- npm 10+

### Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_CONTACT_EMAIL` | No | Email address for the contact form. If not set, the form displays a TODO message. |

Create a `.env.local` file for local development:

```bash
NEXT_PUBLIC_CONTACT_EMAIL=your-email@example.com
```

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Railway Deployment (Preview)

This repo is configured for Railway deployment via Dockerfile.

### Deploy a Preview Service

1. **Connect Repository**
   - Go to [railway.app](https://railway.app) and create a new project
   - Select "Deploy from GitHub repo"
   - Connect the `sjcvisuals/sjc-live` repository
   - Select this PR branch for preview deployment

2. **Configure Environment**
   - In Railway dashboard, go to your service's Variables tab
   - Add `NEXT_PUBLIC_CONTACT_EMAIL` with your contact email address

3. **Deploy**
   - Railway will automatically build and deploy using the Dockerfile
   - Once deployed, you'll get a `*.railway.app` URL

4. **Share Preview URL**
   - Copy the `https://your-service-name.railway.app` URL
   - Share with stakeholders for review
   - This preview URL is completely separate from production

### Preview Environment Notes

- The preview deployment uses Railway's default `*.railway.app` domain
- No custom domain configuration needed for preview
- The site's canonical URL will be the preview host
- All functionality works the same as production

## ⚠️ Custom Domain (sjc.live) — NOT YET

**DO NOT attach the custom domain `sjc.live` to any Railway service.**

The domain currently points to the existing Wix site and must remain there until Spencer explicitly approves the cutover.

### Later: Custom Domain Setup

When ready to go live (after approval):

1. In Railway dashboard, go to Settings → Domains
2. Add `sjc.live` as a custom domain
3. Update DNS records as instructed by Railway
4. Verify the domain in Railway

This is documented here for future reference only. **Do not perform these steps without explicit approval.**

## Project Structure

```
src/
├── app/
│   ├── layout.tsx      # Root layout with header/footer
│   ├── page.tsx        # Home page
│   ├── work/           # Work/credits page
│   ├── services/       # Services page
│   └── contact/        # Contact page
├── components/
│   ├── Header.tsx      # Site header with navigation
│   ├── Footer.tsx      # Site footer with SIGNL link
│   ├── LEDVolumeHero.tsx  # Canvas-based LED grid animation
│   ├── WorkCard.tsx    # Credit card component
│   ├── ServiceCard.tsx # Service card component
│   └── ContactForm.tsx # Contact form with mailto fallback
└── lib/
    └── data.ts         # Credits and services data
```

## Content Guidelines

### Credits

All credits in `src/lib/data.ts` are factual and verified:
- Spencer Chase / SJC work is credited as "VP Supervisor" unless otherwise noted
- Previous Lux Machina work is clearly marked as "Engine TD (Lux Machina)"
- No invented clients or claims

### SIGNL

SIGNL ([signl.store](https://www.signl.store)) is a separate product. It appears only as:
- Small header link
- Small footer link

It is intentionally **not** featured in the hero or main content.

## Accessibility

- Semantic HTML with proper heading hierarchy
- ARIA labels on interactive elements
- Skip link for keyboard navigation
- `prefers-reduced-motion` respected for animations
- Focus indicators on all interactive elements
- Proper color contrast ratios

## License

Copyright © SJCVisuals Ltd. All rights reserved.
