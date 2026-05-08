// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#3B82F6",
        accent: "#00D1FF",
        darkBg: "#0B1020",
        darkCard: "#121A2F",
        darkSurface: "#18233F",
        danger: "#FF4D6D",
        success: "#00E676",
      },
      boxShadow: {
        glow: "0 0 20px rgba(59,130,246,0.25)",
      },
    },
  },
  plugins: [],
}