import { DataTypes } from "sequelize";
import connection from "../config/db.js";

const Member = connection.define("member",{
    
    member_id: {
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
    name: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    surname: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING(15),
        allowNull: false
    },
    family: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
})

export default Member;