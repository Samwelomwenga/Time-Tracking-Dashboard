/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary-blue": "hsl(246, 80%, 60%)",
        "primary-light-red-work": "hsl(15, 100%, 70%)",
        "primary-soft-blue-play": "hsl(195, 74%, 62%)",
        "primary-light-red-study": "hsl(348, 100%, 68%)",
        "primary-lime-green-excercise": "hsl(145, 58%, 55%)",
        "primary-violet-social": "hsl(246, 80%, 60%)",
        "primary-soft-orange-self-care": " hsl(43, 84%, 65%)",
        "neutral-very-dark-blue": "hsl(226, 43%, 10%)",
        "neutral-dark-blue": "hsl(235, 46%, 20%)",
        "neutral-desaturated-blue": "hsl(235, 45%, 61%)",
        "neutral-pale-blue": "hsl(236, 100%, 87%)", 
      },
      
    },
  },
  plugins: [],
}
