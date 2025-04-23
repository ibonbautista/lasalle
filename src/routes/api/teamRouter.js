import {Router} from "express";
import teamAPIController from "../../controllers/teams/teamsAPIController.js";


const router = Router();

// conseguir todos los doctores
 router.get("/", teamAPIController.getAll)
 router.get("/category/:category", teamAPIController.getTeamByCategory)
 router.get("/season/:season", teamAPIController.getTeamBySeason)
 router.get("/gender/:gender", teamAPIController.getTeamByGender)
 router.get("/:id", teamAPIController.getTeamById)


export default router;