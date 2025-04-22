import { DataTypes } from "sequelize";
import connection from "../config/db.js";
import Player from "./players.js";
import Coach from "./coaches.js";
import Match from "./matches.js";

const Match_Feedback = connection.define("matches_feedbacks",{
    
    feedback_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    match_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    coach_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    player_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    comment: {
        type: DataTypes.TEXT,
        allowNull: true,
    }
})


Player.hasMany(Match_Feedback,{foreignKey:"player_id"});
Match_Feedback.belongsTo(Player,{foreignKey:"player_id"});

Coach.hasMany(Match_Feedback,{foreignKey:"coach_id"});
Match_Feedback.belongsTo(Coach,{foreignKey:"coach_id"});

Match.hasMany(Match_Feedback,{foreignKey:"match_id"});
Match_Feedback.belongsTo(Match,{foreignKey:"match_id"});

export default Match_Feedback;