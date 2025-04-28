import { DataTypes } from "sequelize";
import connection from "../config/db.js";

const Coach = connection.define("coaches",{
    
    coach_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
    },
    nif: {
        type: DataTypes.STRING(15),
        allowNull: false
    },
    gender: {
        type: DataTypes.ENUM('female', 'male','other'),
        allowNull: false
    },
    name: {
        type: DataTypes.STRING(45),
        allowNull: false
    },

    surname1: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    surname2: {
        type: DataTypes.STRING(45),
        allowNull: false
    },

    birthdate: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },

    phone: {
        type: DataTypes.STRING(15),
        allowNull: false
    },
    title: {
        type: DataTypes.ENUM('none', 'made', 'level 1', 'level 2', 'level 3'),
        allowNull: false
    },
    state: {
        type: DataTypes.ENUM('in', 'free', 'out'),
        allowNull: false
    }
})

export default Coach;