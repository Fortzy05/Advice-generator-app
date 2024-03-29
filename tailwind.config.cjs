/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cyan: "hsl(193, 38%, 86%)",
        neonGreen: "hsl(150, 100%, 66%)",
        "grayishBlue-l": "hsl(217, 19%, 38%)",
        "grayishBlue-d": "hsl(217, 19%, 24%)",
        deepBlue: "hsl(218, 23%, 16%)",
      },
    },
  },
  plugins: [],
};
