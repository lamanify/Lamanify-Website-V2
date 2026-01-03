/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                // Your Brand Colors
                brand: {
                    DEFAULT: '#e9204f', // Neon Pink
                    dark: '#b81238',
                    light: '#ff4d73',
                },
                // Modern SaaS Greys
                slate: {
                    950: '#020617', // Deep background
                }
            },
            fontFamily: {
                // Ensure you import Inter or Plus Jakarta Sans in your Layout
                sans: ['Inter', 'sans-serif'],
            }
        },
    },
    plugins: [require('@tailwindcss/typography')],
};
