import express, { Application } from 'express';

import Router from './routers/index.router';

require('dotenv').config();

const cors = require('cors');
const PORT = process.env.PORT || 8001;
const app: Application = express();

app.use(express.json());
app.use(cors());
app.use(Router);
app.listen(PORT, () => {
  console.log('Server is running on port', PORT);
});
