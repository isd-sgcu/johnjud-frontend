/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        "ibm-plex-sans-thai": ["IBM Plex Sans Thai", "sans-serif"],
      },
      colors: {
        primary: "#08878E",
        "primary-variant": "#83C3C6", 
        secondary: "#C81425",
        "johnjud-purple": "#3D0D40",
        "johnjud-gray": "#808086",
        "johnjud-yellow": "#FFFF31",
      },
    },
  },
  plugins: [],
};
