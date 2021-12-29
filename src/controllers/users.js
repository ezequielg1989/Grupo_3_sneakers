const {userModel} = require('../model')
const bcryptjs = require('bcryptjs')
const session = require('express-session')


const usersController = {
    
    loginIn :async (req,res,next)=>{
        try {
         res.render('login')
        } catch (error) {
            
        }
     },
    
    loginUsers: async (req,res,next)=>{
       try {
            let response = await userModel.loginUser(req.body.email);
           
            if(response) { 
                req.session.userLogged = response;
              
                if(req.body.remember) {
                    res.cookie('email', req.body.email, {maxAge : (1000 * 60) * 3})
                }
                
                let passwordOK =  bcryptjs.compareSync(req.body.password, response.password);
                
                if(passwordOK) {
                    if(response.role == 'admin') {
                        res.redirect('/prodAdmin')
                    } else {
                        res.redirect('/profile')
                    }
                }else {
                    return res.render('login', {
                        errors: {
                            email: {
                                msg: "Credenciales Invalidas",
                            },
                        },
                    });
                } 
                 
            } else {
                return res.render('login', {
                    errors: {
                        email: {
                            msg: "Credenciales Invalidas",
                        },
                    },
                });
            }
       } catch (error) {     
     
       }
    },
    logout: (req, res) => {
            res.clearCookie('userEmail');
            req.session.destroy();
            console.log(req.session);
            return res.redirect('/');
        
    },
    getUsers: async (req,res,next)=>{
        try {
            let user = req.session.userLogged;
            const response = await userModel.getUser(user.email);
            
            res.render('profile',{cliente:response})
        } catch (error) {
            
        }
       


    },
    registerUsers: async (req,res,next)=>{
       try {
        res.render('register')
       } catch (error) {
           
       }
    },
    createUsers: async (req,res,next)=>{
        try {
            const body = req.body;
            const usuario = await userModel.createUser(body);
            if(usuario){
                res.redirect('/')
                
            }
        } catch (error) {
            
        }
        


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