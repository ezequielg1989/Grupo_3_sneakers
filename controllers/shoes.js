const {shoeModel} = require('../model')


const shoesController = {

    getShoes: async (req,res,next)=>{
        try {
            const response = await shoeModel.getShoe();
            res.render('index',{productos:response})
        } catch (error) {
            
        }
       


    },
    getShoesAdmin: async (req,res,next)=>{
        const response = await shoeModel.getShoe();
        res.render('addProd')


    },
    createShoes: async (req,res,next)=>{
        try {
            const body = req.body;
            const response = await shoeModel.createShoe(body);
        } catch (error) {
            
        }
        res.redirect('/')


    },
    deleteShoes: async (req,res,next)=>{
        const response = await shoeModel.deleteShoe(req.params.id);
        res.redirect('/')

    },
    ProdShoes: async (req,res,next)=>{
        try {
            const id = req.params.id
            const producto = await shoeModel.ShowShoe(id);
            //console.log(producto);
            res.render("details",{producto : producto});
        } catch (error) {
            
        }
    },
    showEditShoes: async (req,res,next)=>{
        try {
            const id = req.params.id
            const producto = await shoeModel.ShowShoe(id);
            res.render("editProd",{producto : producto});
        } catch (error) {
                
        }
        

    },
    editShoes: async (req,res,next)=>{
        try {
            const body = req.body;
            console.log(body);
            const response = await shoeModel.updateShoe(body);
        } catch (error) {
            
        }
        res.redirect('/')


    },
    



}

module.exports = shoesController;