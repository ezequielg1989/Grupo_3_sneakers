const fs = require('fs');
const { getMaxListeners } = require('process');

const User = {

    fileName: './dataBase/users.json',

    getData: function(){
        return JSON.parse(fs.readFileSync(this.fileName,'utf-8'));
    },

    generateId: function(){
        let usersAll = this.findAll();
        let lastUser = usersAll.pop();
        if(lastUser){
            return lastUser.id + 1;
        }
        return 1;
    },

    findAll: function(){
        return this.getData();
    },

    findByPk: function(id){
        let usersAll = this.findAll();
        let userFound = usersAll.find(user => user.id === id);
        return userFound; 
    },

    findByEmail: function(field,text){
        let usersAll = this.findAll();
        let userFound = usersAll.find(user => user[field] === text);
        return userFound; 
    },

    create: function (userData){
        let usersAll = this.findAll();
        let newUser = {
            id:this.generateId(),
            ...userData
        }
        usersAll.push(newUser);
        fs.writeFileSync(this.fileName,JSON.stringify(usersAll,null,4));
    },

    delete: function(id){
        let usersAll = this.findAll();
        let finalUsers = usersAll.filter(user => user.id !== id);
        fs.writeFileSync(this.fileName,JSON.stringify(finalUsers,null,4));
    }









}

module.exports = User;