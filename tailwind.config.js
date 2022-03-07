module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-black': "#212431",
        'light-blue': "#149ddd"
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
};
