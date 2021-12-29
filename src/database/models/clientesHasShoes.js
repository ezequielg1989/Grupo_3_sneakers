const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('clientesHasShoes', {
    clientesIdclientes: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'clientes',
        key: 'idclientes'
      }
    },
    shoesIdshoes: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'shoes',
        key: 'idshoes'
      }
    }
  }, {
    sequelize,
    tableName: 'clientesHasShoes',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "clientesIdclientes" },
          { name: "shoesIdshoes" },
        ]
      },
      {
        name: "fk_clientes_has_shoes_shoes1_idx",
        using: "BTREE",
        fields: [
          { name: "shoesIdshoes" },
        ]
      },
      {
        name: "fk_clientes_has_shoes_clientes_idx",
        using: "BTREE",
        fields: [
          { name: "clientesIdclientes" },
        ]
      },
    ]
  });
};
