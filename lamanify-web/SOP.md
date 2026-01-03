# Standard Operating Procedure (SOP) - Site Building & Optimization

To keep your site scoring 100 on Google PageSpeed while using "cool design stuffs," follow these three rules:

## Rule #1: Use client:visible (With Exceptions)
Don't load the animation library until the user actually scrolls down to see it.
Use `client:visible` for component islands that contain heavy animations.

**Important Exception:** Do NOT lazy load the **Hero** section or the **Header (Navbar)**. Use `client:load` for these to ensure instant interactivity and LCP performance.

```astro
<Navbar client:load /> {/* Header: Load immediately */}
<HeroAnimation client:load /> {/* Hero: Load immediately */}
<FeaturesSection client:visible /> {/* Below the fold: Lazy load */}
```

## Rule #2: Use "LazyMotion" (Below the Fold)
Framer Motion has a "strict" mode that drastically reduces the bundle size.
**Use this for all components BELOW the fold.**
**Do NOT use this for the Hero or Header.**

### How to implement it (Below Fold Only):
Use the `LazyMotionWrapper` component or manually wrap your animations.

**File:** `src/components/ui/LazyMotionWrapper.tsx`

```tsx
import { LazyMotion, domAnimation, m } from "framer-motion";

// Use 'm' instead of 'motion'
export const FadeIn = ({ children }) => {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
};
```

When writing your own components (Below Fold):
1. Import `m`, `LazyMotion`, and `domAnimation` from `framer-motion`.
2. Wrap your component return with `<LazyMotion features={domAnimation}>`.
3. Use `<m.div>`, `<m.button>`, etc. instead of `<motion.div>`.

### For Hero / Header:
Use standard imports and `client:load`.
```tsx
import { motion } from 'framer-motion';
// Use <motion.div> directly.
```

## Rule #3: Stick to GPU Properties
Avoid the `layout` prop completely.
Transitioning layout properties (width, height, top, left) causes layout thrashing and lag.
Transitioning transform properties (x, y, scale, rotate, opacity) is handled by the GPU and is smooth.

❌ **Avoid:** 
```tsx
<motion.div animate={{ width: "100%" }} /> {/* Causes layout shift/lag */}
```

✅ **Do:** 
```tsx
<motion.div animate={{ x: 100 }} /> {/* Smooth */}
```

### When to use Standard CSS instead?
For simple hover effects or fade-ins, Tailwind CSS is 0kb runtime cost. Use Tailwind for the basics and Framer Motion only for complex sequences.

## Rule #4: Astro First Architecture
Default to `.astro` files for all static content. Only create a `.tsx` file (React) if you absolutely need `useState` or `useEffect` for client-side state management.
If a component doesn't need state, write it in Astro.

## Rule #5: HTML & CSS Over JavaScript
Always try to use standard HTML elements and CSS first.
- Use `<details>` and `<summary>` for accordions instead of React `useState`.
- Use CSS `:hover` for dropdowns or simple state changes.
- This reduces the JavaScript bundle size and improves SEO by keeping the content in the initial HTML.

## Rule #6: Isolate & Lazy Load Heavy Libraries
If you need a heavy library (like a Charting library or complex animation engine):
1. Wrap it in a separate React component.
2. Lazy load it using Astro's `client:visible` (or `client:idle`/`client:only` as appropriate).
This ensures the browser only downloads the heavy JS when the user actually needs to see it.
