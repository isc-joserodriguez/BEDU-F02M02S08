const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('mysql::memory:');
User = require('./Usuario');

const Mascota = sequelize.define('Mascota', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey : true
  },
  nombre: DataTypes.STRING,
  categoria: DataTypes.STRING,
  fotos: DataTypes.STRING,
  descripcion: DataTypes.STRING,
  ubicacion: DataTypes.STRING,
  anunciante: DataTypes.INTEGER,
  ubicacion: DataTypes.STRING,
},{ tableName: 'mascota'});

Mascota.hasOne(User,{foreignKey: 'id'});

module.exports = Mascota;