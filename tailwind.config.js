/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgUserForm: "#25251D",
        textGreen: "#7B885B",
        textGray: "#BDBBBB",
        forgotPasswordText: "#4C673C",
        borderColor: "#B4DCAC",
        bgPasswordTextColor: "#9C6262",
        bgSecondaryBtn: "#4D4D4D",
        bgNextStepBtn: "#7B885B",
        bgBackLogin: "#767572",
        bgColorLogin: "#D9D9D9F2"
      }
    },
  },
  plugins: [],
}
