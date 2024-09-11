import type { Config } from "tailwindcss";
import { colors } from "./src/styles/colors";

//TODO: Colors
const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/raw/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // theme: {
  //   colors,
  // },
  plugins: [],
};
export default config;
