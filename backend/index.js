const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
  res.send('Express + TypeScript Server');
});

app.get('/message', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.send('HELLO WORLD!');
});

app.listen(PORT, () => {
  console.log(`[server]: Server is running at https://localhost:${PORT}`);
});