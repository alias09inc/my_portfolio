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
  },
} satisfies Config;
