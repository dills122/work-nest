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
        taskRed: "var(--red-picker-color)",
        taskPurple: "var(--purple-picker-color)",
        taskPink: "var(--pink-picker-color)",
        taskOrange: "var(--orange-picker-color)",
        taskYellow: "var(--yellow-picker-color)",
        taskGreen: "var(--green-picker-color)",
        taskBlue: "var(--blue-picker-color)",
        taskBrown: "var(--brown-picker-color)",
        taskGrey: "var(--grey-picker-color)",
        taskWhite: "var(--white-picker-color)",
      },
    },
  },
  plugins: [],
} satisfies Config;
