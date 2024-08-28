import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'soft-cream': '#F5F5DC',
        'warm-beige': '#F0EAD6',
        'sandy-brown': '#F4A460',
        'chocolate-brown': '#3E2723',
        'taupe': '#8B4513',
        'light-taupe': '#D8BFD8',
      },
    },
  },
  variants: {},
  plugins: [],
};
export default config;
