const express = require('express');
// const path = require('path');
const generateToken = require('../utils/generateToken');
const validateLoginFields = require('../middlewares/validateLoginFields');

const router = express.Router();
// const PATH = path.resolve('src', 'talker.json');

router.post('/login',
  validateLoginFields,
  async (req, res) => {
    // const { email, password } = req.body;
    const token = generateToken();
    res.status(200).json({ token });
  });

module.exports = router;