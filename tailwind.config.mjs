/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navbar: "#2d3b39",
      },
      backgroundImage: {
        'desktopSvg': "url(https://res.cloudinary.com/dom4vyzw7/image/upload/v1739909849/portfolioBackground_n3zkj0.svg)",
        'mobileSvg': "url(https://res.cloudinary.com/dom4vyzw7/image/upload/v1739911181/Animated_Shape_1_g25qin.svg)",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
