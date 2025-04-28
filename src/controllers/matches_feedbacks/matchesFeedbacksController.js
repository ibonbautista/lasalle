import Match_Feedback from "../../models/matches_feedbacks.js";


//SHOW ALL FEEDBACKS
async function getAll(){
    const feedbacks = await Match_Feedback.findAll();
    return feedbacks;
}

//SHOW FEEDBACKS BY MATCH
async function getFeedbackByMatch(id){
    const feedbacks = await Match_Feedback.findAll({where: {match_id: id}});
    return feedbacks;
}

//SHOW FEEDBACKS BY COACH
async function getFeedbackByCoach(id){
    const feedbacks = await Match_Feedback.findAll({where: {coach_id: id}});
    return feedbacks;
}

//SHOW FEEDBACKS BY PLAYER
async function getFeedbackByPlayer(id){
    const feedbacks = await Match_Feedback.findAll({where: {player_id: id}});
    return feedbacks;
}

export default{
    getAll,
    getFeedbackByMatch,
    getFeedbackByCoach,
    getFeedbackByPlayer
}