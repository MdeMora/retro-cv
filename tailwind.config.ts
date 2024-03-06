import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        geeksquare: "#A10B25",
        boomwriter: "#52b5ff",
        torii: "#D61162",
        rtve: "#E8622A",
      },
      maxWidth: {
        "100px": "100px",
      },
    },
  },
  plugins: [],
};
export default config;
