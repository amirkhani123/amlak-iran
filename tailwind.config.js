/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        second: "var(--second)",
        darkcolor: "var(--dark)",
      },
      fontFamily: {
        vazir: "var(--font-vazir)",
        sahim: "var(--font-sahim)",
      },
      boxShadow: {
        "3xl": "#304ffe4a 0px 4px 15px ",
      },
      animation: {
        rotate: "rotateKey 1.5s infinite linear ",
        "fade-in": "rotateKey 0.5s   ",
        "fade-in-menu": "fadeInMenuKey .3s linear forwards",
      },
      keyframes: {
        rotateKey: {
          from: {
            transform: "rotate(0deg)",
          },
          to: {
            transform: "rotate(360deg)",
          },
        },
        fateInKey: {
          from: {
            transform: "rotate(0deg)",
          },
          to: {
            transform: "rotate(5deg)",
          },
        },
        fadeInMenuKey: {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
      },
    },
  },
  plugins: [],
};
