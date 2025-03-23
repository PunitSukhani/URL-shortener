const jwt = require("jsonwebtoken");

function authenticateToken(req, res, next) {
  const token = req.cookies?.token;
  if (!token) return res.status(401).json({ error: "Access denied" });

  jwt.verify(token, "SECRET_KEY", (err, user) => {
    if (err) return res.status(403).json({ error: "Invalid token" });
    req.user = user;
    next();
  });
}

module.exports = { authenticateToken };