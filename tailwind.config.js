module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], 
  theme: {
    extend: {
      colors: {
        greenCustom: "#77913F",
        blackBg: "#000000"  // Optional custom black if needed
      },
      fontFamily: {
        body: ['"Fira Code"', 'monospace'],
      }
    },
  },
  plugins: [],
};
