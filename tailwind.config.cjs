   /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        inforColor: "#4A7EDC",
      },
      backgroundColor:{
        'card': 'linear-gradient(180deg, #AA27A6 -6.99%, #2B93E8 93.01%);',
      },
      backgroundImage:{
        'primaryGradient':'linear-gradient(288.73deg, rgba(106, 1, 255, 0.2) 4.9%, rgba(0, 0, 0, 0.2) 50.72%, rgba(106, 1, 255, 0.2) 96.55%), radial-gradient(50% 50% at 50% 50%, #19003C 15%, #010001 85%)',
        'textGradient':'linear-gradient(89.88deg, #D30490 1.78%, #00B8FF 99.87%);',
        'cardGradient':'linear-gradient(180deg, #AA27A6, #2B93E8);',
      },
      stroke:{
        'primaryGradient':'linear-gradient(288.73deg, rgba(106, 1, 255, 0.2) 4.9%, rgba(0, 0, 0, 0.2) 50.72%, rgba(106, 1, 255, 0.2) 96.55%), radial-gradient(50% 50% at 50% 50%, #19003C 15%, #010001 85%)',
      },
      borderColor:{
        'cardGradient':'linear-gradient(180deg, #AA27A6 , #2B93E8);',
      },
      boxShadow: {
        'card': '0px 1px 10px #2E91E7',
      },
      animation: {
        fade: 'fadeOut 5s ease-out',
      },
      keyframes: theme => ({
        fadeOut: {
          '0%': { opacity: 0},
          '100%': { opacity:1 },
        },
      }),
      screens:{
        'cel':'360px',
        'tab':'768px',
        'lap':'1024px',
        'desk':'1280px',
        'xl':'1536px',
      }
    },
  },
  plugins: [],
}
