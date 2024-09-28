module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        fotiBlue: '#1877F2', // Replace with actual hex codes
        //fotiGreen: '#007849',
        fotiBrown: '#8B4513',
        fotiOrange: '#FF6A00',
      },
      backgroundImage: {
        'hero-image': "url('../assets/heroimage.svg')", // Adjust the path as needed
      },
    },
  },
  plugins: [],
};
