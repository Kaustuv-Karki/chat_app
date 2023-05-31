const express = require("express");

const app = express();

app.get("/test", (req, res) => {
    res.json("test ol");
});

app.post("/register", (req, res) => {});

app.listen(4000);
