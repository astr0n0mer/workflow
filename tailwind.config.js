/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0D062D",
        secondary: "#787486",
        border: "#DBDBDB",
        projectBackground: "#5030E514",
        stateBackground: "#F5F5F5",
        actionItem: "#5030E5",
      },
      fontFamily: {
        primary: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
