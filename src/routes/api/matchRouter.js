import {Router} from "express";
import matchAPIController from "../../controllers/matches/matchesAPIController.js";


const router = Router();

// conseguir todos los doctores
 router.get("/", matchAPIController.getAll)
 router.get("/season/:season", matchAPIController.getMatchBySeason)
 router.get("/team/:team", matchAPIController.getMatchByTeam)
 router.get("/rival/:rival", matchAPIController.getMatchByRival)
 /* 
 router.get("/gender/:gender", coachAPIController.getCoachByGender)
 router.get("/name/:name", coachAPIController.getCoachByName)
 router.get("/surname/:surname", coachAPIController.getCoachBySurname)
 router.get("/year/:year", coachAPIController.getCoachByYear)
 router.get("/younger/:age", coachAPIController.getCoachByAgeMinus)
 router.get("/title/:title", coachAPIController.getCoachByTitle)*/
 router.get("/:id", matchAPIController.getMatchById)  


export default router;