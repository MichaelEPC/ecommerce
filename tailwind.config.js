/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    screens: {
      mb: "500px",
      // => @media (min-width: 550px) { ... }

      showNav: "552px",
      // => @media (min-width: 550px) { ... }

      sm: "682px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      pd: "1350px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1520px",
      // => @media (min-width: 1520px) { ... }
    },
    extend: {
      colors: {
        "principal-blue": "#007FFF",
        "text-color": "#707070",
        "ligh-gray": "#DDDDDD",
        "labels-color": "#C7885A",
      },
    },
  },
  plugins: [],
};
