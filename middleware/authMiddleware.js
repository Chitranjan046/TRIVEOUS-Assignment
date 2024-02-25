const jwt = require('jsonwebtoken');

exports.authenticate = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({ message: 'Authorization token not found' });
  }

  try {
    const decoded = jwt.verify(token, 'secretkey');
    req.userId = decoded.userId;
    next();
  } catch (err) {
    res.status(403).json({ message: 'Invalid token' });
  }
};