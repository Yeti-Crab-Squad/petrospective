const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const PORT = 3000;
const mongoose = require("mongoose");

const petRouter = require("./routers/pets.js");
const postRouter = require('./routers/posts');
const listItemRouter = require('./routers/listItems');
// uncomment once there is middleware
// const api = require('./routers/api')

const MONGO_URI =
  "mongodb+srv://AndrewL:bucketlist@cluster0.00tox.mongodb.net/<dbname>?retryWrites=true&w=majority";

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("CONNECTED TO MONGO DB"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors()); // remember to npm install cors

// changed to /api/pet so that it will be routed through the webpack router
// app.use("/pet", petRouter);
app.use("/api/pet", petRouter);
app.use('/api/listItems', listItemRouter);
app.use('/api/posts', postRouter);

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "../index.html"));
// });

app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../index.html"));
});

// app.post request will trigger controller to Create a New User --> Pushing data to the noSQL database

// Global error handler for catching middleware errors
app.use((err, req, res, next) => {
  const defaultError = {
    log: "Error during unknown middleware",
    status: 400,
    message: { err: "Uh-oh, error time, baby! :)" },
  };
  const errorObj = Object.assign({}, defaultError, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}.`));