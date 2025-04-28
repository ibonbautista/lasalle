import User from "../../models/users.js";
import coachController from "../coaches/coachesController.js";
import playerController from "../players/playersController.js";
import memberController from "../members/membersController.js";

//FUNCTION TO EDIT A USER
async function editUser(id, data) {
    const user = await User.findByPk(id);
    if (!user) return null;
  
    await user.update(data);
    return user;
  }

  //FUNCTION TO DELETE A USER
  async function deleteUser(id){
      const user = await User.findByPk(id);
      if(!user) return null;
      
      const userId = user.user_id;
      const role = user.role;
  
      if(role === "coach"){
          const userRole = await coachController.fireCoach(userId);
          return userRole;
      }
      if(role === "player"){
          const userRole = await playerController.deletePlayer(userId);
          return userRole;
      }
      if(role === "member"){
          const userRole = await memberController.deleteMember(userId);
          return userRole;
      }
  }

//SHOW ALL USERS
async function getAll(){
    const users = await User.findAll();
    return users;
}

export default{
    getAll,
    editUser,
    deleteUser
} 