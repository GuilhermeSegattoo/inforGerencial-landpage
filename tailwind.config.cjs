/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,tsx}",
    "./index.html"
  ],
  theme: {
    extend: {
      backgroundColor:{
      },
      backgroundImage:{
        'primaryGradient':'linear-gradient(288.73deg, rgba(106, 1, 255, 0.2) 4.9%, rgba(0, 0, 0, 0.2) 50.72%, rgba(106, 1, 255, 0.2) 96.55%), radial-gradient(50% 50% at 50% 50%, #19003C 15%, #010001 85%)',
        'textGradient':'linear-gradient(89.88deg, #D30490 1.78%, #00B8FF 99.87%);'
      },
    },
  },
  plugins: [],
}
