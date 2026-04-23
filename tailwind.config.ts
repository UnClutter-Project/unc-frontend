import type { Config } from "tailwindcss";
// import { heroui } from "@heroui/react";
import flowbite from "flowbite/plugin";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: false,
  plugins: [flowbite],
};

export default config;
