const colors = require('tailwindcss/colors');
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: {
          100: '#FFFFFF',
          200: '#FAFAFA',
          300: '#F0F0F0',
          400: '#BDBDBD',
          500: '#999999',
          600: '#666666',
          700: '#1A1A1A'
        }
      }
    }
  },
  plugins: [require('a17t')]
};
