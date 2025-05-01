import {Router} from "express";
import memberAPIController from "../../controllers/members/membersAPIController.js";
import { isCoach,isAdmin,isMember,isPlayer } from "../../middleware/authMiddleware.js";


const router = Router();

 router.delete("/:id", isAdmin, memberAPIController.deleteMember)
 router.patch("/:id", isMember, memberAPIController.editMember)
 router.get("/",isAdmin, memberAPIController.getAll)


export default router;