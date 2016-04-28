const fs = require('fs'),
      modName = process.argv[2],
      modPath = `./app/components/${modName}`;

fs.mkdir(modPath);
fs.writeFile(`${modPath}/index.css`, `.${modName} {}`);
fs.writeFile(`${modPath}/index.js`, `import './index.css'`);
fs.writeFile(`${modPath}/OWNERS`, `@aaronbushnell`);
fs.writeFile(`${modPath}/README`, `# ${modName}\n\n## Purpose\n\n## How to use`);
