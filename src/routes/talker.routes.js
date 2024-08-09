const express = require('express');
const path = require('path');
const readJsonData = require('../utils/fs/readJsonData');

const router = express.Router();
const PATH = path.resolve('src', 'talker.json');

router.get('/', async (_req, res) => {
  const content = await readJsonData(PATH);
  return res.status(200).json(content);
});

module.exports = router;