import express, { Application } from "express";

require('dotenv').config();

const PORT = process.env.PORT || 8000;
const app: Application = express();

app.use(express.json());
app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
  console.log('process.env', process.env.PORT, process.env.OPEN_WEATHER_API_KEY);
});