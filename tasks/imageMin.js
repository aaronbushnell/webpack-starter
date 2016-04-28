const Imagemin = require('imagemin');

new Imagemin()
  .src('app/images/*.{gif,jpg,png,svg}')
  .dest('dist/images')
  .use(Imagemin.jpegtran({progressive: true}))
  .use(Imagemin.optipng({optimizationLevel: 3}))
  .use(Imagemin.svgo([
    { cleanupListOfValues: { floatPrecision: 2 } },
    { cleanupNumericValues: { floatPrecision: 2 } },
    { convertPathData: { floatPrecision: 2 } }
  ]))
  .run();
