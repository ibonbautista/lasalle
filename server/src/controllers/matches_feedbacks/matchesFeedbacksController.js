import Match_Feedback from "../../models/matches_feedbacks.js";
import Match from "../../models/matches.js";
import Coach from "../../models/coaches.js";
import Player from "../../models/players.js";
import Rival from "../../models/rivals.js";


//SHOW ALL FEEDBACKS
async function getAll(){
    const feedbacks = await Match_Feedback.findAll({
        include: [
          {
            model: Match,
            attributes: ["date"],
            include: [
              {
                model: Rival,
                attributes: ["name"],
              },
            ],
          },
          {
            model: Coach,
            attributes: ["name","surname1"],
          },
          {
            model: Player,
            attributes: ["name","surname1"],
          },
        ],
      });
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
async function getFeedbackByPlayerId(player){
    const feedbacks = await Match_Feedback.findAll({
      where: { player_id: player },
      include: [
          {
              model: Match,
              attributes: ["match_id", "rival_id", "date", "home_score","away_score","home_or_away"],
              include: [
                {
                    model: Rival,
                    attributes: ["name"],
                },
            ],
          },
          {
              model: Coach,
              attributes: ["coach_id", "name", "surname1"],
          },
      ],
  });
    return feedbacks;
}

export default{
    getAll,
    getFeedbackByMatch,
    getFeedbackByCoach,
    getFeedbackByPlayerId
}