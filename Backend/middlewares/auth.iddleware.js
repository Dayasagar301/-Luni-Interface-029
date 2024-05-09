const jwt = require("jsonwebtoken");
const User = require("../Model/user.model");
const auth = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    console.log(token);

    if (token) {
        jwt.verify(token, "masai",  async(err, decode) => {
            if (decode) {
               console.log(decode);
               req.body.userID=decode.userID;
               req.body.username=decode.username;
                next();
            }
            else {
                res.status(401).json({
                    message: "unauthorized",
                    error: err
                })
            }
        })
    }
    else {
        res.send("pleas login")
    }
}

module.exports = { auth };