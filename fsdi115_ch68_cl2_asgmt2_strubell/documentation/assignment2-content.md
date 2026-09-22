# SGnG Assignment 2 — UX Design Content Reference
## FSDI 115 | Tim Strubell | Fall 2026

---

## SECTION 4 — USER FLOW

### Overview
The SGnG user flow maps the complete purchase journey for a first-time desktop visitor
discovering and buying a leather wallet. The flow covers 5 primary screens and 3 decision points.

### Entry Point
User lands on the SGnG Home page via organic search or direct URL.

### Flow Path (Happy Path)
1. HOME — User sees hero banner (Fall 2026 Collection), trust strip, featured products
2. CATALOG — User clicks "Shop" in nav → views all 4 products in grid layout
3. PRODUCT DETAIL — User clicks "Details" on Classic Leather Bifold Wallet
4. CART — User clicks "Add to Cart" → reviews order summary, shipping, total
5. CONFIRMATION — User completes checkout → sees Order Confirmed screen with checkmark

### Decision Points
- From Home: Browse Collections → Catalog OR Featured Products → Product Detail (skip Catalog)
- From Catalog: Select product → Product Detail OR Return to Home
- From Cart: Proceed to Checkout → Confirmation OR Continue Shopping → Catalog

### Error / Edge Paths
- Cart empty: "Your cart is empty — start shopping" CTA returns user to Catalog
- Out of stock: Product Detail shows disabled Add to Cart button with "Notify Me" link
- Checkout error: Inline validation messages; user stays on Cart screen

---

## SECTION 5 — LO-FI WIREFRAMES SUMMARY

### Methodology
Wireframes began as rapid pencil thumbnails (~15–20 sketches) across five screens,
focusing on layout logic, information hierarchy, and primary interaction points — not visual polish.
Sketches were translated into grayscale Figma wireframes using basic shapes, placeholder
imagery blocks, and annotated component labels. No brand colors or typography were applied.
Each wireframe was annotated with design rationale and reviewed with two peers before
progressing to high-fidelity versions.

### Wireframe Files
- Home:             wireframes/1.2-home.txt
- Catalog:          wireframes/2.2-catalog.txt
- Product Detail:   wireframes/3.2-product_details.txt
- Cart:             wireframes/4.2-cart.txt
- Confirmation:     wireframes/5.2-confirmation.txt

---

## SECTION 6 — HI-FI MOCKUP SUMMARY

### Design System Applied
- Background:   #1C1A17 (Deep Charcoal)
- Surface:      #2A2520 (Dark Brown)
- Text:         #F5F0E8 (Warm Cream)
- Accent/CTA:   #C17A3A (Cognac Amber)
- Muted text:   #9A8F82 (Warm Gray)
- Font Display: Georgia / Times New Roman (serif)
- Font Body:    Helvetica Neue / Arial (sans-serif)

### Key Design Decisions
1. Amber as sole action color: #C17A3A reserved strictly for CTAs, prices, active states
2. Dark leather palette: Deep charcoal background evokes premium leather craftsmanship
3. Serif headings: Georgia reinforces heritage brand positioning
4. 4-column product grid on desktop (1440px); collapses to 1-column on mobile
5. Persistent sticky nav with cart badge and dark/light mode toggle

### Mockup Files
- Home:             mockups/1.3-home-hifi.txt
- Catalog:          mockups/2.3-catalog-hifi.txt
- Product Detail:   mockups/3.3-product-detail-hifi.txt
- Cart:             mockups/4.3-cart-hifi.txt
- Confirmation:     mockups/5.3-confirmation-hifi.txt

---

## SECTION 7 — USABILITY TESTING SUMMARY

See: documentation/usability-testing.txt

### Quick Reference
- Participants: 5 (moderated remote via Zoom)
- Prototype: Figma clickable prototype — 5 screens, 2 tasks
- Task 1: Find and add Classic Leather Wallet to cart
- Task 2: Complete checkout and locate order confirmation

### Results Summary
- Task 1 Success Rate: 5/5 (100%)
- Task 2 Success Rate: 4/5 (80%)
- Avg. Session Duration: 8 minutes
- SUS Score: 82 / 100 (Grade B — "Good")

### Top 3 Improvements Made Post-Test
1. Added quantity selector to Cart screen (participants expected it)
2. Increased "Add to Cart" button size on Product Detail (tap target too small on mobile)
3. Added estimated delivery date to Confirmation screen (most-requested missing element)
