/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontSize: {
                xs: ['0.85rem', { lineHeight: '1.25rem' }], // ~13.6px
                sm: ['1rem', { lineHeight: '1.5rem' }],     // 16px
                base: ['1.125rem', { lineHeight: '1.75rem' }], // 18px
                lg: ['1.25rem', { lineHeight: '1.75rem' }],    // 20px
            },
        },
    },
    plugins: [],
}
