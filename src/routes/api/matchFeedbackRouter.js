import {Router} from "express";
import { isCoach,isAdmin,isMember,isPlayer } from "../../middleware/authMiddleware.js";
import matchFeedbacksAPIController from "../../controllers/matches_feedbacks/matchesFeedbacksAPIController.js";


const router = Router();

 router.get("/", isAdmin, matchFeedbacksAPIController.getAll)
 router.get("/match/:match", isAdmin, matchFeedbacksAPIController.getFeedbacksByMatch)
 router.get("/coach/:coach", isAdmin, matchFeedbacksAPIController.getFeedbacksByCoach)
 router.get("/player/:player", isAdmin, matchFeedbacksAPIController.getFeedbacksByPlayer)

export default router;