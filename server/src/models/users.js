import { DataTypes } from "sequelize";
import connection from "../config/db.js";

const User = connection.define("users",{
    user_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: DataTypes.STRING(45),
        allowNull: false,
        unique:true
    },
    password: {
        type: DataTypes.STRING(80),
        allowNull: false,
    },
    role: {
        type: DataTypes.ENUM('admin', 'coach', 'player', 'member'),
        allowNull: false,
    },
    in_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    update_date: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    out_date: {
        type: DataTypes.DATEONLY,
        allowNull: true,
    },
})

export default User;