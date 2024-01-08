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
        "primary-variant-2": "#E6F3F3",
        "accent-blue": "#276BDE",
        "accent-blue-variant": "#D9E2F5",
        "accent-red": "#C81425",
        "accent-purple": "#3D0D40",
        "accent-yellow": "#FFFF31",
        "accent-gray": "#808086",
        "accent-gray-variant": "#D9D9D9",
        "accent-light-gray": "#EAEAEA",
        "accent-light-gray-variant": "#C0C0C0",
      },
    },
  },
  plugins: [],
};
