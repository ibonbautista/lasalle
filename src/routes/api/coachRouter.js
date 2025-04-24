import {Router} from "express";
import coachAPIController from "../../controllers/coaches/coachesAPIController.js";


const router = Router();

// conseguir todos los doctores
 router.get("/", coachAPIController.getAll)
 router.get("/gender/:gender", coachAPIController.getCoachByGender)
 router.get("/name/:name", coachAPIController.getCoachByName)
 router.get("/surname/:surname", coachAPIController.getCoachBySurname)
 router.get("/year/:year", coachAPIController.getCoachByYear)
 router.get("/younger/:age", coachAPIController.getCoachByAgeMinus)
 router.get("/title/:title", coachAPIController.getCoachByTitle)
 router.get("/:id", coachAPIController.getCoachById) 


export default router;