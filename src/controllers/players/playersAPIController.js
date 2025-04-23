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

//SHOW PLAYERS BY TEAM
async function getPlayerByTeam(req,res){
    const { team } = req.params;
    const players = await playerController.getPlayerByTeam(team);
    res.json(players);
}

//SHOW PLAYERS BY GENDER
async function getPlayerByGender(req,res){
    const { gender } = req.params;
    const players = await playerController.getPlayerByGender(gender);
    res.json(players);
};

//SHOW PLAYERS BY NAME
async function getPlayerByName(req,res){
    const { name } = req.params;
    const players = await playerController.getPlayerByName(name);
    res.json(players);
};

//SHOW PLAYERS BY FIRST SURNAME
async function getPlayerBySurname(req,res){
    const { surname } = req.params;
    const players = await playerController.getPlayerBySurname(surname);
    res.json(players);
};

//SHOW PLAYERS BY YEAR
async function getPlayerByYear(req,res){
    const { year } = req.params;
    const players = await playerController.getPlayerByYear(year);
    res.json(players);
};

//SHOW PLAYERS BY TOWN
async function getPlayerByTown(req,res){
    const { town } = req.params;
    const players = await playerController.getPlayerByTown(town);
    res.json(players);
};

//SHOW PLAYERS BY POSITION
async function getPlayerByPosition(req,res){
    const { position } = req.params;
    const players = await playerController.getPlayerByPosition(position);
    res.json(players);
};

//SHOW PLAYERS BY HEIGHT PLUS
async function getPlayerByHeightPlus(req,res){
    const { height } = req.params;
    const players = await playerController.getPlayerByHeightPlus(height);
    res.json(players);
};

//SHOW PLAYERS BY HEIGHT MINUS
async function getPlayerByHeightMinus(req,res){
    const { height } = req.params;
    const players = await playerController.getPlayerByHeightMinus(height);
    res.json(players);
};

//SHOW PLAYERS BY HAND
async function getPlayerByHand(req,res){
    const { hand } = req.params;
    const players = await playerController.getPlayerByHand(hand);
    res.json(players);
};

export default{
    getAll,
    getPlayerById,
    getPlayerByTeam,
    getPlayerByGender,
    getPlayerByName,
    getPlayerBySurname,
    getPlayerByYear,
    getPlayerByTown,
    getPlayerByPosition,
    getPlayerByHeightPlus,
    getPlayerByHeightMinus,
    getPlayerByHand
};