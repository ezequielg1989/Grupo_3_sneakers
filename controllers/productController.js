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


}

module.exports = controller