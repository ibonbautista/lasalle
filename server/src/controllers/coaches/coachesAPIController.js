import coachController from "./coachesController.js";

//CREATE A COACH
async function createCoach(req, res) {
    try {
        const result = await coachController.createCoach(req.body);
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

//FUNCTION TO EDIT A COACH
async function editCoach(req, res) {
  const { id } = req.params;
  const data = req.body;

  if (!data || Object.keys(data).length === 0) {
    return res.status(400).json({ error: 'You must send at least one field' });
  }

  try {
    const coachUpdated = await coachController.editCoach(id, data);

    if (!coachUpdated) {
      return res.status(404).json({ mensaje: 'Coach not found' });
    }

    res.json({ message: 'Coach updated', coach: coachUpdated });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error updating coach' });
  }
}

//FUNCTION TO DELETE A COACH
async function fireCoach(req,res){
    const id = req.params.id;
    try {
        const firedCoach = await coachController.fireCoach(id);
    
        if (!firedCoach) {
          return res.status(404).json({ mensaje: 'Not finded coach' });
        }
    
        res.json({ message: 'Coach fired', coach: firedCoach });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error during coach deletion' });
      }
}

//FUNCTION TO UNASSIGN A COACH
async function unassignCoach(req,res){
    const id = req.params.id;
    try {
        const relaxedCoach = await coachController.unassignCoach(id);
    
        if (!relaxedCoach) {
          return res.status(404).json({ mensaje: 'Not finded coach' });
        }
    
        res.json({ message: 'Coach relaxed', coach: relaxedCoach });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error during coach relax' });
      }
}


//SHOW ALL COACHES
async function getAll (req,res){
    try{
        const coaches = await coachController.getAll();
        res.json(coaches);
    }catch(error){
        console.error(error);
        res.status(500).json({error: "Server Error"});
    }
}

//SHOW ALL COACHES BY TEAM
async function getCoachByTeamId (req,res){
  try{
    const id = req.params.team;
      const coaches = await coachController.getCoachByTeamId(id);
      res.json(coaches);
  }catch(error){
      console.error(error);
      res.status(500).json({error: "Server Error"});
  }
}

//SHOW COACH BY ID
async function getCoachById (req,res){
    try{
        const id = req.params.id;
        const coaches = await coachController.getCoachById(id);
        res.json(coaches);
    }catch(error){
        console.error(error);
        res.status(500).json({error: "Server Error"});
    }
}

//SHOW TEAMS BY GENDER
async function getCoachByGender(req,res){
    const { gender } = req.params;
    const coaches = await coachController.getCoachByGender(gender);
    res.json(coaches);
};

//SHOW COACHES BY NAME
async function getCoachByName(req,res){
    const { name } = req.params;
    const coaches = await coachController.getCoachByName(name);
    res.json(coaches);
};

//SHOW COACHES BY FIRST SURNAME
async function getCoachBySurname(req,res){
    const { surname } = req.params;
    const coaches = await coachController.getCoachBySurname(surname);
    res.json(coaches);
};

//SHOW COACHES BY YEAR
async function getCoachByYear(req,res){
    const { year } = req.params;
    const coaches = await coachController.getCoachByYear(year);
    res.json(coaches);
};

//SHOW COACHES BY AGE MINUS
async function getCoachByAgeMinus(req,res){
    const { age } = req.params;
    const coaches = await coachController.getCoachByAgeMinus(age);
    res.json(coaches);
};

//SHOW COACHES BY TITLE
async function getCoachByTitle (req,res){
    try{
        const { title } = req.params;
        const coaches = await coachController.getCoachByTitle(title);
        res.json(coaches);
    }catch(error){
        console.error(error);
        res.status(500).json({error: "Server Error"});
    }
}

//SHOW MATCHES BY COACH
async function getMatchByCoach(req, res) {
    const { id } = req.params;
  
    try {
      const matches = await coachController.getMatchByCoach(id);
  
      if (!matches) {
        return res.status(404).json({ error: 'Coach or team not found' });
      }
  
      res.json(matches);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Coaches matches not found' });
    }
  }

//SHOW FEEDBACK BY PLAYER
async function getFeedbackByCoach(req,res){
    const { id } = req.params;
  
    try {
      const feedback = await coachController.getFeedbackByCoach(id);
  
      if (!feedback) {
        return res.status(404).json({ error: 'Feedback not found' });
      }
  
      res.json(feedback);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Coaches feedback not found' });
    }
}

export default{
    createCoach,
    editCoach,
    fireCoach,
    unassignCoach,
    getAll,
    getCoachById ,
    getCoachByTeamId,
    getCoachByGender,
    getCoachByName,
    getCoachBySurname,
    getCoachByYear,
    getCoachByAgeMinus,
    getCoachByTitle,
    getMatchByCoach,
    getFeedbackByCoach
}