const {body} = require('express-validator');
const path = require('path');

const validations = [
    body('username').notEmpty().withMessage('debes ingresar un nombre'),
    body('email')
        .notEmpty().withMessage('debes ingresar un correo electronico').bail()
        .isEmail().withMessage('debes ingresar un formato valido'),
    body('password').notEmpty().withMessage('debes ingresar una contraseña'),
    body('perfil').custom((value,{req}) => {
        let file = req.file;
        let extension = ['.jpg','.png','.gif'];

        if(!file){
            throw new Error('debes ingresar una imagen');
        }else {
            let fileExtension = path.extname(file.originalname);
            if (!extension.includes(fileExtension)){
                throw new Error ('no es un archivo permitido')
            }
        }
        return true
    })
]


module.exports = validations