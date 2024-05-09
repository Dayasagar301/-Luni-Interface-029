const express = require('express');
const userRouter = express.Router();
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const User = require('../Model/user.model');

userRouter.post("/register", async (req, res) => {
    const { username, email, password } = req.body;
    
    try {
        const user = await User.findOne({ email: email });
        
        if (user) {
            return res.status(200).send("User is already registered. Please try to login.");
        }

        bcrypt.hash(password, 5, async (err, hash) => {
            if (err) {
                return res.status(400).json({ err: true, msg: "Error hashing password" });
            }
            const newUser = new User({ username, email, password: hash });
            await newUser.save();
            res.status(200).json({ err: false, message: "User created successfully" })

        });

    } catch (error) {
        res.status(500).json({ err: true, message: "Internal server error", error });
      
    }
});


userRouter.post("/login", async (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);

    try {
        const user = await User.findOne({email: email});
        if (user) {
            bcrypt.compare(password, user.password, (err, result) => {
                if (result) {
                    const token = jwt.sign({ userID: user._id,username:user.username }, "masai");
                    res.status(200).json({ message: "user login succesfully", token: token })
                } else {
                    res.status(403).json({ message: "password is not matching try again" });
                }
            })
        } else {
            res.status(200).json({ message: "User is not registered. Please try to register." })
        }

    } catch (error) {
        res.status(400).json({ error: true, msg: error })
        console.log(error);
    }
})

module.exports = {
    userRouter
}