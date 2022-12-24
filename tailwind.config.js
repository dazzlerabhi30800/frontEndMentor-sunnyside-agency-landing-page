/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-image-mobile": "url('/public/images/mobile/image-header.jpg')",
      },
    },
  },
  plugins: [],
};
