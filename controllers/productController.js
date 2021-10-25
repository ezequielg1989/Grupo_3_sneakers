
let db = require('../dataBase/producto.json');
let dbUser = require('../dataBase/usuarios.json');

const { v4: uuidv4 } = require('uuid');
const fs = require("fs");
const path = require("path");

let controller = {
  homeAdmin: (req, res) => {
    
    res.render("listProd.ejs", { productos: db });
  },
    admin: (req, res) => {
        res.render("addProd.ejs");// renderiza a la pagina de suma de producto
    },

    newProd: (req, res) => {
    const archivo = req.file;
    const { nombreProd, descripcionProd,precioProd, } = req.body;
    const prod = {
    id: uuidv4(),
    nombreProd:nombreProd,
    descripcionProd: descripcionProd,
    precioProd:precioProd,
    imagenProd: `images/imagenes-details/${archivo.filename}`,

    };
    db.push(prod);
    fs.writeFileSync(path.join(__dirname,"../dataBase/producto.json"), JSON.stringify(db, null, 4), {
    encoding: "utf8",
    });

    res.render("/"),{productos:db};
    },

    getEditAdmin: (req, res) => {
        const id = req.params.id;
        const prod = db.find((item) => item.id === id);
        res.render("editProd", { producto:prod });
        
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
        res.redirect("/"),{producto:db};

      },
      deleteProd:(req, res) => {
        const id = req.params.id;
        //let newdb=db;
        db=db.filter((item) => item.id != id);
        fs.writeFileSync(
          path.join(__dirname, "../dataBase/producto.json"),
          JSON.stringify(db, null, 4),
          {
            encoding: "utf8",
          },        
          );
        
        res.render("listProd", { productos: db });
      },

      newUser:(req,res)=>{
        res.render('register.ejs');// renderiza a la pagina de suma de producto

      },
      createUser:(req,res)=>{
          const { email,username,password } = req.body;
          const users = {
          id: uuidv4(),
          nameUser:username,
          emailUser: email,
          passwordUser:password,      
          };
          dbUser.push(users);
          fs.writeFileSync(path.join(__dirname,"../dataBase/usuarios.json"), JSON.stringify(dbUser, null, 4), {
          encoding: "utf8",
          });
      
          res.redirect("/");
      }
      };



module.exports = controller