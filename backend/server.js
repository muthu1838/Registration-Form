const express = require("express");
const fs = require("fs");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());


app.get("/users", (req, res) => {
  fs.readFile("users.json", "utf8", (err, data) => {
    if (err) return res.status(500).json({ error: "Error reading file" });
    res.json(JSON.parse(data));
  });
});


app.post("/register", (req, res) => {
  const newUser = req.body;

  fs.readFile("users.json", "utf8", (err, data) => {
    let users = JSON.parse(data || "[]");
    users.push(newUser);

    fs.writeFile("users.json", JSON.stringify(users, null, 2), (err) => {
      if (err) return res.status(500).json({ error: "Error saving user" });
      res.status(201).json({ message: "User registered successfully!" });
    });
  });
});

app.listen(5000, () => console.log("Server running on port 5000"));
