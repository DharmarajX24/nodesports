module.exports = {
  purge: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#151B27",
        secondary: "#282C38",
        branding: "#EB2B44",
        greytext: "#ACADB1",
        secondarybranding: "#1380F0",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
