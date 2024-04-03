/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      strokeWidth: {
        8: "8px",
      },
      colors: {
        // "primary-dark": "#161616",
        "primary-dark": "#171717",
        "primary-white": "#EDEDED",
        "secondary-white": "#A0A0A0",
        "gray-light": "#343434",
        "placeholder-gray": "#707070",
      },
    },
  },
  plugins: [],
};
