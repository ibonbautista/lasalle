import Player from "../../models/players.js";
import Team from "../../models/teams.js";
import Match from "../../models/matches.js";
import Match_Feedback from "../../models/matches_feedbacks.js";
import User from "../../models/users.js";
import { Op, where } from "sequelize";
import { hash, compare } from "../../utils/bcrypt.js";
import {
    UserMailProvided,
    UserEmailAlreadyExists,
    UserNameProvided,
    UserRoleIncorrect,
    UserPasswordNotProvided,
    UserInvalidCredentials
} from "../../utils/errors.js";

//FUNCTION TO CREATE A PLAYER
async function createPlayer(userData){
    if (!userData.name) throw new UserNameProvided();
    if (!userData.email) throw new UserMailProvided();
    if (!userData.password) throw new UserPasswordNotProvided();

    userData.in_date = new Date();
    userData.role = "player";
    
    const oldUser = await User.findOne({ where: { email: userData.email } });
    if (oldUser) {
        //Delete out date
    await User.destroy({where: {user_id: oldUser.user_id}}); 
    }

    userData.password = await hash(userData.password);

    const result = await User.create(userData);

    await Player.create({ 
        user_id: result.user_id,
        team_id: userData.team_id,
        nif: userData.nif,
        gender: userData.gender,
        name: userData.name,
        surname1: userData.surname1,
        surname2: userData.surname2,
        birthdate: userData.birthdate,
        phone: userData.phone,
        address: userData.address,
        position: userData.position,
        height: userData.height,
        hand: userData.hand,
        status: "in"
    });

    return result;
}

//FUNCTION TO EDIT A PLAYER
async function editPlayer(id, data) {
    const player = await Player.findByPk(id);
    if (!player) return null;
  
    await player.update(data);
    return player;
  }

//FUNCTION TO DELETE A PLAYER
async function deletePlayer(id){
    const player = await Player.findByPk(id, {include: [User]});
    if(!player) return null;

    //Put status out
    await Player.update(
        {status: "out"},
        {where: {player_id: id}}
    );

    //Put out_date in user
    await User.update(
            {out_date: new Date()},
            {where: {user_id: player.user_id}}
        ); 

    return player;
}


//SHOW ALL PLAYERS
async function getAll(){
    const players = await Player.findAll();
    return players;
}

//SHOW PLAYERS BY ID
async function getPlayerById(id){
    const players = await Player.findByPk(id);
    return players;
}

//SHOW PLAYERS BY TEAM
async function getPlayerByTeam(team){
    const filter = {include: [{
                        model: Team, 
                        where: {name: team}
                    }]
                   };
    const players = await Player.findAll(filter);
    return players;
}

//SHOW PLAYERS BY GENDER
async function getPlayerByGender(gender){
    const filter = {where: {gender: gender}}
    const players = await Player.findAll(filter);
    return players;
};

//SHOW PLAYERS BY NAME
async function getPlayerByName(name){
    const filter = {where: {name: name}}
    const players = await Player.findAll(filter);
    return players;
};

//SHOW PLAYERS BY FIRST SURNAME
async function getPlayerBySurname(surname){
    const filter = {where: {surname1: surname}}
    const players = await Player.findAll(filter);
    return players;
};

//SHOW PLAYERS BY YEAR
async function getPlayerByYear(year){
    const birthdate_from = `${year}-01-01`;
    const birthdate_to = `${year}-12-31`;

    const filter = {where: {
                        birthdate: {
                                [Op.between]: [birthdate_from, birthdate_to]
                        }
                    }
                  }
    const players = await Player.findAll(filter);
    return players;
};

//SHOW PLAYERS BY TOWN
async function getPlayerByTown(town){
    const filter = {where: {
                        address: {
                            [Op.like]: `%${town}%`  // busca el pueblo en la dirección
                        }
                    }
                  }
    const players = await Player.findAll(filter);
    return players;
};

//SHOW PLAYERS BY POSITION
async function getPlayerByPosition(position){
    const filter = {where: {
                        position: {
                            [Op.like]: `%${position}%`  // busca el pueblo en la dirección
                        }
                    }
                  }
    const players = await Player.findAll(filter);
    return players;
};

//SHOW PLAYERS BY HEIGHT+
async function getPlayerByHeightPlus(height){
    const filter = {where: { height: {[Op.gte]: height}}};
    const players = await Player.findAll(filter);
    return players;
};

//SHOW PLAYERS BY HEIGHT-
async function getPlayerByHeightMinus(height){
    const filter = {where: { height: {[Op.lt]: height}}};
    const players = await Player.findAll(filter);
    return players;
};

//SHOW PLAYERS BY HAND
async function getPlayerByHand(hand){
    const filter = {where: { hand: {[Op.like]: `%${hand}%`}}};
    const players = await Player.findAll(filter);
    return players;
};

//SHOW MATCHES BY PLAYER
async function getMatchByPlayer(id){
    const player = await Player.findByPk(id, { include: { model: Team,
                                                          include: { model: Match }}
                                });
    const matches = await Match.findAll( {where: { team_id: player.team_id }});
       
    return matches;
}

//SHOW FEEDBACK BY PLAYER
async function getFeedbackByPlayer(id){
    const player = await Player.findByPk(id, { include: { model: Team,
                                                          include: { model: Match,
                                                            include: { model: Match_Feedback }}
                                                           }}
                                );
    const feedback = await Match_Feedback.findAll( {where: { player_id: player.player_id }});
        
    return feedback;
}


export default{
    createPlayer,
    editPlayer,
    deletePlayer,
    getAll,
    getPlayerById,
    getPlayerByTeam,
    getPlayerByGender,
    getPlayerByName,
    getPlayerBySurname,
    getPlayerByYear,
    getPlayerByTown,
    getPlayerByPosition,
    getPlayerByHeightPlus,
    getPlayerByHeightMinus,
    getPlayerByHand,
    getMatchByPlayer,
    getFeedbackByPlayer
}