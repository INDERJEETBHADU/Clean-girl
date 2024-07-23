/ @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        'Shrikhand': "'Shrikhand', serif",
        'Lexend ': "'Lexend Deca', sans- serif",
        'Jost ': "'Jost', sans- serif",
      },
      fontSize: {
        "ms": "40px",
        "xxxl": "80px",
        "6xxl": "52px",
      },
      animation: {
        jump: 'jump 0.6s ease-in-out infinite',
      },
      keyframes: {
        jump: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      colors: {
        mediumpink: "#FFB9D4",
        pink: "#FD0786",
        lightpink: "#FFF3F9",
        blue: "#053167",
        lightbrown: "#B3628C",
        grey: "#797979",
        darkgrey: "#797979",
        lightwhite: "#F4F4F4"
      },

      screens: {
        'sm': '576px',

        'md': '768px',

        'lg': '992px',

        'xl': '1200px',

        '2xl': '1400px',
      },
      boxShadow: {
        "3xl": '-8.12px 8.12px 16.24px 0px #FFAFCD',

      },

      container: {
        center: true,

        padding: {
          DEFAULT: "12px",
        },
      },
    }
  },
  plugins: [],
}