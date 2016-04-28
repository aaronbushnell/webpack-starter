var Version = require("node-version-assets");

var versionInstance = new Version({
    assets: [
      'dist/_scripts/app.js',
      'dist/_scripts/app.css'
    ],
    grepFiles: [
      './dist/*.html'
    ]
});

versionInstance.run();
