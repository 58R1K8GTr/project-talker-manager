const validateField = require('../utils/validateField');

function validateEmailFormat(email, res, statusCode) {
  const invalidEmail = !(/\w+@\w+\.\w{3}/.test(email));
  if (invalidEmail) {
    return res.status(statusCode).json(
      { message: 'O "email" deve ter o formato "email@email.com"' },
    );
  }
}

function validatePasswordLength(password, res, statusCode) {
  const invalidPassword = password.length < 6;
  if (invalidPassword) {
    return res.status(statusCode).json(
      { message: 'O "password" deve ter pelo menos 6 caracteres' },
    );
  }
}

module.exports = (req, res, next) => {
  const { email, password } = req.body;
  const statusCode = 400;

  return validateField(email, 'email', res, statusCode)
    || validateField(password, 'password', res, statusCode)
    || validateEmailFormat(email, res, statusCode)
    || validatePasswordLength(password, res, statusCode)
    || next();
};