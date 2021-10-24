const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require('method-override');
const routesMain = require('./routes/main.routes');
const routesAdmin = require('./routes/admin.routes');
const PORT = process.env.PORT || 3000 ;

app.use(methodOverride('_method'));

app.use(express.urlencoded({extended: false}));

app.use(express.json());

app.use(express.static("./public"));

app.set('view engine','ejs');


app.listen(PORT, () => {
  console.log(`Server is running on PORT : ${PORT}`);
});

app.use('/',routesMain);
app.use('/',routesAdmin);



app.use((req,res,next)=>{
  res.status(404).render('not-found');
})




