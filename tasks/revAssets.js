const Version = require("node-version-assets");
const globby = require("globby");
const assets = [
  'dist/_scripts/*.{js,css}'
];

globby(assets).then(paths => {
  const versionInstance = new Version({
    assets: paths,
    grepFiles: [
      './dist/*.html'
    ]
  });

  versionInstance.run();
});
