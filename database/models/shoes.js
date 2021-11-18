const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('shoes', {
    idshoes: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombreProd: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    precioProd: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    imagenProd: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    descripcionProd: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'shoes',
    tableName: 'shoes',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idshoes" },
        ]
      },
    ]
  });
};
