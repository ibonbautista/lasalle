import teamController from "./teamsController.js";

//SHOW ALL TEAMS
async function getAll (req,res){
    try{
        const teams = await teamController.getAll();
        res.json(teams);
    }catch(error){
        console.error(error);
        res.status(500).json({error: "Server Error"});
    }
}

//SHOW TEAMS BY ID
async function getTeamById (req,res){
    try{
        const id = req.params.id;
        const teams = await teamController.getTeamById(id);
        res.json(teams);
    }catch(error){
        console.error(error);
        res.status(500).json({error: "Server Error"});
    }
}

//SHOW TEAMS BY CTEGORY
async function getTeamByCategory (req,res){
    try{
        const { category } = req.params;
        const teams = await teamController.getTeamByCategory(category);
        res.json(teams);
    }catch(error){
        console.error(error);
        res.status(500).json({error: "Server Error"});
    }
}

//SHOW TEAMS BY SEASON
async function getTeamBySeason(req,res){
    const { season } = req.params;
    const teams = await teamController.getTeamBySeason(season);
    res.json(teams);
}

//SHOW TEAMS BY GENDER
async function getTeamByGender(req,res){
    const { gender } = req.params;
    const teams = await teamController.getTeamByGender(gender);
    res.json(teams);
};


export default{
    getAll,
    getTeamById,
    getTeamByCategory,
    getTeamBySeason,
    getTeamByGender
};