const express = require("express");

const mongoose = require("mongoose");

const User = require("./models/User.js");

const cors = require("cors");

const jwt = require("jsonwebtoken");

require("dotenv").config();

const mongourl = process.env.URL;

mongoose.connect(mongourl);

const app = express();

app.use(express.json());

app.use(
    cors({
        credentials: true,
        origin: process.env.CLIENT_URL,
    })
);

app.get("/test", (req, res) => {
    res.json("test ol");
});

app.post("/register", async (req, res) => {
    console.log(req.body);
    const { username, password } = req.body;

    try {
        const createdUser = await User.create({ username, password });
        jwt.sign(
            { userId: createdUser._id },
            process.env.JWT_SECRET,
            {},
            (err, token) => {
                if (err) throw err;
                res.cookie("token", token).status(201).json({
                    _id: createdUser._id,
                });
            }
        );
        res.json();
    } catch (err) {
        console.log(err.message);
    }
});

app.listen(3000);
