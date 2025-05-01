import User from "../../models/users.js";
import Member from "../../models/members.js";
import { hash, compare } from "../../utils/bcrypt.js";

//FUNCTION FOR LOG IN A USER
async function login(email, password) {
    const user = await User.findOne({ where: { email } });
    const isSamePassword = await compare(password, user.password);
    
    //If out date has date, we delete user to create again
    if(user.out_date != null){
        await User.destroy({where: {user_id: user.user_id}});
        return user;
    }else{
        const role = user.role;
        return user;
    }
}

//FUNCTION FOR REGISTER A NEW MEMBER
async function register(userData) {
    userData.role = "member";
    userData.in_date = new Date();
    
    const oldUser = await User.findOne({ where: { email: userData.email } });
    if (oldUser) {
        return oldUser;
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


/* function logout(req, res) {
    req.session.user = undefined;
    res.redirect("/");
} */

export default {
    register,
    login,
    /* logout */
};
