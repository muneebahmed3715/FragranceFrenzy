<div align="center">

# Fragrance Frenzy

Static fragrance storefront showcasing best sellers, new arrivals, weekly deals, and simple login/signup/contact flows.

</div>

## Overview

- Landing page highlights curated perfume collections with modal popups for quick product details.
- Separate pages for account creation, login, and a contact form (all client-side only).
- Shared layout elements: free-delivery banner, centered brand title, search bar, and navigation links.
- Styling is plain CSS; behavior is minimal vanilla JS for the product detail modal.

## Project Structure

- Root HTML
	- `index.html` – main storefront with best sellers, new arrivals, weekly deals, info section, and modal.
	- `contact.html` – contact form with name, email, and message fields.
	- `login.html` / `loginpage.html` – login form and simple success stub page.
	- `signup.html` / `signuppage.html` – signup form and success stub page.
- Styling
	- `style.css` – global styles for the storefront (layout, typography, product cards, modal, navbar).
	- `login.css`, `signup.css`, `contant.css` – form page styles mirroring the main layout.
- Behavior
	- `script.js` – opens/closes the product detail modal and fills its content from card clicks.
- Assets
	- Product/hero images (`*.jpeg`) stored at the repo root.

## Features

- Product modal with dynamic content populated from card onclick handlers.
- Smooth-scroll navigation between homepage sections.
- Form pages (login, signup, contact) with required fields but no backend submission.
- Font Awesome icons loaded via CDN for the account glyph.

## Usage

1. Open `index.html` in a browser (double-click or serve locally).
2. Click any product card to view details in the modal; use the ✕ to close.
3. Navigate to `login.html`, `signup.html`, or `contact.html` via the navbar links.

> Note: Forms are static and do not send data to a server. Success pages (`loginpage.html`, `signuppage.html`) are simple confirmation stubs.

## Local Development

- No build step or dependencies required; files are plain HTML/CSS/JS.
- If you prefer a local server for proper asset loading, run one in the project root, e.g. `python -m http.server 8000` and open `http://localhost:8000/index.html`.

## Next Steps (Ideas)

- Add form validation and client-side feedback.
- Hook login/signup/contact forms to a backend API.
- Replace inline `onclick` handlers with delegated event listeners in `script.js`.
- Make product data JSON-driven to avoid repetition.
- Improve responsiveness for small screens (nav stacking, image scaling).
