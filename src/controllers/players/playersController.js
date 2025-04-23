import Player from "../../models/players.js";
import Team from "../../models/teams.js";
import {  } from "../../utils/errors.js";

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
    const filter = {include: [Team]};
    filter.where = {team_id: team};
    const players = await Player.findAll(filter);
    return players;
}

export default{
    getAll,
    getPlayerById,
    getPlayerByTeam
}