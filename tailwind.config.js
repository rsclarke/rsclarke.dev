module.exports = {
  purge: ["build/site/**/*.html"],
  theme: {
    extend: {
      colors: {
        dark: "#2A2A2A",
        grey: "#808080",
        light: "#D9D9D9",

        red: "#F89E8C",
        green: "#83C3A2",
        blue: "#88B8FB",
        yellow: "#FDE18B",
      },

      fontFamily: {
        mono: ["Ubuntu Mono"],
      },
    },
  },
  variants: {},
  plugins: [],
};
