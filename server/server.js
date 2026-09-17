const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(cors());

app.get("/api/movies", async (req, res) => {
  const search = req.query.search || "Batman";

  const response = await fetch(
    `https://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&s=${search}`
  );

  const data = await response.json();

  res.json(data);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});