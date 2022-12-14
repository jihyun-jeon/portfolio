/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainBgColor: "#f9f2ed",
        mainBlue: "#4d559f",
        mainOrange: "#de5e3c",
      },
      backgroundColor: {
        blueLabel: "px-[6px] py-[2px] rounded-2xl text-sm mr-1 bg-rose-400",
      },
      transitionTimingFunction: {
        "in-expo": " cubic-bezier(1, 0, 1, 0)",
        "out-expo": " cubic-bezier(0, 1, 0, 1)",
      },
    },
    screens: {
      sm: { max: "767px" },
      md: { min: "768px", max: "1023px" },
      lg: { min: "1024px" },
    },
  },
  plugins: [],
};
