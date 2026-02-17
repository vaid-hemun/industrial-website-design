/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          accent: "#B11226", // industrial red
        },
      },

      /* ✅ FONT */
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },

      /* ✅ ANIMATIONS */
      animation: {
        float: "float 6s ease-in-out infinite",
        titleReveal: "titleReveal 1.2s ease forwards",
        fadeIn: "fadeIn 1.6s ease forwards",
        lineGrow: "lineGrow 2s ease forwards",
      },

      /* ✅ KEYFRAMES */
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        titleReveal: {
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "0.85" },
        },
        lineGrow: {
          to: { width: "100%" },
        },
      },
    },
  },
  plugins: [],
};
