function validateField(field, fieldName, res) {
  if (field === undefined) {
    return res.status(400).json({
      message: `O campo "${fieldName}" é obrigatório`,
    });
  }
}

module.exports = validateField;