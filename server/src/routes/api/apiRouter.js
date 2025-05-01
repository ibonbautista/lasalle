import { Router } from "express";
import { isLoggedInAPI } from "../../middleware/authMiddleware.js";
import playerRouter from "./playerRouter.js";
import matchFeedbacksRouter from "./matchFeedbackRouter.js";
import teamRouter from "./teamRouter.js";
import coachRouter from "./coachRouter.js";
import matchRouter from "./matchRouter.js";
import authRouter from "./authRouter.js";
import memberRouter from "./memberRouter.js";
import userRouter from "./userRouter.js";

const router = Router();

router.get("/",(req,res)=>{
    res.send("welcome to CLUB DEPORTIVO LA SALLE");
})

router.use("/players",playerRouter);
router.use("/teams", teamRouter);
router.use("/coaches",isLoggedInAPI,coachRouter);
router.use("/matches", matchRouter);
router.use("/members", isLoggedInAPI,memberRouter);
router.use("/users", isLoggedInAPI,userRouter);
router.use("/feedbacks", isLoggedInAPI,matchFeedbacksRouter);
router.use("/",authRouter);

export default router;