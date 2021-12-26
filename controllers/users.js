const {userModel} = require('../model')



const usersController = {
    
    
    loginUser: async (req,res,next)=>{
       try {
        res.render('login')
       } catch (error) {
           
       }
    },
    getUsers: async (req,res,next)=>{
        try {
            const response = await userModel.getUser();
            res.render('listUsers',{clientes:response})
        } catch (error) {
            
        }
       


    },
    registerUser: async (req,res,next)=>{
       try {
        res.render('register')
       } catch (error) {
           
       }
    },
    createUser: async (req,res,next)=>{
        try {
            const body = req.body;
            const usuario = await userModel.createUser(body);
            console.log(usuario);
        } catch (error) {
            
        }
        res.redirect('register')


    },
    deleteUser: async (req,res,next)=>{
        const response = await userModel.deleteUser(req.params.id);
        res.redirect('/')

    },
    detailUser: async (req,res,next)=>{
        try {
            const id = req.params.id
            const producto = await userModel.ShowUser(id);
            //console.log(producto);
            res.render("details",{producto : producto});
        } catch (error) {
            
        }
    },
    showEditUsers: async (req,res,next)=>{
        try {
            const id = req.params.id
            const producto = await userModel.ShowUser(id);
            res.render("editProd",{producto : producto});
        } catch (error) {
                
        }
        

    },
    editUsers: async (req,res,next)=>{
        try {
            const body = req.body;
            console.log(body);
            const response = await shoeModel.updateShoe(body);
        } catch (error) {
            
        }
        res.redirect('/')


    },
    



}


module.exports = usersController;