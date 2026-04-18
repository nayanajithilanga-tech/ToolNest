# ToolNest - Premium Online Tools Platform

ToolNest is a comprehensive, production-ready suite of 30+ fully functional, client-side browser tools built with pure HTML, CSS, and Vanilla JavaScript. It is heavily optimized for SEO and AdSense.

## Features
- 30+ Tools across multiple categories (Developer, Text, Calculators, Image/Document, Utilities)
- 20 SEO-optimized blog articles for high-ranking potential
- AdSense Ready layout (Header, Sidebar, In-content, Footer)
- Dark/Light Mode toggle with local storage persistence
- Premium Glassmorphism UI
- Fully responsive design

## Setup Instructions

This platform is statically generated and requires no backend server for its core functionality.

1. **Local Testing:**
   Simply open `index.html` in your web browser. Or, for a better experience with local files (some fetch requests might fail due to CORS on `file://` protocol), use a local server:
   - using Python: `python -m http.server 8000`
   - using Node: `npx serve .`

2. **Deployment:**
   - **GitHub Pages:** Create a repository, push this code, and enable GitHub Pages on the `main` branch.
   - **Netlify / Vercel:** Drag and drop this folder into Netlify/Vercel dashboard, or link your Git repository. It will deploy instantly.

3. **Customization:**
   - Modify the Owner Name (`Dilshan Nayanajith Ilangasinghe`) and Contact Email (`nayanajithilangasinghe2002@gmail.com`) in `index.html` and the `/legal/` pages.
   - Insert your AdSense Client ID and Ad Slot IDs inside the `<div class="ad-placeholder">` elements.
   - Change the domain in `sitemap.xml` and `robots.txt` if using a custom domain.

## License
Created for Dilshan Nayanajith Ilangasinghe.
