const db = require('../database/models');
const path = require("path");



const userModel = {
    getUser : async ()=>{
        try {
            const response = await db.clientes.findAll()
            return response
        } catch (error) {
            console.log(`fallo la consulta a la DBUser ${error.message}`);
            return []
        }
        
    },
    createUser : async (cliente)=>{
        try {
            const response = await db.clientes.create(
                {
                    idclientes: cliente.idclientes,
                    email: cliente.email,
                    password: cliente.password,
                    username: cliente.username,
                    perfil: `images/perfil/${cliente.file.filename}`,
                }
            );
            return response
        } catch (error) {
            console.log(`fallo crear cliente a la DBUser ${error.message}`);
            return []
        }
        
    },
    deleteUser : async (id)=>{
        try {
            const response = await dbUser.clientes.destroy({
                    where:{
                        idclientes:id,
                    }
                });
            return response
        } catch (error) {
            console.log(`fallo borrar cliente a la DBUser ${error.message}`);
            return []
        }
        
    },
    updateUser : async (cliente)=>{
        try {
            const response = await dbUser.clientes.create(
                {
                    idclientes: cliente.idclientes,
                    email: cliente.email,
                    password: cliente.password,
                    username: cliente.username,
                    perfil: `images/imagenes-details/${cliente.filename}`,
                },
            {
                where:{
                    idclientes:cliente.idclientes
                }
            });
            return response
        } catch (error) {
            console.log(`fallo editar producto a la DB ${error.message}`);
            return []
        }
        
    },
    ShowUser : async function(id){
        try {
            const response = await dbUser.clientes.findAll()
            return response.find(item => item.idclientes == id);    
        } catch (error) {
            console.log(`fallo detalle de cliente de la DBUser ${error.message}`);
            return []
        }
        
    },




}



module.exports = userModel;