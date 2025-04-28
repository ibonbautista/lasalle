import { DataTypes } from "sequelize";
import connection from "../config/db.js";

const Match_Feedback = connection.define("matches_feedbacks",{
    
    feedback_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    match_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
    },
    coach_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
    },
    player_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
    },
    comment: {
        type: DataTypes.TEXT,
        allowNull: true,
    }
})

export default Match_Feedback;