const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../model/user");

require("dotenv").config();

const register = async (req, res) => {
  const { firstname,lastname, email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      return res
        .status(401)
        .json({ message: "User is already registered. Please try to login." });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ firstname,lastname, email, password: hashedPassword });
    await newUser.save();
    return res.status(200).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return res.status(401).json({ message: "Invalid password" });
    }
    const token = jwt.sign({ id: user._id }, process.env.secretKey, {
      expiresIn: "1d",
    });

    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
const logout = (req, res) => {
  res.clearCookie("token").json({ message: "Logged out successfully" });
};
module.exports = {
  register,
  login,
  logout,
};
