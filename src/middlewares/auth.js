function validateToken(token, res) {
  if (token === undefined) {
    return res.status(401).json({
      message: 'Token não encontrado',
    });
  }
}

function invalidToken(token, res) {
  if (typeof token !== 'string' || token.length !== 16) {
    return res.status(401).json(
      { message: 'Token inválido' },
    );
  }
}

function auth(req, res, next) {
  const { authorization } = req.headers;
  return validateToken(authorization, res)
    || invalidToken(authorization, res)
    || next();
}

module.exports = auth;