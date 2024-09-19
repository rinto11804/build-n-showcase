import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {},
  daisyui: {
    themes: [
      {
        buildtheme: {
          primary: "#645ccd",
          "primary-content": "#dddff7",
          secondary: "#cd645c",
          "secondary-content": "#0f0303",
          accent: "#5ccd64",
          "accent-content": "#030f03",
          neutral: "#1F2937",
          "neutral-content": "#cdd0d3",
          "base-100": "#f1e8f4",
          "base-200": "#d2cad4",
          "base-300": "#b3acb5",
          "base-content": "#141314",
          info: "#2563EB",
          "info-content": "#d2e2ff",
          success: "#16A34A",
          "success-content": "#000a02",
          warning: "#D97706",
          "warning-content": "#110500",
          error: "#DC2626",
          "error-content": "#ffd9d4",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
