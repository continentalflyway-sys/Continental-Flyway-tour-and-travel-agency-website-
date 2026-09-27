# Continental Flyway Website — Updated Edition

Responsive bilingual (English/Bangla) travel agency website with founder profiles, service cards, destination cards, region filters, country search, active navigation and contact links.

## Files
- `index.html` — page content and structure
- `style.css` — responsive navy, white and gold design
- `app.js` — mobile menu, language toggle, active navigation, country cards/filter/search, enquiry form
- `assets/easin-arafat-founder.jpg` — Founder photo supplied by the client
- `assets/shahanul-islam-cofounder.jpg` — Co-founder photo supplied by the client

## Publish to the existing GitHub Pages repository
1. Extract this ZIP.
2. In the repository, upload/replace `index.html`, `style.css`, and `app.js` at the repository root.
3. Upload the `assets` folder and both JPG files, preserving the folder name `assets`.
4. Commit changes. Wait a few minutes and refresh the published site.

## Contact details included
- Primary: +8801677055600
- Alternative: +8801998888321
- WhatsApp: +8801922422644
- Email: continentalflyway@gmail.com

## Important notes
- Destination cards are a curated set of featured countries across the continents, including the South Asian subcontinent. They are not yet a complete list of every country in the world. More country entries can be added to the `countries` array in `app.js`.
- The enquiry form opens the visitor's email app using `mailto:`; it does not send to a server automatically.
- Flight requests are manual enquiry/ticketing support only. This website does not display live fares or issue tickets automatically. Use your authorised booking channel/GDS.
- Visa decisions are made by the relevant authorities. Manpower/recruitment services should be offered only with the required licences and in compliance with applicable laws.
- Country imagery uses external Unsplash image URLs and requires internet access.


## About Us update
The About section now includes Who We Are, Our Mission, What We Offer, and Why Choose Us in English and Bengali. It also mentions Study Abroad, Manpower Services, Umrah, and manual air ticketing.


## Contact and office address

The Contact enquiry section and website footer show both primary phone numbers, WhatsApp, email, and the office address. The address links to the provided Google Maps location.

- Primary contacts: +8801677055600, +8801998888321
- WhatsApp: +8801922422644
- Email: continentalflyway@gmail.com
- Office: 1/3 Arong road, Lalmatia, Mohammadpur, 1207, Dhaka, Bangladesh
- Google Maps: https://maps.app.goo.gl/MpXSr8HMwUXPrT8CA


Website logo: `assets/continental-flyway-logo.jpg` (provided by the owner) is used in the header and footer. The floating WhatsApp button links to https://wa.me/8801922422644.


Update note: The logo image has been removed from the header and footer; the company name remains as text. The floating WhatsApp chat button is retained.


## Mobile menu customization
The desktop navigation remains transparent over the hero section. On mobile, tapping the menu button opens a vertical dropdown panel. To change the panel colors, edit these CSS variables near the end of `style.css`: `--mobile-menu-bg`, `--mobile-menu-text`, `--mobile-menu-accent`, and `--mobile-menu-border`. The rest of the site files and content are unchanged in this update.


## Mobile and image fixes (latest)
- Mobile navigation opens as a left-side vertical panel; customize its colors using `--mobile-menu-bg`, `--mobile-menu-text`, and `--mobile-menu-accent` in `style.css`.
- Founder and co-founder photos use matching, uncropped frames; mobile founder cards stack vertically.
- Pakistan, Sri Lanka, Egypt, and Canada destination images are bundled locally in `assets/`, so those four cards do not depend on remote image hosts.
- The header is transparent at the top and switches to a dark translucent background after scrolling for readable navigation.


Profile image update: Founder, Co-Founder, and Director portrait PNGs are normalized to a matching 800×1000 transparent canvas and displayed in equal-height profile frames. Director profile added for Bahalul Islam.


## Final update notes
- Three individual transparent founder / co-founder / director portraits are normalized to the same canvas and baseline.
- Mobile navigation opens as a left-side vertical drawer. The drawer colors can be adjusted through the `--mobile-menu-bg`, `--mobile-menu-text`, `--mobile-menu-accent`, and `--mobile-menu-border` variables in `style.css`.
- The Canton Fair feature links to YouTube search results for Canton Fair videos. It is a video discovery section, not a generated AI video file.
- Existing contact details and the enquiry-by-email behavior are preserved.
