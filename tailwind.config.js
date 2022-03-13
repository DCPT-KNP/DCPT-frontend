const colors = require('tailwindcss/colors');
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      caret: {
        i: '1/4/3'
      },
      content: {
        link: "url('/img/model_choose.png')"
      },
      colors: {
        gray: {
          100: '#FFFFFF',
          200: '#FAFAFA',
          300: '#F0F0F0',
          400: '#BDBDBD',
          500: '#999999',
          600: '#666666',
          700: '#1A1A1A'
        },
        pink: '#FA73FD',
        red: '#F63E2B',
        yellow: '#F5B72B',
        green: '#60CE93',
        blue: '#4573F3',
        violet: '#8D82F3',
        black: '#1A1A1A'
      },
      fontFamily: {
        sans: ['Pretendard', 'sans-serif'],
        inter: ['Inter', 'sans-serif']
      },
      fontSize: {
        headline: ['56px', '67px'],
        subHeadline: ['40px', '48px'],
        title1: ['24px', '32px'],
        title2: ['20px', '24px'],
        title3: ['16px', '20px'],
        subTitle1: ['16px', '22px'],
        subTitle2: ['14px', '17px'],
        body1: ['20px', '29px'],
        body2: ['14px', '20px'],
        body3: ['12px', '18px'],
        caption: ['11px', '14px'],
        label1: ['40px', '48px'],
        label2: ['20px', '24px']
      }
    }
  },
  plugins: [require('a17t')]
};
