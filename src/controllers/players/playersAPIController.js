import playerController from "./playersController.js";

async function getAll (req,res){
    try{
        const players = await playerController.getAll();
        res.json(players);
    }catch(error){
        console.error(error);
        res.status(500).json({error: "Server Error"});
    }
}

export default{
    getAll
};