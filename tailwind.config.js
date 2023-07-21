module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        indigo: { 100: "#b7d0e8", "900_26": "#252c6126" },
        blue_gray: { 100: "#d9d9d9", "900_b7": "#2f3030b7" },
        black: { 900: "#000000", "900_7a": "#0000007a" },
        gray: { 300: "#e2e1e5", 800: "#504f4f", "800_e5": "#4b4747e5" },
        light_blue: { A700: "#0984e3" },
        blue: { A100: "#7abcf9" },
        white: { A700: "#ffffff" },
      },
      fontFamily: { inter: "Inter", montserrat: "Montserrat" },
      boxShadow: { bs: "0px 5px  15px 0px #252c6126" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
