const jwt = require('jsonwebtoken');

function verifyUser(req, res, next) {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ error: 'Unauthorized' });
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ error: 'Forbidden' });
    req.user = decoded;
    next();
  });
}

function requireRole(role) {
  return function (req, res, next) {
    if (req.user.role !== role) return res.status(403).json({ error: 'Access denied' });
    next();
  };
}

module.exports = { verifyUser, requireRole };
