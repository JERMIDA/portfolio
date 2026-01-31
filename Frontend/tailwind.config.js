export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        background: "var(--color-background)",
        textPrimary: "var(--color-text-primary)",
        accent: "var(--color-accent)",
      },
      borderRadius: {
        md: "10px",
      },
      boxShadow: {
        subtle: "0 2px 6px rgba(0,0,0,0.1)",
      },
    },
  },
  plugins: [],
};