const fs = require('fs/promises');

async function writeJsonData(path, content) {
  await fs.writeFile(path, JSON.stringify(content));
}

module.exports = writeJsonData;