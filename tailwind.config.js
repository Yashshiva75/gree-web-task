/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{html,js,jsx,ts,tsx}',
        './public/index.html',
    ],
    theme: {
        extend: {
            fontFamily: {
                font: ["Poppins", "sans-serif"],
            },
            colors: {
                customTeal: '#48CFCB',
            },
        },
    },
    plugins: [],
};