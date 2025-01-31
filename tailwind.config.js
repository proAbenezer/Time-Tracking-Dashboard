/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./*.js"],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },

    extend: {
      colors: {
        Blue: " hsl(246, 80%, 60%)",
        LightRedWork: " hsl(15, 100%, 70%)",
        SoftBlue: " hsl(195, 74%, 62%)",
        LightRedStudy: " hsl(348, 100%, 68%)",
        LimeGreen: " hsl(145, 58%, 55%)",
        Viole: " hsl(264, 64%, 52%)",
        SoftOrange: " hsl(43, 84%, 65%)",
        VeryDarkBlue: "hsl(226, 43%, 10%)",
        DarkBlue: "hsl(235, 46%, 20%)",
        DesaturatedBlue: "hsl(235, 45%, 61%)",
        PaleBlue: "hsl(236, 100%, 87%)",
      },
    },
  },
  plugins: [],
};
