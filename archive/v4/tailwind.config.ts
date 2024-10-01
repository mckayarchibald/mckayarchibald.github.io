import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      display: ["League+Spartan"],
    },
  },
  plugins: [],
} satisfies Config;