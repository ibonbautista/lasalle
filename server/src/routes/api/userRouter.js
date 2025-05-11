import {Router} from "express";
import { isCoach,isAdmin,isMember,isPlayer } from "../../middleware/authMiddleware.js";
import userAPIController from "../../controllers/users/usersAPIController.js";


const router = Router();

 router.get("/", userAPIController.getAll)
 router.patch("/edit/:id", isAdmin, userAPIController.editUser)
 router.delete("/:id", isAdmin, userAPIController.deleteUser)

export default router;