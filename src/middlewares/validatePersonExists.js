const readJsonData = require('../utils/fs/readJsonData');

const { TALKER_JSON_PATH } = require('../utils/sharedVariables');

module.exports = async (req, res, next) => {
  const id = Number(req.params.id);
  const content = await readJsonData(TALKER_JSON_PATH);
  const person = content.find((_person) => _person.id === id);
  if (person === undefined) {
    return res.status(404).json(
      { message: 'Pessoa palestrante não encontrada' },
    );
  }
  next();
};