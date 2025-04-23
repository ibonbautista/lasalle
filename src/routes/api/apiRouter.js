import { Router } from "express";
import playerRouter from "./playerRouter.js";
import teamRouter from "./teamRouter.js";

const router = Router();

router.get("/",(req,res)=>{
    res.send("welcome to the api world");
})

router.use("/players",playerRouter);
router.use("/teams",teamRouter);

export default router;