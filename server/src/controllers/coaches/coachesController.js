import Team from "../../models/teams.js";
import CoachTeam from "../../models/coaches_teams.js";
import Match from "../../models/matches.js";
import Match_Feedback from "../../models/matches_feedbacks.js";
import Coach from "../../models/coaches.js";
import { Sequelize } from 'sequelize';  // Importamos Sequelize
import User from "../../models/users.js";
import { Op } from "sequelize";
import { hash, compare } from "../../utils/bcrypt.js";
import {
    UserMailProvided,
    UserEmailAlreadyExists,
    UserNameProvided,
    UserRoleIncorrect,
    UserPasswordNotProvided,
    UserInvalidCredentials
} from "../../utils/errors.js";

//FUNCTION TO CREATE A COACH
async function createCoach(userData){
    if (!userData.name) throw new UserNameProvided();
    if (!userData.email) throw new UserMailProvided();
    if (!userData.password) throw new UserPasswordNotProvided();

    userData.in_date = new Date();
    userData.role = "coach";
    
    const oldUser = await User.findOne({ where: { email: userData.email } });
    if (oldUser) {
        //Delete out date
    await User.destroy({where: {user_id: oldUser.user_id}}); 
    }

    userData.password = await hash(userData.password);

    //Create a user
    const result = await User.create(userData);

    //Create a coach
    const newCoach = await Coach.create({ 
        user_id: result.user_id,
        team_id: userData.team_id,
        nif: userData.nif,
        gender: userData.gender,
        name: userData.name,
        surname1: userData.surname1,
        surname2: userData.surname2,
        birthdate: userData.birthdate,
        phone: userData.phone,
        title: userData.title,
        state: "in"
    });

    //Asign to a team
    await CoachTeam.create({ 
        coach_id: newCoach.coach_id,
        team_id: userData.team_id,
        role: userData.teamrole,
    });

    return result;
}

//FUNCTION TO EDIT A COACH
async function editCoach(id, data) {
    const coach = await Coach.findByPk(id);
    if (!coach) return null;
  
    await coach.update(data);
    return coach;
  }

//FUNCTION TO DELETE A COACH
async function fireCoach(id){
    const coach = await Coach.findByPk(id, {include: [User]});
    if(!coach) return null;

    //Put state out
    await Coach.update(
        {state: "out"},
        {where: {coach_id: id}}
    );

    //Delete coach from teams
    await CoachTeam.destroy({where: {coach_id: id}});

    //Put out_date in user
    await User.update(
            {out_date: new Date()},
            {where: {user_id: coach.user_id}}
        ); 

    return coach;
}

//FUNCTION TO UNASSIGN A COACH
async function unassignCoach(id){
    const coach = await Coach.findByPk(id, {include: [User]});
    if(!coach) return null;

    //Put state free
    await Coach.update(
        {state: "free"},
        {where: {coach_id: id}}
    );

    //Delete coach from teams
    await CoachTeam.destroy({where: {coach_id: id}});

    return coach;
}


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

//SHOW MATCHES BY COACH
async function getMatchByCoach(id){
    const coach = await Coach.findByPk(id,  {
        include: {
          model: Team,
          attributes: ['team_id'],
          include: {
            model: Match
          }
        }
      });

    if (!coach || !coach.teams || coach.teams.length === 0) {
        console.log('Coach has not teams assigned.');
        return null;
    }
      const teamIds = coach.teams.map(team => team.team_id);
                                  
    const matches = await Match.findAll({
                                    where: {
                                        team_id: {
                                          [Sequelize.Op.in]: teamIds
                                        }
                                      }
                                  });
                                
    return matches;
}

//SHOW FEEDBACK BY COACH
async function getFeedbackByCoach(id){
    const coach = await Coach.findByPk(id, { include: { model: Team,
                                                          include: { model: Match,
                                                            include: { model: Match_Feedback }}
                                                           }}
                                );
    const feedback = await Match_Feedback.findAll( {where: { coach_id: coach.coach_id }});
        
    return feedback;
}


export default{
    createCoach,
    editCoach,
    fireCoach,
    unassignCoach,
    getAll, 
    getCoachById,
    getCoachByGender,
    getCoachByName,
    getCoachBySurname,
    getCoachByYear,
    getCoachByAgeMinus,
    getCoachByTitle,
    getMatchByCoach,
    getFeedbackByCoach
} 