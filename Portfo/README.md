# Portfo

This is a Vite React portfolio app ready for deployment on Render as a static site.

## Render settings

Use these settings in the Render dashboard if you deploy from the web UI:

- Environment: `Static Site`
- Root Directory: `Portfo`
- Build Command: `npm install && npm run build`
- Publish Directory: `dist`

The app already includes a SPA fallback in [public/_redirects](public/_redirects) so React Router pages load on refresh and direct links.
