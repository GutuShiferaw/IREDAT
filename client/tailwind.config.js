/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        Loginbg: "#ECF0F3",
        // Add a custom background color named 'custom'
      },
    },
  },
  plugins: [],
};
