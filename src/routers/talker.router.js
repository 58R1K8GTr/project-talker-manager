const express = require('express');
const path = require('path');
const readJsonData = require('../utils/fs/readJsonData');
const validatePersonExists = require('../middlewares/validatePersonExists');

const router = express.Router();
const PATH = path.resolve('src', 'talker.json');

router.get('/talker', async (_req, res) => {
  const content = await readJsonData(PATH);
  return res.status(200).json(content);
});

router.get('/talker/:id',
  validatePersonExists,
  async (req, res) => {
    const id = Number(req.params.id);
    const content = await readJsonData(PATH);
    console.log(content, typeof content);
    const person = content.find((_person) => _person.id === id);
    res.status(200).json(person);
  });

module.exports = router;