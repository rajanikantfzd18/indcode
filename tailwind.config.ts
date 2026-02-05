import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#1E40AF",
          secondary: "#0EA5E9",
          dark: "#020617",
        },
      },
    },
  },
  plugins: [],
};

export default config;