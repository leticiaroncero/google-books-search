const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
var db = require("./models");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");

app.get("/api/books", (req, res) => {
  //query books from database
  db.Book.find()
    .then(function (dbBook) {
      res.json(dbBook);
    })
    .catch(function (err) {
      res.status(500).send("Internal error: " + err);
    });
});

app.post("/api/books", (req, res) => {
  //insert book (from req body) into database
  db.Book.create(req.body)
    .then(function (dbBook) {
      res.send(dbBook);
    })
    .catch(function (err) {
      res.status(500).send("Error: " + err.message);
    });
});

app.delete("/api/books/:id", (req, res) => {
  //delete book (from req body) into database
  db.Book.findOneAndRemove({
    _id: req.params.id
  })
    .then(dbBook => {
      console.log(dbBook)
      res.status(200).end();
    })
    .catch(err => {
      console.error(err)
      res.status(400).end()
    })
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
