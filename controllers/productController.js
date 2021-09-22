const dbNew = require('../dataBase/newProd.json');
const { v4: uuidv4 } = require('uuid');
const fs = require("fs");
const path = require("path");

let controller = {
    admin: (req, res) => {
        res.render('addProd.ejs');
    },

    newProd: (req, res) => {
    const archivo = req.file;
    const { Name, Descripcion,Precio, } = req.body;


    const prod = {
    id: uuidv4(),
    nombre:Name,
    descripcion: Descripcion,
    precio:Precio,
    image: `img/${archivo.filename}`,

    };
    dbNew.push(prod);
    fs.writeFileSync(path.join(__dirname,"../dataBase/newProd.json"), JSON.stringify(dbNew, null, 4), {
    encoding: "utf8",
    });

    res.redirect("/admin/addProd");
    },


}

module.exports = controller