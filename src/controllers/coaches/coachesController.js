import Team from "../../models/teams.js";
import Coach from "../../models/coaches.js";
import { Op } from "sequelize";
/* import Player from "../../models/players.js";
import { Op } from "sequelize";
import {  } from "../../utils/errors.js";*/

//SHOW ALL COACHES
async function getAll(){
    const coaches = await Coach.findAll();
    return coaches;
}

 //SHOW COACH BY ID
async function getCoachById(id){
    const coaches = await Coach.findByPk(id);
    return coaches;
}

//SHOW COACHES BY GENDER
async function getCoachByGender(gender){
    const filter = {where: {gender: gender}}
    const coaches = await Coach.findAll(filter);
    return coaches;
}; 

//SHOW COACHES BY NAME
async function getCoachByName(name){
    const filter = {where: {name: name}}
    const coaches = await Coach.findAll(filter);
    return coaches;
};

//SHOW COACHES BY FIRST SURNAME
async function getCoachBySurname(surname){
    const filter = {where: {surname1: surname}}
    const coaches = await Coach.findAll(filter);
    return coaches;
};

//SHOW COACHES BY YEAR
async function getCoachByYear(year){
    const birthdate_from = `${year}-01-01`;
    const birthdate_to = `${year}-12-31`;

    const filter = {where: {
                        birthdate: {
                                [Op.between]: [birthdate_from, birthdate_to]
                        }
                    }
                  }
    const coaches = await Coach.findAll(filter);
    return coaches;
};

//SHOW COACHES BY AGE-
async function getCoachByAgeMinus(age){
    const limit = new Date();
    limit.setFullYear(limit.getFullYear() - age);

    const filter = {where: { birthdate: {[Op.gt]: limit}}};
    const coaches = await Coach.findAll(filter);
    return coaches;
};

//SHOW COACHES BY TITLE
async function getCoachByTitle(title){
    const filter = {where: {title: title}};
    const coaches = await Coach.findAll(filter);
    return coaches;
}
/*
//SHOW TEAMS BY SEASON
async function getTeamBySeason(season){
    const filter = {include: [{
                        model: Season, 
                        where: {name: season}
                    }]
                   };
    const teams = await Team.findAll(filter);
    return teams;
}*/


export default{
    getAll, 
    getCoachById,
    getCoachByGender,
    getCoachByName,
    getCoachBySurname,
    getCoachByYear,
    getCoachByAgeMinus,
    getCoachByTitle
} 