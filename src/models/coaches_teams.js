import { DataTypes } from "sequelize";
import connection from "../config/db.js";
import Coach from "./coaches.js";
import Team from "./teams.js";

const CoachTeam = connection.define("coaches_teams",{
    coach_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: { model: 'Coaches', key: 'coach_id' }
    },
    team_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: { model: 'Teams', key: 'team_id' }
    },
    role: {
        type: DataTypes.ENUM('head','assistant','other'),
        allowNull: false,
    }
})

export default CoachTeam;