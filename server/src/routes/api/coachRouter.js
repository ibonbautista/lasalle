import {Router} from "express";
import { isCoach,isAdmin,isMember,isPlayer } from "../../middleware/authMiddleware.js";
import coachAPIController from "../../controllers/coaches/coachesAPIController.js";


const router = Router();

 router.get("/", coachAPIController.getAll)
 router.get("/team/:team", coachAPIController.getCoachByTeamId)
 router.get("/gender/:gender", coachAPIController.getCoachByGender)
 router.get("/name/:name", isAdmin, coachAPIController.getCoachByName)
 router.get("/surname/:surname", isAdmin, coachAPIController.getCoachBySurname)
 router.get("/year/:year", coachAPIController.getCoachByYear)
 router.get("/younger/:age", coachAPIController.getCoachByAgeMinus)
 router.get("/title/:title", coachAPIController.getCoachByTitle)
 router.get("/:id", isCoach, coachAPIController.getCoachById) 
 router.delete("/fire/:id", isAdmin, coachAPIController.fireCoach)
 router.delete("/:id", isAdmin, coachAPIController.unassignCoach)
 router.post("/register", isAdmin, coachAPIController.createCoach)
 router.get("/:id/matches", isCoach, coachAPIController.getMatchByCoach)
 router.get("/:id/feedback", isCoach, coachAPIController.getFeedbackByCoach)


export default router;