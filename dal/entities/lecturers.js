"use strict";
module.exports = (sequelize, DataTypes) => {
    const Lecturer = sequelize.define(
        "lecturers",
        {
            lecturerName: DataTypes.STRING,
        },
        {
            tableName: "Lecturers",
            timestamps: false
        }
    );

    Lecturer.associate = function (models) {
        Lecturer.hasOne(models.courses, {
            foreignKey: "lecturerId",
            as: "courses",
        });
    };

    return Lecturer;
};