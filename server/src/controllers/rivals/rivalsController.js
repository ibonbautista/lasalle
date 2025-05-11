import Rival from "../../models/rivals.js";

//FUNCTION TO EDIT A USER
async function editRival(id, data) {
    const rival = await Rival.findByPk(id);
    if (!rival) return null;
  
    await rival.update(data);
    return rival;
  }

  //FUNCTION TO DELETE A USER
  async function deleteRival(id){
      const rival = await Rival.findByPk(id);
      if(!rival) return null;
      
      const rivalId = rival.rival_id;
      const role = rival.role;
  
      if(role === "coach"){
          const rivalRole = await coachController.fireCoach(rivalId);
          return rivalRole;
      }
      if(role === "player"){
          const rivalRole = await playerController.deletePlayer(rivalId);
          return rivalRole;
      }
      if(role === "member"){
          const rivalRole = await memberController.deleteMember(rivalId);
          return rivalRole;
      }
  }

//SHOW ALL USERS
async function getAll(){
    const rivals = await Rival.findAll();
    return rivals;
}

export default{
    getAll,
    editRival,
    deleteRival
} 