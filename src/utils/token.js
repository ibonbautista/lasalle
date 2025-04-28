import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;


function createToken(userData){
    const token = jwt.sign(userData, JWT_SECRET, { expiresIn: '24h' });
    return token;
}

function verifyToken(token){
    const decodedToken = jwt.verify(token,JWT_SECRET);
    return decodedToken;
}

export{
    createToken,
    verifyToken
}