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
                fira: 'Fira Code',
                sans: ['Helvetica', ...defaultTheme.fontFamily.sans],
            },
        },
        colors: {
            transparent : 'transparent',
            'title-active': '#14142B',
            body: '#4E4B66',
            label: '#6E7191',
            placeholder: '#A0A3BD',
            line: '#D9DBE9',
            'input-bg': '#EFF0F6',
            'element-bg': '#F7F7FC',
            'off-white': '#FCFCFC',
            primary: '#854D0E',
            secondary: '#1E40AF',
            error: '#C30052',
            success: '#00966D',
            warning: '#946200',
            'gdt-primary': '#CA8A04',
            'gdt-secondary': '#CA8A04',
            'gdt-accent': '#ED2E7E',
        },
    },
    plugins: [],
}
