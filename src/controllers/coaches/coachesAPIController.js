import coachController from "./coachesController.js";

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

export default{
    getAll,
    getCoachById ,
    getCoachByGender,
    getCoachByName,
    getCoachBySurname,
    getCoachByYear,
    getCoachByAgeMinus,
    getCoachByTitle
}