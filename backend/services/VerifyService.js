const jwt = require('jsonwebtoken');

// VERIFY
const verifyUser = (req, res, next) => {
  const token = req.header('token');
  if (!token) return res.status(401).send({ message: 'Access denied.' });

  try {
    const verifiedUser = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verifiedUser;
    next();
  } catch (err) {
    res.status(400).send({ message: 'Invalid token.' });
  }
};

module.exports = verifyUser;
