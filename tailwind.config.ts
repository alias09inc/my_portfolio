import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    fontFamily: {
      LavishlyYours: ["LavishlyYours", "serif"],
      Tangerine: ["Tangerine", "serif"],
    },
    extend: {
      backdropBlur: {
        '3xl': '50px',
        '4xl': '70px',
        '5xl': '100px',
      }
    },
  },
} satisfies Config;
