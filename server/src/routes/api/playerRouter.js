import {Router} from "express";
import { isCoach,isAdmin,isMember,isPlayer } from "../../middleware/authMiddleware.js";
import playerAPIController from "../../controllers/players/playersAPIController.js";


const router = Router();

router.get("/", playerAPIController.getAll)
router.get("/team/:team", playerAPIController.getPlayerByTeam)
router.get("/gender/:gender", playerAPIController.getPlayerByGender)
router.get("/name/:name", isAdmin, playerAPIController.getPlayerByName)
router.get("/surname/:surname", isAdmin, playerAPIController.getPlayerBySurname)
router.get("/year/:year", playerAPIController.getPlayerByYear)
router.get("/town/:town", isAdmin, playerAPIController.getPlayerByTown)
router.get("/position/:position", playerAPIController.getPlayerByPosition)
router.get("/heightplus/:height", playerAPIController.getPlayerByHeightPlus)
router.get("/heightminus/:height", playerAPIController.getPlayerByHeightMinus)
router.get("/hand/:hand", playerAPIController.getPlayerByHand)
router.get("/:id", playerAPIController.getPlayerById)
router.delete("/delete/:id", isAdmin, playerAPIController.deletePlayer)
router.post("/register", isAdmin, playerAPIController.createPlayer)
router.patch("/edit/:id", playerAPIController.editPlayer)
router.get("/:id/matches", isPlayer, playerAPIController.getMatchByPlayer)
router.get("/:id/feedback", isPlayer, playerAPIController.getFeedbackByPlayer)


export default router;