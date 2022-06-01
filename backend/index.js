const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Express + TypeScript Server');
});

app.get('/message', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.send('HELLO WORLD!');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});