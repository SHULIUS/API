"use strict";

module.exports = function (sequelize, DataTypes) {
    const Classroom =  sequelize.define(
        "classrooms",
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
                className: DataTypes.STRING
            },
        
        },
        {
            tableName: 'classrooms',
            timestamps: false
        }
    );
    Classroom.associate = function(models) {
        Classroom.belongsTo(models.users, {
          as: "users",
          foreignKey: "classroomId"
        });
      };

    return Classroom;
};