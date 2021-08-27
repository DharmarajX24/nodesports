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
      flex: {
        2: "2",
      },
      margin: {
        threedotfivepx: "3.5px",
      },
      boxShadow: {
        game: "0 0 24px #1380f0",
      },
      gridTemplateColumns: {
        searchBarAndBtnColums: "1fr max-content",
      },
      gridAutoRows: {
        searchBarAndBtnRows: "4em",
      },
      fontFamily:{
        banger: 'banger'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
