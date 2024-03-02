import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        primary: "#3A5311",
        secondary: "#80461B",
        accent: "#5A5A5A",
        navbarSubtext: "#D8D8D2",
      },
      width: {
        "1/8": "12.5%",
      },
      backgroundImage: {
        "nav-bar": "url('/lawnMover.jpg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  daisyui: {
    themes: [{ mytheme: { primary: "#7ce604", secondary: "#80461B" } }],
  },
  plugins: [require("daisyui")],
};

export default config;
