import matchController from "./matchesController.js";

//SHOW ALL MATCHES
async function getAll (req,res){
    try{
        const matches = await matchController.getAll();
        res.json(matches);
    }catch(error){
        console.error(error);
        res.status(500).json({error: "Server Error"});
    }
}

//SHOW MATCHES BY ID
async function getMatchById (req,res){
    try{
        const id = req.params.id;
        const matches = await matchController.getMatchById(id);
        res.json(matches);
    }catch(error){
        console.error(error);
        res.status(500).json({error: "Server Error"});
    }
}

//SHOW MATCHES BY SEASON
async function getMatchBySeason(req,res){
    const { season } = req.params;
    const matches = await matchController.getMatchBySeason(season);
    res.json(matches);
}

//SHOW MATCHES BY TEAM
async function getMatchByTeam(req,res){
    const { team } = req.params;
    const matches = await matchController.getMatchByTeam(team);
    res.json(matches);
}

//SHOW MATCHES BY RIVAL
async function getMatchByRival(req,res){
    const { rival } = req.params;
    const matches = await matchController.getMatchByRival(rival);
    res.json(matches);
}

export default{
    getAll,
    getMatchById,
    getMatchBySeason,
    getMatchByTeam,
    getMatchByRival
};