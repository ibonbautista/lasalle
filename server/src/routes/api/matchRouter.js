import {Router} from "express";
import { isCoach,isAdmin,isMember,isPlayer } from "../../middleware/authMiddleware.js";
import matchAPIController from "../../controllers/matches/matchesAPIController.js";


const router = Router();

 router.get("/", isAdmin, matchAPIController.getAll)
 router.get("/season/:season", isAdmin,  matchAPIController.getMatchBySeason)
 router.get("/team/:team", isAdmin,  matchAPIController.getMatchByTeam)
 router.get("/rival/:rival", isAdmin,  matchAPIController.getMatchByRival)
 router.get("/:id", isAdmin,  matchAPIController.getMatchById)  


export default router;