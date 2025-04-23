// Importar los modelos
import Coach from './coaches.js';
import Team from './teams.js';
import CoachTeam from './coaches_teams.js';
import Match_Feedback from './matches_feedbacks.js';
import Player from './players.js';
import Match from './matches.js';
import Season from './seasons.js';
import Rival from './rivals.js';
import Member from './members.js';
import User from './users.js';

// Definir las asociaciones
Coach.belongsToMany(Team, { through: CoachTeam, foreignKey: 'coach_id' });
Team.belongsToMany(Coach, { through: CoachTeam, foreignKey: 'team_id' });

Player.hasMany(Match_Feedback, { foreignKey: 'player_id' });
Match_Feedback.belongsTo(Player, { foreignKey: 'player_id' });

Coach.hasMany(Match_Feedback, { foreignKey: 'coach_id' });
Match_Feedback.belongsTo(Coach, { foreignKey: 'coach_id' });

Match.hasMany(Match_Feedback, { foreignKey: 'match_id' });
Match_Feedback.belongsTo(Match, { foreignKey: 'match_id' });

Season.hasMany(Match, { foreignKey: 'season_id' });
Match.belongsTo(Season, { foreignKey: 'season_id' });

Team.hasMany(Match, { foreignKey: 'team_id' });
Match.belongsTo(Team, { foreignKey: 'team_id' });

Rival.hasMany(Match, { foreignKey: 'rival_id' });
Match.belongsTo(Rival, { foreignKey: 'rival_id' });

/* Team.hasMany(Season, { foreignKey: 'season_id' });
Season.belongsTo(Team, { foreignKey: 'team_id' }); */
Season.hasMany(Team, { foreignKey: "season_id" });
Team.belongsTo(Season, { foreignKey: "season_id" });


User.hasOne(Player, { foreignKey: 'user_id' });
Player.belongsTo(User, { foreignKey: 'user_id' });

User.hasOne(Coach, { foreignKey: 'user_id' });
Coach.belongsTo(User, { foreignKey: 'user_id' });

User.hasOne(Member, { foreignKey: 'user_id' });
Member.belongsTo(User, { foreignKey: 'user_id' });

Player.belongsTo(Team, { foreignKey: 'team_id' });
Team.hasMany(Player, { foreignKey: 'team_id' });


export {
    Coach,
    Team,
    CoachTeam,
    Match_Feedback,
    Player,
    Match,
    Season,
    Rival,
    Member,
    User,
}; 
