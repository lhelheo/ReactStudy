import type { Config } from "tailwindcss";
import { colors } from "@/styles/colors";

//TODO: Colors
const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors,
  },
  plugins: [],
};
export default config;
