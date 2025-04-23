import { DataTypes } from "sequelize";
import connection from "../config/db.js";
/* import Season from "./seasons.js";
/* import Coach from "./coaches.js"; 
import CoachTeam from "./coaches_teams.js"; */

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

/* Team.hasMany(Season,{foreignKey:"season_id"});
Season.belongsTo(Team,{foreignKey:"team_id"}); */

/* Coach.belongsToMany(Team, { through: 'CoachTeam', foreignKey: 'coach_id' });
Team.belongsToMany(Coach, { through: 'CoachTeam', foreignKey: 'team_id' }); */

export default Team;