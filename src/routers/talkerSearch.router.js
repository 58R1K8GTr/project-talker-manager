const express = require('express');
const readJsonFile = require('../utils/fs/readJsonData');
const { TALKER_JSON_PATH } = require('../utils/sharedVariables');
const auth = require('../middlewares/auth');

const router = express.Router();

router.get('/talker/search',
  auth,
  async (req, res) => {
    const userQuery = req.query.q;
    const content = await readJsonFile(TALKER_JSON_PATH);
    const resultQuery = content.filter((talker) => talker.name.startsWith(userQuery));
    res.status(200).json(resultQuery);
  });

module.exports = router;