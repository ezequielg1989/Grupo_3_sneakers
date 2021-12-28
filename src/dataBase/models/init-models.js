var DataTypes = require("sequelize").DataTypes;
var _clientes = require("./clientes");
var _clientesHasShoes = require("./clientesHasShoes");
var _shoes = require("./shoes");

function initModels(sequelize) {
  var clientes = _clientes(sequelize, DataTypes);
  var clientesHasShoes = _clientesHasShoes(sequelize, DataTypes);
  var shoes = _shoes(sequelize, DataTypes);

  clientes.belongsToMany(shoes, { as: 'shoesIdshoes_shos', through: clientesHasShoes, foreignKey: "clientesIdclientes", otherKey: "shoesIdshoes" });
  shoes.belongsToMany(clientes, { as: 'clientesIdclientes_clientes', through: clientesHasShoes, foreignKey: "shoesIdshoes", otherKey: "clientesIdclientes" });
  clientesHasShoes.belongsTo(clientes, { as: "clientesIdclientes_cliente", foreignKey: "clientesIdclientes"});
  clientes.hasMany(clientesHasShoes, { as: "clientesHasShos", foreignKey: "clientesIdclientes"});
  clientesHasShoes.belongsTo(shoes, { as: "shoesIdshoes_sho", foreignKey: "shoesIdshoes"});
  shoes.hasMany(clientesHasShoes, { as: "clientesHasShos", foreignKey: "shoesIdshoes"});

  return {
    clientes,
    clientesHasShoes,
    shoes,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
