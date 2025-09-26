import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        paleta: {
          nearBlack: "var(--nearBlack)",
          darkGray: "var(--darkGray)",
          accentGreen: "var(--accentGreen)",
          white: "var(--white)",
          lightGray: "var(--lightGray)"
        }
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'sans-serif'],
        title: ['var(--font-raleway)', 'serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
