import express, { Application } from "express";

const PORT = process.env.PORT || 8000;

const app: Application = express();

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});