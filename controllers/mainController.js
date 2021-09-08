const express = require('express');
const path = require('path');
//const fs=require('fs');
//const dataProducto=fs.readFileSync('producto.json', 'utf8');
//const productos=JSON.parse(dataProducto);


let controller = {
    home:(req,res)=>{
        res.render('index.ejs', {productos: [
            {
              "idProducto": 1,
              "nombreProducto": "nike force",
              "precioProducto": 6.5,
              "imagenProducto": "/images/imagenes-details/nike2.jpeg",
              "descripcionProducto":""
            },
            {
              "idProducto": 2,
              "nombreProducto": "Puma Rs-X",
              "precioProducto": 6.5,
              "imagenProducto": "/images/imagenes-details/puma1.jpeg"
            },
            {
              "idProducto": 3,
              "nombreProducto": "Nike Air force",
              "precioProducto": 6.5,
              "imagenProducto": "/images/imagenes-details/nike6.jpeg",
              "descripcionProducto":"Las Zapatillas Nike Air Force 1 React te llevan a un nuevo mundo. Se fusionan el modelo icónico de Nike y el básquet con la tecnología Nike React para una comodidad total. La versión suprema en comodidad de la familia Air Force para que las uses todo el día."
            },
            {
                "idProducto": 4,
                "nombreProducto": "adidas U_Path",
                "precioProducto": 6.5,
                "imagenProducto": "/images/imagenes-details/adidas.jpeg",
                "descripcionProducto":""
            },
            {
                "idProducto": 5,
                "nombreProducto": "Nike Air Max",
                "precioProducto": 6.5,
                "imagenProducto": "/images/imagenes-details/nike7.jpeg",
                "descripcionProducto":"Las zapatillas Nike Air Max 90 mantienen su fidelidad al modelo original pero con un diseño innovador hecho en al menos un 20% con materiales reciclados. La suela exterior Grind con patrón clásico de gofre y detalles de TPU en los ojales se unen a la amortiguación Max Air que te permite una pisada más ligera y cómoda."
            },
            {
                "idProducto": 6,
                "nombreProducto": "Fila Jogger",
                "precioProducto": 6.5,
                "imagenProducto": "/images/imagenes-details/nike9.jpeg",
                "descripcionProducto":"Las zapatillas Fila Fore Jogger están confeccionadas en poliéster y materiales que las hacen resistentes y duraderas para todo tipo de uso. Su diseño se inspira en líneas deportivas y colores rústicos para dar como resultado un look urbano fácil de combinar con tus outfits. La suela de goma te ofrece la tracción necesaria sobre la superficie mientras que el ajuste con sistema de cordones te brinda el control personalizado."
            }
            
          ]});
    },
    register:(req,res)=>{
        res.render('register.ejs');
    },
    login:(req,res)=>{
        res.render('login.ejs');
    },
    cart:(req,res)=>{
        res.render('cart.ejs');
    },
    details:(req,res)=>{
        res.render('details.ejs');
    },
}

module.exports = controller;