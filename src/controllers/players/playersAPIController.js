import playerController from "./playersController.js";

//CREATE A PLAYER
async function createPlayer(req, res) {
    try {
        const result = await playerController.createPlayer(req.body);
        res.status(201).json(result); // 201 Created
    } catch (error) {
        console.error(error);
        if (error.statusCode) {
            res.status(error.statusCode).json({ error: error.message });
        } else {
            res.status(500).json({ error: "Internal server error" });
        }
    }
}

//FUNCTION TO EDIT A PLAYER
async function editPlayer(req, res) {
  const { id } = req.params;
  const data = req.body;

  if (!data || Object.keys(data).length === 0) {
    return res.status(400).json({ error: 'You must send at least one field' });
  }

  try {
    const playerUpdated = await playerController.editPlayer(id, data);

    if (!playerUpdated) {
      return res.status(404).json({ mensaje: 'Player not found' });
    }

    res.json({ message: 'Player updated', player: playerUpdated });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error updating player' });
  }
}

//FUNCTION TO DELETE A COACH
async function deletePlayer(req,res){
    const id = req.params.id;
    try {
        const deletedPlayer = await playerController.deletePlayer(id);
    
        if (!deletedPlayer) {
          return res.status(404).json({ mensaje: 'Not finded player' });
        }
    
        res.json({ message: 'Player deleted', player: deletedPlayer });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error during player deletion' });
      }
}



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

//SHOW MATCHES BY PLAYER
async function getMatchByPlayer(req, res) {
    const { id } = req.params;
  
    try {
      const matches = await playerController.getMatchByPlayer(id);
  
      if (!matches) {
        return res.status(404).json({ error: 'Player or team not found' });
      }
  
      res.json(matches);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Players matches not found' });
    }
  }

//SHOW FEEDBACK BY PLAYER
async function getFeedbackByPlayer(req,res){
    const { id } = req.params;
  
    try {
      const feedback = await playerController.getFeedbackByPlayer(id);
  
      if (!feedback) {
        return res.status(404).json({ error: 'Feedback not found' });
      }
  
      res.json(feedback);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Players feedback not found' });
    }
}

export default{
    createPlayer,
    editPlayer,
    deletePlayer,
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
    getPlayerByHand,
    getMatchByPlayer,
    getFeedbackByPlayer
};