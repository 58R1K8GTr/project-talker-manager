const validateField = require('../utils/validateField');

function validateNameLength(field, res) {
  if (field.length < 3) {
    return res.status(400).json({
      message: 'O "name" deve ter pelo menos 3 caracteres',
    });
  }
}

function validateName(req, res, next) {
  const { name } = req.body;
  return validateField(name, 'name', res)
    || validateNameLength(name, res)
    || next();
}

function validateAgeTypeAndRange(field, res) {
  if (!Number.isInteger(field) || field < 18) {
    return res.status(400).json({
      message: 'O campo "age" deve ser um número inteiro igual ou maior que 18',
    });
  }
}

function validateAge(req, res, next) {
  const { age } = req.body;
  return validateField(age, 'age', res)
    || validateAgeTypeAndRange(age, res)
    || next();
}

function validateTalk(req, res, next) {
  const { talk } = req.body;
  return validateField(talk, 'talk', res)
    || next();
}

function validateWatchedAtFormat(field, res) {
  if (!/\d{2}\/\d{2}\/\d{4}/.test(field)) {
    return res.status(400).json({
      message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"',
    });
  }
}

function validateWatchedAt(req, res, next) {
  const { watchedAt } = req.body.talk;
  return validateField(watchedAt, 'watchedAt', res)
    || validateWatchedAtFormat(watchedAt, res)
    || next();
}

function validateRateTypeAndRange(field, res) {
  if (!Number.isInteger(field) || field < 1 || field > 5) {
    return res.status(400).json({
      message: 'O campo "rate" deve ser um número inteiro entre 1 e 5',
    });
  }
}

function validateRate(req, res, next) {
  const { rate } = req.body.talk;
  return validateField(rate, 'rate', res)
    || validateRateTypeAndRange(rate, res)
    || next();
}

module.exports = {
  validateName,
  validateAge,
  validateTalk,
  validateWatchedAt,
  validateRate,
};