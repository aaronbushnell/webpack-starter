const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
const imageminSvgo = require('imagemin-svgo');

imagemin(['dist/images/**/*.{jpg,jpeg,png,svg}'], '.', {
  plugins: [
    imageminMozjpeg({ targa: true }),
    imageminPngquant({ quality: '65-80' }),
    imageminSvgo()
  ]
});
