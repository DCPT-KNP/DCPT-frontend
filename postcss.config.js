//확실하지 않음
module.exports = {
  plugins:
    process.env.NODE_ENV === 'production'
      ? [require('postcss-import'), 'tailwindcss', 'autoprefixer']
      : ['tailwindcss', 'autoprefixer']
};
