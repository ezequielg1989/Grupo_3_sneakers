// let db = require('../dataBase/producto.json')

// const fs = require("fs");
// const path = require("path");
// const{validationResult} = require('express-validator');
// const User = require('../models/User')
// const { v4: uuidv4 } = require('uuid');
// const bcryptjs = require('bcryptjs')

// let controller = {
//   home: (req, res) => {
//     res.render("index.ejs", { productos: db });
//   },
//   homeAdmin: (req, res) => {
//     res.render("listProd.ejs", { productos: db });
//   },

//   admin: (req, res) => {
//     res.render("addProd.ejs");// renderiza a la pagina de suma de producto
//   },
//   newProd: (req, res) => {
//     const archivo = req.file;
//     const { nombreProd, descripcionProd,precioProd, } = req.body;
//     const prod = {
//     id: uuidv4(),
//     nombreProd:nombreProd,
//     descripcionProd: descripcionProd,
//     precioProd:precioProd,
//     imagenProd: `images/imagenes-details/${archivo.filename}`,

//     };
//     db.push(prod);
//     fs.writeFileSync(path.join(__dirname,"../dataBase/producto.json"), JSON.stringify(db, null, 4), {
//     encoding: "utf8",
//     });
//     res.render("index.ejs", { productos: db });

//     },
  
//   register: (req, res) => {
//     res.render("register.ejs");
//   },

//   registerProcess: (req,res) => {
//     const resultValidation = validationResult(req);

//     if(resultValidation.errors.length > 0){
//       return res.render('register',{
//         errors:resultValidation.mapped(),
//         oldData: req.body
//       });
//     }
//     let userInDB = User.findByEmail('email',req.body.email);

//     if (userInDB){
//       return res.render('register',{
//         errors:{
//           email:{
//             msg:'este email ya esta registrado'
//           }
//         },
//         oldData: req.body
//       });
//     }
//     let userCreate = {
//       ...req.body,
//       password:bcryptjs.hashSync(req.body.password,10),
//       perfil: req.file.filename
//     }
//     User.create(userCreate);
//     return res.render('index',{ productos: db })
//   },

//   login: (req, res) => {
//     res.render("login.ejs");
//   },

//   loginIn: (req,res)=> {
//     let userLogin = User.findByEmail('email',req.body.email);
//     if(userLogin){
//       let passwordOk = bcryptjs.compareSync(req.body.password,userLogin.password);
//       if (passwordOk){
//         delete userLogin.password;
//         req.session.userLogged = userLogin;
//         return res.render('profile',{user:req.session.userLogged})
//       }
//       return res.render('login',{
//         errors:{
//           email:{
//             msg:'contraseña inavalida'
//           }
//         }
//       })
    
//     }
//     return res.render('register',{
//       errors:{
//         email:{
//           msg:'email invalido'
//         }
//       }
//     })
//   },

//   cart: (req, res) => {
//     res.render("cart.ejs");
//   },
  
  
//   product: (req, res) => {
//     const id = req.params.id;
//     const prod = db.find((item) => item.id == id);
//     res.render("details", { producto:prod });
//   },
//   /*getEdit: (req, res) => {
//     const id = req.params.id;
//     const prod = db.find((item) => item.id === id);
//     res.render("editProd", { producto: prod });
//   },

//   editProd: (req, res) => {
//     const id = req.params.id;
//     const archivo = req.file;
//     const { nombreProd, precioProd, descripcionProd } = req.body;
//     const indexProd = db.findIndex((item) => item.id === id);
//     db[indexProd] = {
//       id: id,
//       nombreProd: nombreProd,
//       precioProd: precioProd,
//       imagenProd: `images/imagenes-details/${archivo.filename}`,
//       descripcionProd: descripcionProd,
//     };
//     fs.writeFileSync(
//       path.join(__dirname, "../dataBase/producto.json"),
//       JSON.stringify(db, null, 4),
//       {
//         encoding: "utf8",
//       }
//     );
//     res.render('index');
//   },*/

//   getEditAdmin: (req, res) => {
//     const id = req.params.id;
//     const prod = db.find((item) => item.id === id);
//     res.render("editProd", { producto:prod });
    
//   },

// editProd: (req, res) => {
//     const id = req.params.id;
//     const archivo = req.file;
//     const { nombreProd, precioProd, descripcionProd } = req.body;
//     const indexProd = db.findIndex((item) => item.id === id);
//     db[indexProd] = {
//       id: id,
//       nombreProd: nombreProd,
//       precioProd: precioProd,
//       imagenProd: `images/imagenes-details/${archivo.filename}`,
//       descripcionProd: descripcionProd,
//     };
//     fs.writeFileSync(
//       path.join(__dirname, "../dataBase/producto.json"),
//       JSON.stringify(db, null, 4),
//       {
//         encoding: "utf8",
//       }
//     );
//     res.redirect("/"),{producto:db};

//   },
//   deleteProd:(req, res) => {
//     const id = req.params.id;
//     //let newdb=db;
//     db=db.filter((item) => item.id != id);
//     fs.writeFileSync(
//       path.join(__dirname, "../dataBase/producto.json"),
//       JSON.stringify(db, null, 4),
//       {
//         encoding: "utf8",
//       },        
//       );
    
//     res.render("listProd", { productos: db });
//   },
// };

// module.exports = controller;