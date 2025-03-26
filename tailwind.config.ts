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
          lightestBrown: "#ece0d1",
          lightBrown: "#dbc1ac",
          mediumBrown: "#967259",
          darkBrown: "#634832",
          darkestBrown: "#38220f"
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
