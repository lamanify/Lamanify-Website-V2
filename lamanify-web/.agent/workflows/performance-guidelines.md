---
description: Guidelines for high-performance and SEO-optimized website creation
---

To stay disciplined and keep the site fast:

1. **Default to .astro files.** 
   - Only create a `.tsx` file if you absolutely need `useState` or `useEffect`.
   - Astro components result in ZERO client-side JavaScript by default.

2. **Use Standard HTML elements first.** 
   - Try `<details>` for accordions or CSS `:hover` for dropdowns before reaching for a React library.
   - This ensures content is crawlable by SEO engines immediately.

3. **Isolate heavy libraries.** 
   - If you need a heavy library (like a Charting library), wrap it in a React component and lazy load it with `client:visible`.
   - Example: `<HeavyChart client:visible />`

4. **Follow GPU properties for animations.**
   - Stick to `opacity`, `scale`, `x`, `y`, `rotate`.
   - Avoid `layout` props or animating `width`/`height`.

5. **Client Directives Strategy.**
   - `client:load` for Hero and Navbar (critical).
   - `client:visible` for everything else below the fold.
