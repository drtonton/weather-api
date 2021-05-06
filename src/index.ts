import express, { Application } from 'express';
import Router from './routers/index.router';

require('dotenv').config();

const PORT = process.env.PORT || 8001;
const app: Application = express();

app.use(express.json());
app.use(Router);
app.listen(PORT, () => {
  console.log('Server is running on port', PORT);
});