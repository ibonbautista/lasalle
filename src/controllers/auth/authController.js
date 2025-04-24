 import User from "../../models/users.js";
import Member from "../../models/members.js";
/*import Patient from "../../models/patients.js"; */
import { hash, compare } from "../../utils/bcrypt.js";
import {
    UserMailProvided,
    UserEmailAlreadyExists,
    UserNameProvided,
    UserRoleIncorrect,
    UserPasswordNotProvided,
    UserInvalidCredentials
} from "../../utils/errors.js";

async function login(email, password) {
    if (!email) throw new UserMailProvided();
    if (!password) throw new UserPasswordNotProvided();

    const user = await User.findOne({ where: { email } });

    if (!user) throw new UserInvalidCredentials();

    const isSamePassword = await compare(password, user.password);

    if (!isSamePassword) throw new UserInvalidCredentials();
    
    const role = user.role;
    if (!role) throw new UserRoleIncorrect();

    return user;
}

async function register(userData) {
    if (!userData.name) throw new UserNameProvided();
    if (!userData.email) throw new UserMailProvided();
    if (!userData.password) throw new UserPasswordNotProvided();
    
    userData.role = "member";
    userData.in_date = new Date();
    
    const oldUser = await User.findOne({ where: { email: userData.email } });
    if (oldUser) {
        throw new UserEmailAlreadyExists();
    }

    userData.password = await hash(userData.password);

    const result = await User.create(userData);

    await Member.create({ 
        user_id: result.user_id,
        nif: userData.nif,
        name: userData.name,
        surname: userData.surname,
        phone: userData.phone,
        family: userData.family
    });

    return result;
} 


function logout(req, res) {
    req.session.user = undefined;
    res.redirect("/");
}

export default {
    register,
    login,
    logout
};
