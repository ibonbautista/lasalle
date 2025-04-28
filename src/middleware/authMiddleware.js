import { verifyToken } from "../utils/token.js";


// Middleware para APIs (token JWT)
function isLoggedInAPI(req, res, next) {
    const authorization = req.headers.authorization;
    
    if (!authorization) {
        return res.status(401).json({ error: "You shall not pass" });
    }
    
    const parts = authorization.split(" ");
    const token = parts.length === 2 ? parts[1] : null;
    
    if (!token) {
        return res.status(401).json({ error: "Invalid authorization header format" });
    }
    
    const result = verifyToken(token);
    if (result) {
        req.user = {
            user_id: result.user_id,
            role: result.role
        };
        next();
    } else {
        return res.status(401).json({ error: "Invalid or expired token" });
    }
}

// Middelware for admin
function isAdmin(req, res, next) {
    const user = req.user;
    if (!user) {
        return res.status(401).json({ error: "You are not logged in" });
    }
    if (user.role === "admin") {
        return next();
    }
    return res.status(401).json({ error: "You are not an admin" });
}

// Middleware específico para role = player
function isPlayer(req, res, next) {
    const user = req.user;
    if (!user) {
        return res.status(401).json({ error: "You are not logged in" });
    }
    if (user.role === "player") {
        return next();
    }
    return res.status(401).json({ error: "You are not an player" });
}

// Middleware específico para role = coach
function isCoach(req, res, next) {
    const user = req.user;
    if (!user) {
        return res.status(401).json({ error: "You are not logged in" });
    }
    if (user.role === "coach") {
        return next();
    }
    return res.status(401).json({ error: "You are not an coach" });
}

// Middleware específico para role = member
function isMember(req, res, next) {
    const user = req.user;
    if (!user) {
        return res.status(401).json({ error: "You are not logged in" });
    }
    if (user.role === "member") {
        return next();
    }
    return res.status(401).json({ error: "You are not a member" });
}

export {
    isLoggedInAPI,
    isAdmin,
    isPlayer,
    isCoach,
    isMember
};
