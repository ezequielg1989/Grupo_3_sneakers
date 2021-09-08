const express = require("express");
const app = express();
const path = require("path");
const routesMain = require('./routes/main.routes')
const PORT = process.env.PORT || 3000 ;


app.use(express.static("./public"));

app.set('view engine','ejs');


app.listen(PORT, () => {
  console.log(`Server is running on PORT : ${PORT}`);
});

app.use('/',routesMain);




