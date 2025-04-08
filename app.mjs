import express from 'express';
import 'dotenv/config';

const PORT = process.env.PORT;
const app = express();

app.get('/', (req, res, next) => {
  res.send('Hello, World');
});

app.use((error, req, res, next) => {
  res.send(error);
});

app.listen(PORT, () => console.log('Listening on port', PORT));
