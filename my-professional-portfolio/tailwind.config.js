module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FBFBFB', 
        primaryTwo:'#FFFFFF',
        primaryGray:'#E1E1E1',
        primaryBlue:'#526BFF',
        primaryLightBlue:'#8495B8',
        primaryGreen:'#86D5AD',
        darknavy:'#0A0C1B',
        secondaryGreen: '#00ff00', 
      },
      fontFamily: {
        'mulish': ['Mulish', 'sans-serif'],
      },
    },
  },
  plugins: [require("daisyui")],
}
