import express from "express";
import "dotenv/config";

const app = express();
const { PORT, MONGO_URL } = process.env;

app.get("/", (req, res) => {
  res.json({ ola: "Olá mundo!!!!!!!" });
});

app.listen(3000, () => {
  console.log(`Servidor rodando NA porta ${port}`);
});
