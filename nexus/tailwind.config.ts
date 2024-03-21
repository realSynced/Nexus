import type { Config } from "tailwindcss";
import {nextui} from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    'node_modules/daisyui/dist/**/*.js',
    'node_modules/react-daisyui/dist/**/*.js',
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
    daisyui: {
      themes: [
          'corporate', {
          'primary' : '#4768fa',
          'primary-focus' : '#153ff9',
          'primary-content' : '#161827',

          'secondary' : '#7b92b2',
          'secondary-focus' : '#5b769a',
          'secondary-content' : '#161827',

          'accent' : '#67cba0',
          'accent-focus' : '#41be88',
          'accent-content' : '#161827',

          'neutral' : '#161827',
          'neutral-focus' : '#06060a',
          'neutral-content' : '#eaf0f6',

          'base-100' : '#ffffff',
          'base-200' : '#f7fafd',
          'base-300' : '#eaf0f6',
          'base-content' : '#161827',

          'info' : '#1c92f2',
          'success' : '#009485',
          'warning' : '#ff9900',
          'error' : '#ff5724',

         '--rounded-box': '1rem',          
         '--rounded-btn': '.5rem',        
         '--rounded-badge': '1.9rem',      

         '--animation-btn': '0',       
         '--animation-input': '0',       

         '--btn-text-case': 'uppercase',   
         '--navbar-padding': '.5rem',      
         '--border-btn': '1px',            
       },
        {
          mytheme: {
          "primary": "#dbeafe",
          "secondary": "#f5f5f4",
          "accent": "#60a5fa",
          "neutral": "#bfdbfe",
          "base-100": "#ffffff",
          "info": "#3b82f6",
          "success": "#a3e635",
          "warning": "#fdba74",      
          "error": "#f87171",
          },
        },
      ],
    },
  },
  plugins: [
    require("daisyui")
  ],
};
export default config;
