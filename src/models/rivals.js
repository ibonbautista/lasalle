import { DataTypes } from "sequelize";
import connection from "../config/db.js";
/* import Room from "./rooms.js" */

const Rival = connection.define("rivals",{
    
    rival_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(45),
        allowNull: false
    }
})


/* Doctor.hasOne(Room,{foreignKey:"room_id"});
Room.belongsTo(Doctor,{foreignKey:"room_id"}); */

export default Rival;