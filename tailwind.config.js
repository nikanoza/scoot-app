/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "semi-gray": "#495567",
        gray: "#333A44",
        "light-gray": "#E5ECF4",
        yellow: "#FCB72B",
        "opacity-gray": "#939CAA",
      },
    },
  },
  plugins: [],
};
