const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 3000;

// uncomment once there is middleware
const postRouter = require('./routers/posts');
const listItemRouter = require('./routers/listItems');
const api = require('./routers/api');

const MONGO_URI = "mongodb+srv://AndrewL:bucketlist@cluster0.00tox.mongodb.net/<dbname>?retryWrites=true&w=majority";

mongoose.connect(MONGO_URI, { useNewUrlParser: true })
  .then(() => console.log('CONNECTED TO MONGO DB'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors()); // remember to npm install cors

app.use('/api/listItems', listItemRouter);
app.use('/api/posts', postRouter);
app.use('/api', api);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

// Global error handler for catching middleware errors
app.use((err, req, res, next) => {
  const defaultError = {
    log: 'Error during unknown middleware',
    status: 400,
    message: { err: 'Uh-oh, error time, baby! :)' },
  };
});

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}.`));
