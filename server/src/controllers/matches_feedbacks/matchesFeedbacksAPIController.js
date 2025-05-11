import matchFeedbacksController from "./matchesFeedbacksController.js";

//SHOW ALL FEEDBACKS
async function getAll (req,res){
    try{
        const feedbacks = await matchFeedbacksController.getAll();
        res.json(feedbacks);
    }catch(error){
        console.error(error);
        res.status(500).json({error: "Server Error"});
    }
}

//SHOW FEEDBACKS BY MATCH 
async function getFeedbacksByMatch(req,res){
    const { match } = req.params;
    const feedbacks = await matchFeedbacksController.getFeedbackByMatch(match);
    res.json(feedbacks);
}

//SHOW FEEDBACKS BY COACH 
async function getFeedbacksByCoach(req,res){
    const { coach } = req.params;
    const feedbacks = await matchFeedbacksController.getFeedbackByMatch(coach);
    res.json(feedbacks);
}

//SHOW FEEDBACKS BY PLAYER
async function getFeedbacksByPlayerId(req,res){
    const { player } = req.params;
    const feedbacks = await matchFeedbacksController.getFeedbackByPlayerId(player);
    res.json(feedbacks);
}



export default{
    getAll,
    getFeedbacksByMatch,
    getFeedbacksByCoach,
    getFeedbacksByPlayerId
};