# 📂 BRAND_SOP.md

**Project:** Lamanify (2026 Rebrand)
**Role:** Brand Guidelines & UI System
**Version:** 1.0
**Aesthetic:** "Clinical Precision meets SaaS Velocity" (Vercel x Medical Cleanliness)

## 1. Core Philosophy

* **The Vibe:** We are not selling "marketing services"; we are providing a **Growth Operating System** for clinics.
* **The Look:** High-contrast Light Mode. Deep blacks on stark whites. The neon pink (`#e9204f`) is used strictly as a precision tool (data points, active states, emphasized keywords), never as a background flood.
* **The Imagery:** No human faces. Use **Abstract UI Mockups** (charts, dashboards, appointment notifications) to represent success.

---

## 2. Color System (The "Pulse" Palette)

We use a "Medical White" base with a "Neon Pulse" accent.

### Primary Colors

* **Primary Neon:** `#e9204f` (The main brand color)
* **Primary Dark:** `#8a0f2b` (Used for gradients and hover states)
* **The "Pulse" Gradient:** `linear-gradient(135deg, #e9204f 0%, #8a0f2b 100%)`

### Neutral Surfaces (Light Mode)

* **Canvas White:** `#FFFFFF` (Main background)
* **Surface Off-White:** `#F9FAFB` (Section backgrounds, Card backgrounds)
* **Border Grey:** `#E5E7EB` (Subtle strokes for cards)

### Text Hierarchy

* **Headings (Ink Black):** `#0a0a0a` (Avoid pure #000000; it creates eye strain on white)
* **Body (Slate):** `#404040` (High readability)
* **Muted/Meta:** `#737373`

---

## 3. Typography (Poppins Refined)

**Font Family:** Poppins (Google Fonts)
*Crucial: Poppins is wide. To look "SaaS", we must tighten it.*

| Element | Weight | Size (Desktop) | Tracking (Letter Spacing) | Line Height | Notes |
| --- | --- | --- | --- | --- | --- |
| **H1 Hero** | Bold (700) | 3.75rem (60px) | `-0.03em` | 1.1 | Tight & authoritative |
| **H2 Section** | Bold (700) | 2.5rem (40px) | `-0.02em` | 1.2 | Standard section headers |
| **H3 Card** | Medium (500) | 1.5rem (24px) | `-0.01em` | 1.3 | Feature titles |
| **Body** | Regular (400) | 1rem (16px) | `0em` | 1.6 | **Do not use Bold for body text** |
| **Button** | Medium (500) | 0.95rem | `0em` | 1.0 | Crisp labels |
| **Eyebrow** | SemiBold (600) | 0.75rem | `0.05em` | 1.0 | Uppercase, spaced out |

---

## 4. UI Components & Elements

### A. The "Pulse" Gradient Text (Emphasis Only)

Apply the gradient **only** to key result-words in headlines. Never the whole headline.

* *Bad:* `<h1 class="gradient">Digital Marketing For Clinics</h1>`
* *Good:* `<h1>The Growth Engine for <span class="text-gradient">Modern Clinics</span></h1>`

**CSS Rule:**

```css
.text-gradient {
  background: linear-gradient(135deg, #e9204f 0%, #8a0f2b 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

```

### B. Buttons (SaaS Style)

* **Primary CTA:** Solid Gradient background. Rounded corners (Radius: 8px—not pill-shaped, not square).
* *Text:* White.
* *Shadow:* `box-shadow: 0px 4px 14px 0px rgba(233, 32, 79, 0.35);` (Pink glow underneath).


* **Secondary CTA:** White background, 1px border (`#E5E7EB`), Black text. Hover state: Border becomes `#e9204f`.

### C. Cards (Bento Grid Style)

Do not use lists. Use "Cards" that look like software widgets.

* **Background:** `#FFFFFF` on top of `#F9FAFB` section.
* **Border:** 1px solid `#E5E7EB`.
* **Radius:** `16px` (Smooth).
* **Hover Effect:** Translate Y `-4px`, Shadow increases. Border color changes to Tinted Pink (`#ffe4e9`).

---

## 5. Imagery: The "Interface" Protocol

We do not use photos of people. We use **Constructed UI**.

**Concept:** Show, don't tell. If the headline is "More Patient Bookings," the image must be a stylized notification card or graph.

* **Style:** Clean, flat vector lines on glass-like backgrounds.
* **Colors in Graphics:** Greyscale wireframes with `#e9204f` used for:
* Trend lines going up.
* "New Appointment" notification badges.
* "Active" toggle switches.



---

## 6. Layout Composition

* **White Space:** Extreme. Vercel uses massive margins. Give the text room to breathe.
* **Grid:** Use a 12-column grid. Align text to the left.
* **The "Medical" Divider:** Use simple, 1px horizontal lines (`<hr>`) colored `#E5E7EB` to separate sections. This mimics the lines on a medical chart or prescription pad.

---

### **Developer Implementation Checklist**

1. [ ] Import Poppins (Weights: 400, 500, 600).
2. [ ] Set global background to `#FFFFFF`.
3. [ ] Create utility class `.text-gradient`.
4. [ ] Ensure all "Pink" usage matches `#e9204f`.
5. [ ] Verify H1 tracking is set to `-0.03em`.
