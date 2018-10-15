const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
<<<<<<< HEAD
=======
const path = require("path");
>>>>>>> c1aa268274fb46970291efaca2e583f1b3083cd4

const items = require("./routes/api/items");

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to mongo
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));

// Use routes
app.use("/api/items", items);

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
<<<<<<< HEAD
  app.use(express.static('client/build'));
=======
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
>>>>>>> c1aa268274fb46970291efaca2e583f1b3083cd4
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
