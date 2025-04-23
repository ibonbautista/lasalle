import { DataTypes } from "sequelize";
import connection from "../config/db.js";
/* import User from "./users.js"; */

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

    surname2: {
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


/* Doctor.hasOne(Room,{foreignKey:"room_id"});
Room.belongsTo(Doctor,{foreignKey:"room_id"}); */

export default Member;