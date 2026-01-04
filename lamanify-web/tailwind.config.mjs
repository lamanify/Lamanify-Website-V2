/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                // Brand SOP Primary Colors
                brand: {
                    DEFAULT: '#e9204f', // Primary Neon
                    dark: '#8a0f2b', // Primary Dark (for gradients)
                    light: '#ff4d73',
                },
                // Brand SOP Neutral Surfaces (Light Mode)
                surface: {
                    canvas: '#FFFFFF', // Main background
                    offwhite: '#F9FAFB', // Section backgrounds, Card backgrounds
                },
                // Brand SOP Text Hierarchy
                ink: {
                    black: '#0a0a0a', // Headings (not pure black)
                    body: '#404040', // Body text (high readability)
                    muted: '#737373', // Muted/Meta text
                },
                // Modern SaaS Greys
                slate: {
                    950: '#020617', // Deep background
                },
                // Brand SOP Borders
                border: {
                    DEFAULT: '#E5E7EB', // Subtle strokes for cards
                    pink: '#ffe4e9', // Pink tinted hover
                }
            },
            borderRadius: {
                card: '16px', // Brand SOP card radius
                btn: '8px', // Brand SOP button radius
            },
            fontFamily: {
                // Brand SOP: Poppins (refined)
                sans: ['Poppins', 'sans-serif'],
            },
            boxShadow: {
                'brand-glow': '0px 4px 14px 0px rgba(233, 32, 79, 0.35)',
                'brand-glow-hover': '0px 6px 20px 0px rgba(233, 32, 79, 0.45)',
            }
        },
    },
    plugins: [require('@tailwindcss/typography')],
};
