const SVGSpriter = require('svg-sprite');
const mkdirp = require('mkdirp');
const path = require('path');
const globby = require("globby");
const fs = require('fs-extra');

spriter = new SVGSpriter({
  dest: './app/_tmp-sprites',
  mode: {
    css: {
      render: {
        css: true
      }
    }
  }
});

spriter.add(
  path.resolve('./app/images/icons/logo.svg'), 'logo.svg', fs.readFileSync('./app/images/icons/logo.svg', {encoding: 'utf-8'})
);

spriter.add(
  path.resolve('./app/images/icons/iuh.svg'), 'iuh.svg', fs.readFileSync('./app/images/icons/iuh.svg', {encoding: 'utf-8'})
);

spriter.compile(function (error, result, data) {
  for (var type in result.css) {
    mkdirp.sync(path.dirname(result.css[type].path));
    fs.writeFileSync(result.css[type].path, result.css[type].contents);
  }
});
