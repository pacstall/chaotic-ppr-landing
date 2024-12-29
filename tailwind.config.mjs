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
        "background": "#1A202C",
        "darker": "#171923",
        "pacstall-green": "#169390",
        "pacstall-yellow": "#FFBD42",
        "pacstall-pink": "#E05F9E",
      },
    },
  },
  plugins: [],
};
