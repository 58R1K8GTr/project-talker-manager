const express = require('express');
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
  noPersonFound,
} = require(
  '../middlewares/validateTalkerFields',
);
const auth = require('../middlewares/auth');
const { TALKER_JSON_PATH } = require('../utils/sharedVariables');

const router = express.Router();

router.get('/talker', async (_req, res) => {
  const content = await readJsonData(TALKER_JSON_PATH);
  return res.status(200).json(content);
});

router.get('/talker/:id',
  validatePersonExists,
  async (req, res) => {
    const id = Number(req.params.id);
    const content = await readJsonData(TALKER_JSON_PATH);
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
    const content = await readJsonData(TALKER_JSON_PATH);
    const newEntry = req.body;
    const nextId = findNextId(content);
    newEntry.id = nextId;
    await writeJsonData(TALKER_JSON_PATH, [...content, newEntry]);
    res.status(201).json(newEntry);
  });

router.put('/talker/:id',
  auth,
  validateName,
  validateAge,
  validateTalk,
  validateWatchedAt,
  validateRate,
  noPersonFound,
  async (req, res) => {
    const id = Number(req.params.id);
    const content = await readJsonData(TALKER_JSON_PATH);
    const entryToBeAltered = req.body;
    entryToBeAltered.id = id;
    const newContent = content.map((talker) => (talker.id !== id ? talker : entryToBeAltered));
    await writeJsonData(TALKER_JSON_PATH, newContent);
    res.status(200).json(entryToBeAltered);
  });

router.delete('/talker/:id',
  auth,
  async (req, res) => {
    const id = Number(req.params.id);
    const content = await readJsonData(TALKER_JSON_PATH);
    const newContent = content.filter((talker) => talker.id !== id);
    await writeJsonData(TALKER_JSON_PATH, newContent);
    res.status(204).end();
  });

module.exports = router;