const express = require("express");
const app = express();
const isbnValidator = require("./isbnValidator");

app.use(express.json());

app.get("/", (req, res) => {
  const { isbn } = req.body;
  res.status(200).json({ isbn, response: isbnValidator(isbn) });
});

app.listen(3000, () => {
  console.log("Server running on port 3000!");
});
