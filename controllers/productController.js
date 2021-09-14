const products = require('../dataBase/newProd.json');

let controller = {
    admin: (req, res) => {
        res.render('./addProd.ejs');
    },

    newProd: (req, res) => {
        products.push({
            id:req.body.newId,
            nombreProd:req.body.newName,
            precioProd: req.body.newPrecio,
            imagenProd: req.body.newImage,
            descriptionProd: req.body.newDescripcion
        });

        res.redirect('/addProd');
    }
}

module.exports = controller