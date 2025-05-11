import Match from "../../models/matches.js";
import Season from "../../models/seasons.js";
import Team from "../../models/teams.js";
import Player from "../../models/players.js";
import Rival from "../../models/rivals.js";
import {  } from "../../utils/errors.js";

//SHOW ALL MATCHES
async function getAll(){
    const matches = await Match.findAll({
        include: [
          {
            model: Team,
            attributes: ["name"],
          },
          {
            model: Rival,
            attributes: ["name"],
          },
          {
            model: Season,
            attributes: ["name"],
          },
        ],
      });
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
    const filter = {include: [
      {
          model: Team,
          where: { name: team },
      },
      {
          model: Rival,
      }
  ]
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


export default{
    getAll,
    getMatchById,
    getMatchBySeason,
    getMatchByTeam,
    getMatchByRival
}