import {Router} from "express";
import playerAPIController from "../../controllers/players/playersAPIController.js";


const router = Router();

// conseguir todos los doctores
router.get("/", playerAPIController.getAll)
router.get("/team/:team", playerAPIController.getPlayerByTeam)
router.get("/gender/:gender", playerAPIController.getPlayerByGender)
router.get("/name/:name", playerAPIController.getPlayerByName)
router.get("/surname/:surname", playerAPIController.getPlayerBySurname)
router.get("/year/:year", playerAPIController.getPlayerByYear)
router.get("/town/:town", playerAPIController.getPlayerByTown)
router.get("/position/:position", playerAPIController.getPlayerByPosition)
router.get("/heightplus/:height", playerAPIController.getPlayerByHeightPlus)
router.get("/heightminus/:height", playerAPIController.getPlayerByHeightMinus)
router.get("/hand/:hand", playerAPIController.getPlayerByHand)
router.get("/:id", playerAPIController.getPlayerById)


export default router;