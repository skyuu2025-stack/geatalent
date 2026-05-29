import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // 检查这一行是否完全正确
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        "racing-green": "#004225",
        "royal-blue": "#002366",
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
