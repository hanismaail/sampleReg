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
        indigo: { 100: "#b7d0e8" },
        blue_gray: { 100: "#d9d9d9", "900_b7": "#2f3030b7" },
        black: { 900: "#000000", "900_7a": "#0000007a" },
        gray: { 800: "#504f4f" },
        light_blue: { A700: "#0983f5" },
        blue: { A100: "#7abcf9" },
        white: { A700: "#ffffff" },
      },
      fontFamily: { inter: "Inter" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
