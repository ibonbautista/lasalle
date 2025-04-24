import { Router } from "express";
import { isLoggedInAPI } from "../../middleware/authMiddleware.js";
import playerRouter from "./playerRouter.js";
import teamRouter from "./teamRouter.js";
import coachRouter from "./coachRouter.js";
import matchRouter from "./matchRouter.js";
import authRouter from "./authRouter.js";

const router = Router();

router.get("/",(req,res)=>{
    res.send("welcome to the api world");
})

router.use("/players", isLoggedInAPI,playerRouter);
router.use("/teams", isLoggedInAPI,teamRouter);
router.use("/coaches", isLoggedInAPI,coachRouter);
router.use("/matches", isLoggedInAPI,matchRouter);
router.use("/",authRouter);

export default router;