import {Router} from "express";
import playerAPIController from "../../controllers/players/playersAPIController.js";


const router = Router();

// conseguir todos los doctores
router.get("/", playerAPIController.getAll)


export default router;