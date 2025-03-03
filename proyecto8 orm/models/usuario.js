'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define la relacion 
      Usuario.belongsTo(models.Roles, {foreignKey: 'idrole', as: 'roles'} ),
      Usuario.belongsTo(models.Empresa, {foreignKey: 'idempresa', as: 'empresas'})
    }
  }
  Usuario.init({
    nombre: DataTypes.STRING,
    correo: DataTypes.STRING,
    contrasena: DataTypes.STRING,
    idrole: DataTypes.INTEGER,
    idempresa: DataTypes.INTEGER

  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};