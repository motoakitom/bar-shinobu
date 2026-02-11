/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                accent: {
                    DEFAULT: '#C0A060',
                    light: '#D4B87E',
                },
            },
            fontFamily: {
                cinzel: ['var(--font-heading-en)'],
                serif: ['var(--font-heading-jp)'],
                sans: ['var(--font-body)'],
            },
        },
    },
    plugins: [],
}
