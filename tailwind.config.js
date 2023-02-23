/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        darkTheme: {
          100: "#",
          200: "#",
          300: "#",
          400: "#",
          500: "#55565A",
          600: "#51535A",
          700: "#2A2C31",
          800: "#202125",
          900: "#121315",
        },
        lightTheme: {
          100: "#F4F5F7",
          200: "#",
          300: "#",
          400: "#A2CAE4",
          500: "#A4C9E6",
          600: "#3F75A4",
          700: "#244467",
          800: "#172740",
          900: "#1E293B",
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
  safelist: ["dark"],
};
