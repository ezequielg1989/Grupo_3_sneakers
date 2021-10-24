let db = require('../dataBase/producto.json')

const{validationResult} = require('express-validator');
const User = require('../models/User')

let controller = {
  home: (req, res) => {
    res.render("index.ejs", { productos: db });
  },
  register: (req, res) => {
    res.render("register.ejs");
  },

  registerProcess: (req,res) => {
    const resultValidation = validationResult(req);

    if(resultValidation.errors.length > 0){
      return res.render('register',{
        errors:resultValidation.mapped(),
        oldData: req.body
      });
    }

    let userCreate = {
      ...req.body,
      perfil: req.file.filename
    }
    User.create(userCreate);
    return res.render('index',{ productos: db })
  },

  login: (req, res) => {
    res.render("login.ejs");
  },

  //loginIn: (),

  cart: (req, res) => {
    res.render("cart.ejs");
  },
  
  
  product: (req, res) => {
    const id = req.params.id;
    const prod = db.find((item) => item.id == id);
    res.render("details", { producto:prod });
  },
  getEdit: (req, res) => {
    const id = req.params.id;
    const prod = db.find((item) => item.id === id);
    res.render("editProd", { producto: prod });
  },

  editProd: (req, res) => {
    const id = req.params.id;
    const archivo = req.file;
    const { nombreProd, precioProd, descripcionProd } = req.body;
    const indexProd = db.findIndex((item) => item.id === id);
    db[indexProd] = {
      id: id,
      nombreProd: nombreProd,
      precioProd: precioProd,
      imagenProd: `images/imagenes-details/${archivo.filename}`,
      descripcionProd: descripcionProd,
    };
    fs.writeFileSync(
      path.join(__dirname, "../dataBase/producto.json"),
      JSON.stringify(db, null, 4),
      {
        encoding: "utf8",
      }
    );
    res.render('index');
  },
};

module.exports = controller;
