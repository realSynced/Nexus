import type { Config } from "tailwindcss";
import {nextui} from "@nextui-org/react";

const withMT = require("@material-tailwind/html/utils/withMT");
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        'phone': '375px',    // Phone (portrait)
        'tablet': '768px',   // Tablet (portrait)
        'laptop': '1024px',  // Laptop (portrait)
        'desktop': '1280px', // Desktop (portrait)
        'computer': '1440px', // Large desktop or Computer (portrait)

        // Landscape orientations
        'phone-landscape': { 'raw': '(min-width: 375px) and (max-width: 767px) and (orientation: landscape)' },
        'tablet-landscape': { 'raw': '(min-width: 768px) and (max-width: 1023px) and (orientation: landscape)' },
        'laptop-landscape': { 'raw': '(min-width: 1024px) and (max-width: 1279px) and (orientation: landscape)' },
        'desktop-landscape': { 'raw': '(min-width: 1280px) and (max-width: 1439px) and (orientation: landscape)' },
        'computer-landscape': { 'raw': '(min-width: 1440px) and (orientation: landscape)' },
      },
      darkMode: "class",
      plugins: [nextui()]
    },
  },
  plugins: [],
};
export default config;
