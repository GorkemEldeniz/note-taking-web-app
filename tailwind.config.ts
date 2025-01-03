import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      neutral: {
        0: "#FFFFFF",
        50: "#F5F7FA",
        100: "#F3F5F8",
        200: "#E0E4EA",
        300: "#CACFD8",
        400: "#99A0AE",
        500: "#717784",
        600: "#525866",
        700: "#2B303B",
        800: "#232530",
        900: "#191B25",
        950: "#0E121B",
      },
      blue: {
        50: "#EBF1FF",
        500: "#335CFF",
        700: "#2547D0",
      },
      green: {
        100: "#21C16B",
        500: "#D1FBE9",
      },
      red: {
        100: "#FB3748",
        500: "#FFD5D8",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      inter: ["Inter", "serif"],
      noto: ["Noto Serif", "serif"],
      sourceCode: ["Source Code Pro", "monospace"],
    },
    fontSize: {
      sm: "12px",
      base: "14px",
      xl: "16px",
      "2xl": "20px",
      "3xl": "24px",
    },
    letterSpacing: {
      tight: "-.5px",
      normal: "-.3px",
      wide: "-.2px",
    },
    lineHeight: {
      tight: "1.2",
    },
    spacing: {
      "0": "0",
      "025": "2px",
      "050": "4px",
      "075": "6px",
      "100": "8px",
      "150": "12px",
      "200": "16px",
      "250": "20px",
      "300": "24px",
      "400": "32px",
      "500": "40px",
      "600": "48px",
      "800": "64px",
      "1000": "80px",
    },
    borderRadius: {
      "0": "0",
      "4": "4px",
      "6": "6px",
      "8": "8px",
      "10": "10px",
      "12": "12px",
      "16": "16px",
      "20": "20px",
      "24": "24px",
      full: "999px",
    },
    extend: {},
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
