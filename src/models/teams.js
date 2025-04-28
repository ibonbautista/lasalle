import { DataTypes } from "sequelize";
import connection from "../config/db.js";

const Team = connection.define("teams",{
    
    team_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    season_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    category: {
        type: DataTypes.ENUM('premini', 'mini','youth','cadet','junior','senior'),
        allowNull: false
    },
    gender: {
        type: DataTypes.ENUM('female', 'male','mixed'),
        allowNull: false
    },
    is_active: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
})

export default Team;