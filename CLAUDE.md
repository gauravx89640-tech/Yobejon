# CLAUDE.md — Yobejon Beauty Website

Context for Claude Code when working on this project. Keep this file updated as the build evolves.

## Project
Mobile-first marketing website for **Yobejon Beauty**, a boutique nail salon in Clearwater, FL. Single-page scrolling site with anchor navigation. Generated initially in v0, now maintained in Claude Code.

**Stack:** Next.js (App Router), Tailwind CSS, shadcn/ui.
**Priority:** mobile-first — design for ~375px first, scale up with breakpoints. No horizontal scroll, touch-friendly tap targets.

## Design Direction
Aesthetic reference: **Modern Chic Nail Bar** — elegant, editorial, fashion-magazine feel. Warm, minimal, lots of whitespace.

### Palette (use these exact values — do NOT use gold/tan)
- Background: cream / off-white `#F4F0EC`
- Accent: soft blush pink `#E7D8D3` (deeper blush `#D9BFB7`)
- Text / buttons: deep charcoal `#2B2B2B`
- Cards: white

### Typography
- Headings: high-contrast serif (Cormorant Garamond or Playfair Display)
- Eyebrow labels ("Welcome to", "About Us", "Pricing"): handwritten script (Dancing Script / Sacramento)
- Body: clean sans-serif (Inter / Montserrat), light weight, generous letter-spacing

### Buttons
Solid charcoal rectangles, uppercase white text, letter-spaced (e.g. `BOOK NOW`). Secondary variant: blush fill.

### Layout signatures
Tilted "polaroid" photo cards (slight rotation, white border, soft shadow) overlapping section edges. Thin hairline rules. Centered headings. Uppercase tracked-out labels.

## Booking
`BOOKING_URL = "https://booksy.com/en-us/108222_yobejon-the-beauty-experience_nail-salon_15980_clearwater"`
Every Book / Book Now / Reserve / "Yes Please" button opens this in a new tab (`target="_blank" rel="noopener"`). This is her real Booksy page.

## Business Facts
- **Owner:** Yolande DeGale (opened salon 2017)
- **Full name:** Yobejon...the beauty experience
- **Positioning:** Black-owned & operated, by-appointment, "no crowds, customized personal care." Tagline: *"It's not just nails, it's about you — your confidence, your self-care, your time to shine."* / *"Where self care meets art."*
- **Address:** 2140 Drew Street Suite G, Clearwater, FL 33765
- **Phone:** (727) 754-9645
- **Email:** Yobejon@yahoo.com
- **Hours:** Sat 9am–5pm · Sun Closed · Mon 12:30–9:30pm · Tue Closed · Wed 8:30am–9:30pm · Thu 9am–9:30pm · Fri 9am–9:30pm
- **Socials:** Facebook `https://www.facebook.com/profile.php?id=100048287659650` · Instagram `https://www.instagram.com/yobejon/`

## Pricing (real menu)
| Service | Duration | Price |
|---|---|---|
| Classic Nails | 90 min | $45.00 |
| Gel Manicure | 45 min | $35.00 |
| Gel Pedicure | 55 min | $45.00 |
| Pedicure (Express) | 35 min | $25.00 |
| Gentleman's Pedicure | 45 min | $45.00 |
| Product Removal | 45 min | $25.00 |

Note: *Classic Nails — short/medium length, fullset/fill includes manicure, cut down, and repairs. Requested designs add cost. Appointment required.*

## Testimonials (REAL — never replace with placeholder names like "Sarah Mitchell")
1. **Lisa Curtis** — "Yobejon is truly an artist! She is always very busy so I have to be sure to make my next appointment quickly! Always smiling! I am a purple girl and I never know what to put on my nails — I leave it all up to Yobejon. She comes up with a design and starts her magic by creating beautiful nails!"
2. **Lisa Postell** — "Yobejon is the best nail tech I have found. She takes the time to perfect my nails. Her nail art is out of this world — she makes your nails little pieces of art. And her pedicures are wonderful too!"
3. **M. BenjiOgaga** — "I love this place and the fact that all the attention is placed on me. I don't feel rushed. Yobejon is very friendly and takes her time to make sure you are well pampered before you leave the salon. An amazing place to relax and get a mani and pedi."

## Sections (in order)
Hero · Services (Manicure, Pedicure, Nail Art, Spa Treatment) · Gallery · About + Meet Yolande · Pricing · Why Choose Us / testimonials · Newsletter · Contact (with Google Map embed) · Footer

Google Map embed src:
`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3789.9505372814833!2d-82.7517407242378!3d27.968547076033897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2f1cccc485acf%3A0x8552b45086052ce6!2sYobejon...the%20beauty%20experience!5e1!3m2!1sen!2sus!4v1761242023681!5m2!1sen!2sus`

## Known fixes still needed
- [ ] Replace v0's gold/tan palette with the cream/blush/charcoal scheme above
- [ ] Replace placeholder testimonials with the 3 real ones
- [ ] (Optional) Add tilted polaroid photo styling per reference
- [ ] Swap placeholder images for her real salon/nail photos

## Conventions
- Make surgical edits to existing components — do not regenerate whole sections and risk overwriting real content.
- Run `npm run dev` to preview. Verify on a 375px mobile viewport before considering a change done.
