const express = require('express');
const path = require('path');
const readJsonData = require('../utils/fs/readJsonData');
const writeJsonData = require('../utils/fs/writeJsonData');
const findNextId = require('../utils/findNextId');
const validatePersonExists = require('../middlewares/validatePersonExists');
const {
  validateName,
  validateAge,
  validateTalk,
  validateWatchedAt,
  validateRate,
} = require(
  '../middlewares/validateTalkerFields',
);
const auth = require('../middlewares/auth');

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
    const person = content.find((_person) => _person.id === id);
    res.status(200).json(person);
  });

router.post('/talker',
  auth,
  validateName,
  validateAge,
  validateTalk,
  validateWatchedAt,
  validateRate,
  async (req, res) => {
    const content = await readJsonData(PATH);
    const newEntry = req.body;
    const nextId = findNextId(content);
    newEntry.id = nextId;
    await writeJsonData(PATH, [...content, newEntry]);
    res.status(201).json(newEntry);
  });

module.exports = router;