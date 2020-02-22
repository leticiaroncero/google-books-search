const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");

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
  //ToDo: query books from database
  res.json([]);
});

app.post("/api/books", (req, res) => {
  //ToDo: insert book (from req body) into database 
  res.json({});
});

app.delete("/api/books/:id", (req, res) => {
  //ToDo: delete book (from req body) into database
  res.json({});
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
