import {Router} from "express";
import { isCoach,isAdmin,isMember,isPlayer } from "../../middleware/authMiddleware.js";
import teamAPIController from "../../controllers/teams/teamsAPIController.js";


const router = Router();

 router.get("/", teamAPIController.getAll)
 router.get("/category/:category", teamAPIController.getTeamByCategory)
 router.get("/season/:season", teamAPIController.getTeamBySeason)
 router.get("/gender/:gender", teamAPIController.getTeamByGender)
 router.get("/:id", isAdmin, teamAPIController.getTeamById)


export default router;