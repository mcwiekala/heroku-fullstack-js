const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors')
const path = require("path");
dotenv.config();

const app = express();

app.use(express.static(path.join(__dirname + "/public")))
app.use(cors())
const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
  res.send('Express + TypeScript Server');
});

app.get('/api/message', (req, res) => {
  res.send('HELLO WORLD!');
});

app.listen(PORT, () => {
  console.log(`[server]: Server is running at https://localhost:${PORT}`);
});