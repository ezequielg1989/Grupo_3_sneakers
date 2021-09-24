const db = require('../dataBase/producto.json')
let controller = {
  home: (req, res) => {
    res.render("index.ejs", { productos: db });
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
    res.render("details.ejs", { productos: db });
  },
  product: (req, res) => {
    res.render("details.ejs", { producto: db.find((prod) => prod.id == req.params.id) });
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
    res.redirect("details", { producto: db });
  },
};

module.exports = controller;
