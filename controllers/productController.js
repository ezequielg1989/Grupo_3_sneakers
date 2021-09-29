const db = require('../dataBase/producto.json');
const { v4: uuidv4 } = require('uuid');
const fs = require("fs");
const path = require("path");

let controller = {
    admin: (req, res) => {
        res.render('addProd.ejs');
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

    res.redirect("/"),{producto:db};
    },

    getEdit: (req, res) => {
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
        res.redirect("index");
    },
      };



module.exports = controller