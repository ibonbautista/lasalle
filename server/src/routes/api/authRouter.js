import { Router } from "express";
import authApiController from "../../controllers/auth/authAPIController.js";
import { isLoggedInAPI } from "../../middleware/authMiddleware.js";


const router = Router();


router.post("/register",authApiController.register);
router.post("/login",authApiController.login);
router.post("/logout",authApiController.logout);
router.get("/userInfo", isLoggedInAPI, authApiController.getUserInfo);


export default router;