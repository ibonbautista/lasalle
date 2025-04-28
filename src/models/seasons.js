import { DataTypes } from "sequelize";
import connection from "../config/db.js";

const Season = connection.define("seasons",{
    
    season_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(20),
        allowNull: false
    }
})

export default Season;