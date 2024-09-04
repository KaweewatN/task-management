import type {Config} from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        ligtBlueOne: "#8fb9f8",
      },
      colors: {
        cardBlue: "#96bcf6",
        ligtBlueOne: "#8fb9f8",
        darkBlueOne: "#245bac",
        darkBlueTwo: "#2f69c0",
        welcomeWhite: "#f2f5f8",
        lightPink: "#dfdcde",
      },
    },

    height: {
      tabContent: "57vmax",
      tabContentDesktop: "45vmax",
    },
  },
  plugins: [],
};
export default config;
