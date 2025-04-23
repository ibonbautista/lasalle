import { DataTypes } from "sequelize";
import connection from "../config/db.js";
import Season from "./seasons.js";
/* import Team from "./teams.js";
import Rival from "./rivals.js"; */

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

/* Season.hasMany(Match,{foreignKey:"season_id"});
Match.belongsTo(Season,{foreignKey:"season_id"}); 

Team.hasMany(Match,{foreignKey:"team_id"});
Match.belongsTo(Team,{foreignKey:"team_id"}); 

Rival.hasMany(Match,{foreignKey:"rival_id"});
Match.belongsTo(Rival,{foreignKey:"rival_id"});  */

export default Match;