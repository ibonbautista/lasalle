import {Router} from "express";
import { isCoach,isAdmin,isMember,isPlayer } from "../../middleware/authMiddleware.js";
import rivalAPIController from "../../controllers/rivals/rivalsAPIController.js";


const router = Router();

 router.get("/", rivalAPIController.getAll)
 router.patch("/:id", isAdmin, rivalAPIController.editRival)
 router.delete("/:id", isAdmin, rivalAPIController.deleteRival)

export default router;