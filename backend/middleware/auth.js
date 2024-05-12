const jwt = require("jsonwebtoken");
require("dotenv").config();
const auth = (req, res, next) => {
  const header = req.headers["authorization"];
  const token = header.split(" ")[1];

  if (!token) {
    return res.status(401).send("token is not provided");
  }

  jwt.verify(token, process.env.secretKey, (err, result) => {
    if (err) throw new Error(err.message);
    if (result) {
      req.user = result;
      next();
      //   console.log(result);
    }
  });
};

module.exports = auth;
