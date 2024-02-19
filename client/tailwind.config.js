/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        Loginbg: "#edede9", // Add a custom background color named 'custom'
      },
    },
  },
  plugins: [],
};
