import type { Config } from "tailwindcss";
import imageRendering from "tailwindcss-image-rendering";
import filters from "tailwindcss-filters";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      imageRendering: {
        'crisp-edges': 'crip-edges',
      },
      filter: {
        'contrast-150': 'consrast(150%)',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    imageRendering,
    filters,
  ],
};
export default config;
