const path = require('path');
const readJsonData = require('../utils/fs/readJsonData');

const PATH = path.resolve('src', 'talker.json');

module.exports = async (req, res, next) => {
  const id = Number(req.params.id);
  const content = await readJsonData(PATH);
  const person = content.find((_person) => _person.id === id);
  if (person === undefined) {
    return res.status(404).json(
      { message: 'Pessoa palestrante não encontrada' },
    );
  }
  next();
};