import { createToken } from "../../utils/token.js";
import authController from "./authController.js";

async function login(req, res) {
    try {
        const { email, password } = req.body;
        const result = await authController.login(email, password);
        const data = {
            user_id: result.user_id,
            role: result.role
        };
        const token = createToken(data);
        res.json({ token: token });
        
    } catch (error) {
        console.error(error);
        if (error.statusCode) {
            res.status(error.statusCode).json({ error: error.message });
        } else {
            res.status(500).json({ error: "Internal server error" });
        }
    }
}

async function register(req, res) {
    try {
        const result = await authController.register(req.body);
        res.status(201).json(result); // 201 Created
    } catch (error) {
        console.error(error);
        if (error.statusCode) {
            res.status(error.statusCode).json({ error: error.message });
        } else {
            res.status(500).json({ error: "Internal server error" });
        }
    }
}


export default {
    register,
    login
};
