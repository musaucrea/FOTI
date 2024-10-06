// tailwind.config.js

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          500: '#3B82F6',
          600: '#2563EB',
        },
        green: {
          500: '#10B981',
          600: '#059669',
        },
        brown: {
          700: '#92400E',
        },
        orange: {
          500: '#F97316',
          600: '#EA580C',
        },
        purple: {
          500: '#8B5CF6',
          600: '#7C3AED',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

