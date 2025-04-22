import { Router } from "express";
import playerRouter from "./playerRouter.js";

const router = Router();

router.get("/",(req,res)=>{
    res.send("welcome to the api world");
})

router.use("/players",playerRouter);

export default router;