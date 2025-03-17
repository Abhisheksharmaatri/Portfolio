export default {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    theme: {
      extend: {
        colors: {
          primary: "#7DF9FF", // Neon Blue
          dark: "#0a192f", // Deep Navy
          light: "#64ffda",
        },
        fontFamily: {
          sans: ["Inter", "sans-serif"],
        },
        backdropBlur: {
          xs: "2px",
        },
      },
    },
    plugins: [],
  };
  