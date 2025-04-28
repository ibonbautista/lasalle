import { DataTypes } from "sequelize";
import connection from "../config/db.js";

const Match = connection.define("matches",{
    
    match_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    season_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
    },
    team_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
    },
    rival_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    home_or_away: {
        type: DataTypes.ENUM('home', 'away'),
        allowNull: false,
    },
    home_score: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
    },
    away_score: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
    },
    general_comment: {
        type: DataTypes.TEXT,
        allowNull: true,
    }
})

export default Match;