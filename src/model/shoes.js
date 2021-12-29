const db = require('../database/models');
const path = require("path");


const shoeModel = {

    shoe :  async (idshoes)=>{
        try {
            const response = await db.shoes.findOne({
                where: {
                    idshoes:idshoes 
                }
            })
            return response;
            
        } catch (error) {
            console.log(`fallo la consulta a la DBshoes ${error.message}`);
            return []
        }
        
    },

    getShoe : async ()=>{
        try {
            const response = await db.shoes.findAll()
            return response
        } catch (error) {
            console.log(`fallo la consulta a la DB ${error.message}`);
            return []
        }
        
    },
    createShoe : async (producto)=>{
        try {
            const response = await db.shoes.create(
                {
                    idshoes: producto.idshoes,
                    nombreProd:producto.nombreProd,
                    descripcionProd: producto.descripcionProd,
                    precioProd:producto.precioProd,
                    imagenProd: `images/imagenes-details/${producto.filename}`,
                }
            );
            return response
        } catch (error) {
            console.log(`fallo crear producto a la DB ${error.message}`);
            return []
        }
        
    },
    deleteShoe : async (id)=>{
        try {
            const response = await db.shoes.destroy({
                    where:{
                        idshoes:id,
                    }
                });
            return response
        } catch (error) {
            console.log(`fallo borrar producto a la DB ${error.message}`);
            return []
        }
        
    },

    updateShoe : async (producto)=>{
        try {
            const response = await db.shoes.update(
                {
                    idshoes: producto.idshoes,
                    nombreProd:producto.nombreProd,
                    descripcionProd: producto.descripcionProd,
                    precioProd:producto.precioProd,
                    imagenProd: `images/imagenes-details/${producto.filename}`,
                },
            {
                where:{
                    idshoes:producto.idshoes
                }
            });
            return response
        } catch (error) {
            console.log(`fallo editar producto a la DB ${error.message}`);
            return []
        }
        
    },
    ShowShoe : async function(id){
        try {
            const zapas = await db.shoes.findAll()
            return zapas.find(item => item.idshoes == id);    
        } catch (error) {
            console.log(`fallo detalle de producto de la DB ${error.message}`);
            return []
        }
        
    }
}

module.exports= shoeModel;