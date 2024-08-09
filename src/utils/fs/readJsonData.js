const fs = require('fs/promises');

const readJsonData = async (_path) => {
  const content = await fs.readFile(_path, 'utf8');
  return JSON.parse(content);
};

module.exports = readJsonData;