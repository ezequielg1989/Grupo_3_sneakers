const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "./public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./view/index.html"));
});
app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "./view/register.html"));
});
app.get("/cart", (req, res) => {
  res.sendFile(path.join(__dirname, "./view/cart.html"));
});


app.get("/details", (req, res) => {
  res.sendFile(path.join(__dirname, "./view/details.html"));
});

const puerto = process.env.PORT || 3000

app.listen(puerto, () => {
  console.log(`Server is running on PORT : ${puerto}`);
});
