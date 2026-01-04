# Standard Operating Procedure (SOP) - Creating Portfolio Pages

This SOP outlines the automated workflow for adding new case studies to the standard Lamanify portfolio.

## Prerequisites

Ensure you have the following installed/configured:
- Node.js & npm installed
- `tsx` installed (e.g., via `npm install -g tsx` or use `npx`)
- **Supabase Project Access**: Project `nnfmmovmcxjlmbisrnkt` ("Lamanify Website")
- ScreenshotOne API Keys (in `.env`)

## Workflow Overview

1.  **Generate Assets**: Use `generate_mockups.ts` to take automated screenshots locally.
2.  **Upload Assets**: Use `upload_to_cloudinary.ts` which securely proxies to Supabase Edge Function (`upload-assets`).
3.  **Create Page**: Duplicate the template and link the assets.

---

## Step 1: Generate Mockups (Screenshots)

We use **ScreenshotOne** to autogenerate consistent device-specific views.

1.  Open `scripts/generate_mockups.ts`.
2.  Locate the `targetUrl` variable and update it with the client's live website URL.
3.  **Environment Variables**: Ensure your `.env` file contains your current `SCREENSHOTONE_ACCESS_KEY`.
4.  Run the script:
    ```bash
    # Loads keys from .env automatically if using a loader, or pass them inline:
    export $(cat .env | xargs) && npx tsx scripts/generate_mockups.ts
    ```
    > **Tip**: If popups appear, set `block_banners_by_heuristics: true` in the script options.
    This will save images to `temp_screenshots/`.

---

## Step 2: Upload to Cloudinary (via Supabase)

We use a Supabase Edge Function to handle uploads securely without exposing Cloudinary keys locally.

1.  Open `scripts/upload_to_cloudinary.ts`.
2.  Update the `FOLDER` variable with the client's name: `portfolio_assets/Client Name`.
    > **Note**: Use spaces in the folder name if needed (e.g., `Denta Levant`), the script handles encoding.
3.  Run the upload:
    ```bash
    npx tsx scripts/upload_to_cloudinary.ts
    ```
    The script communicates with the `upload-assets` Edge Function using the project's Anon Key.

---

## Step 3: Create the Portfolio Page

1.  **Duplicate Template**: Copy `src/pages/portfolio/klinik-aurora.astro`.
2.  **Update Config**:
    ```astro
    const FOLDER_NAME = 'portfolio_assets/Client%20Name'; 
    ```
3.  **Mockup Frames**: The template uses standard Cloudinary frames:
    - **iPhone 16**: `Lamanify_39_aet0ul.webp`
    - **iPad Landscape**: `Untitled_2_oijgni.webp`
4.  **UI Implementation**: The screenshots are layered behind/inside these frames using `absolute` positioning within the Hero section. Ensure `mobileMockupUrl` and `tabletMockupUrl` are correctly mapped.

## Step 4: Verification

1.  Run the dev server: `npm run dev`
2.  Navigate to `http://localhost:4321/portfolio/client-slug`
3.  Verify:
    *   Images are loading correctly from Cloudinary.
    *   Metadata (Title/Description) is correct.
    *   Mobile/Desktop mockups look sharp.

---

## Step 5: Copywriting Guidelines

When writing portfolio copy, **DO NOT** use generic marketing or heavy tech jargon. Speak directly to business owners (doctors, founders) about **Trust, Authority, and Results**.

### 1. The Pivot: From Tech to Professionalism
*   **Don't Say:** "We re-engineered the digital stack."
*   **Do Say:** "We unified the brand architecture to project authority."
*   **Don't Say:** "Reduced bounce rate by optimized page loads."
*   **Do Say:** "Created a frictionless patient journey that secures appointments."

### 2. The "Digital Receptionist" Concept
*   **Never** use "Digital Lobby". Use **"Digital Receptionist"**.
*   The website is the first staff member a patient interacts with. It must be as welcoming, clean, and organized as a physical front desk.

### 3. Required Imports
Ensure you have the necessary icons imported for the SaaS layout to avoid ReferenceErrors:
```typescript
import { ArrowRight, CheckCircle2, TrendingUp, Search, Calendar, Globe, Smartphone, ShieldCheck, X, AlertCircle, XCircle } from 'lucide-react';
```
