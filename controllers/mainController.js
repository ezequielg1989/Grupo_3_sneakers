const db = require('../dataBase/producto.json')
let controller = {
  home: (req, res) => {
    res.render("index.ejs", {productos:db});
  },
  register: (req, res) => {
    res.render("register.ejs");
  },
  login: (req, res) => {
    res.render("login.ejs");
  },
  cart: (req, res) => {
    res.render("cart.ejs");
  },
  details: (req, res) => {
    res.render("details.ejs");
  },
  addEditForm: (req,res) => {
    res.render("addEditProduct.ejs")
  },
  
};

module.exports = controller;
