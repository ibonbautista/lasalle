import Team from "../../models/teams.js";
import Season from "../../models/seasons.js";
/* import Player from "../../models/players.js";
import { Op } from "sequelize";
import {  } from "../../utils/errors.js";*/

//SHOW ALL TEAMS
async function getAll(){
    const teams = await Team.findAll();
    return teams;
}

//SHOW TEAMS BY ID
async function getTeamById(id){
    const teams = await Team.findByPk(id);
    return teams;
}

//SHOW TEAMS BY CATEGORY
async function getTeamByCategory(category){
    const filter = {where: {category: category}};
    const teams = await Team.findAll(filter);
    return teams;
}

//SHOW TEAMS BY SEASON
async function getTeamBySeason(season){
    const filter = {include: [{
                        model: Season, 
                        where: {name: season}
                    }]
                   };
    const teams = await Team.findAll(filter);
    return teams;
}

//SHOW PLAYERS BY GENDER
async function getTeamByGender(gender){
    const filter = {where: {gender: gender}}
    const teams = await Team.findAll(filter);
    return teams;
};

export default{
    getAll,
    getTeamById,
    getTeamByCategory,
    getTeamBySeason,
    getTeamByGender
} 