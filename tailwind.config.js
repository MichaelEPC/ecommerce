/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    screens: {
      mb: "500px",
      // => @media (min-width: 550px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
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
