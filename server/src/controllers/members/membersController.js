import Member from "../../models/members.js";
import User from "../../models/users.js";


//FUNCTION TO DELETE A MEMBER
async function deleteMember(id){
    const member = await Member.findByPk(id, {include: [User]});
    if(!member) return null;

    //Delete member
    await Member.destroy({where: {member_id: id}});

    //Put out_date in user
    await User.update(
            {out_date: new Date()},
            {where: {user_id: member.user_id}}
        ); 

    return member;
}

//FUNCTION TO EDIT A MEMBER
async function editMember(id, data) {
  const member = await Member.findByPk(id);
  if (!member) return null;

  await member.update(data);
  return member;
}

//SHOW ALL MEMBERS
async function getAll(){
    const members = await Member.findAll();
    return members;
}


export default{
    deleteMember,
    editMember,
    getAll
} 