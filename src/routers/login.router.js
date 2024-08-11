const express = require('express');
const generateToken = require('../utils/generateToken');
const validateLoginFields = require('../middlewares/validateLoginFields');

const router = express.Router();

router.post('/login',
  validateLoginFields,
  async (req, res) => {
    const token = generateToken();
    res.status(200).json({ token });
  });

module.exports = router;