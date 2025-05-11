import {Router} from "express";
import memberAPIController from "../../controllers/members/membersAPIController.js";
import { isCoach,isAdmin,isMember,isPlayer } from "../../middleware/authMiddleware.js";


const router = Router();

 router.delete("/delete/:id", memberAPIController.deleteMember)
 router.patch("/:id", isMember, memberAPIController.editMember)
 router.get("/", memberAPIController.getAll)


export default router;