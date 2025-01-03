/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#00008a",
        dark: "#0d0d0d",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-hide": {
          /* Hide scrollbar for modern browsers */
          "-ms-overflow-style": "none" /* IE and Edge */,
          "scrollbar-width": "none" /* Firefox */,
          "&::-webkit-scrollbar": {
            display: "none" /* Chrome, Safari, and Opera */,
          },
        },
      });
    },
  ],
};
