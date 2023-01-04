/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                hero: "url('./src/assets/images/landing/hero.png')",
            },
            fontFamily: {
                roboto: 'Roboto',
                sans: ['Helvetica', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [],
}
