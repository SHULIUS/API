'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  Student.init({
    name: DataTypes.STRING,
    lastname: DataTypes.STRING,
    birthdate: DataTypes.DATE,
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Student',
  });
  class Student extends Model {

    static associate(models) {
      Student.belongsToMany(models.Section, {
        through: "Registration",
        as: "sections",
        foreignKey: "studentId"
      })
    }
  }

  return Student;
};