import type { Config } from "tailwindcss";
const colors = {
  "green-primary": "#61B15A",
  "green-dark": "#224B0C",
  "green-secondary": "#00838d",
  "yellow-light": "#FFF76A",
  "light-brown": "#FFCE89",
  "button-text": "#AC4425",
};
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors,
    },
    fontFamily: {
      humanist: ["humanist", "sans-serif"],
      didot: ["didot", "serif"],
    },
  },
  plugins: [],
};
export default config;
