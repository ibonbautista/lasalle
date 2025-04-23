import playerController from "./playersController.js";

//SHOW ALL PLAYERS
async function getAll (req,res){
    try{
        const players = await playerController.getAll();
        res.json(players);
    }catch(error){
        console.error(error);
        res.status(500).json({error: "Server Error"});
    }
}

//SHOW PLAYERS BY ID
async function getPlayerById (req,res){
    try{
        const id = req.params.id;
        const players = await playerController.getPlayerById(id);
        res.json(players);
    }catch(error){
        console.error(error);
        res.status(500).json({error: "Server Error"});
    }
}

//SHOW PLAYERS BY TEAM ID
async function getPlayerByTeamId(req,res){
    const id = req.params.id;
    const players = await Player.getPlayerByTeamId(id);
    res.json(players);
}

export default{
    getAll,
    getPlayerById,
    getPlayerByTeamId
};