const fs = require('fs'),
      modName = process.argv[2],
      modPath = `./app/components/${modName}`;

fs.mkdir(modPath);
fs.writeFile(`${modPath}/index.css`, `.${modName} {
\t
}`);

fs.writeFile(
  `${modPath}/index.js`,
  `import './index.css';

export default class ${modName} {
  constructor () {
  }
}
`);

fs.writeFile(`${modPath}/OWNERS`, '');
fs.writeFile(`${modPath}/README`, `# ${modName}`);
