import Match from "../../models/matches.js";
import Season from "../../models/seasons.js";
import Team from "../../models/teams.js";
import Rival from "../../models/rivals.js";
import { Op } from "sequelize";
import {  } from "../../utils/errors.js";

//SHOW ALL MATCHES
async function getAll(){
    const matches = await Match.findAll();
    return matches;
}

//SHOW MATCHES BY ID
async function getMatchById(id){
    const matches = await Match.findByPk(id);
    return matches;
}

//SHOW MATCHES BY SEASON
async function getMatchBySeason(season){
    const filter = {include: [{
                        model: Season, 
                        where: {name: season}
                    }]
                   };
    const matches = await Match.findAll(filter);
    return matches;
}

//SHOW MATCHES BY TEAM
async function getMatchByTeam(team){
    const filter = {include: [{
                        model: Team, 
                        where: {name: team}
                    }]
                   };
    const matches = await Match.findAll(filter);
    return matches;
}

//SHOW MATCHES BY RIVAL
async function getMatchByRival(rival){
    const filter = {include: [{
                        model: Rival, 
                        where: {name: rival}
                    }]
                   };
    const matches = await Match.findAll(filter);
    return matches;
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


export default{
    getAll,
    getMatchById,
    getMatchBySeason,
    getMatchByTeam,
    getMatchByRival,
    getPlayerByTeam,
    getPlayerByGender,
    getPlayerByName,
    getPlayerBySurname,
    getPlayerByYear,
    getPlayerByTown,
    getPlayerByPosition,
    getPlayerByHeightPlus,
    getPlayerByHeightMinus,
    getPlayerByHand
}