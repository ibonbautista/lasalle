import e from "express";
import memberController from "./membersController.js";

//FUNCTION TO DELETE A MEMBER
async function deleteMember(req,res){
    const id = req.params.id;
    try {
        const deletedMember = await memberController.deleteMember(id);
    
        if (!deletedMember) {
          return res.status(404).json({ mensaje: 'Member not found' });
        }
    
        res.json({ message: 'Member deleted', member: deletedMember });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error during member deletion' });
      }
}

//FUNCTION TO EDIT A MEMBER
async function editMember(req, res) {
  const { id } = req.params;
  const data = req.body;

  if (!data || Object.keys(data).length === 0) {
    return res.status(400).json({ error: 'You must send at least one field' });
  }

  try {
    const memberUpdated = await memberController.editMember(id, data);

    if (!memberUpdated) {
      return res.status(404).json({ mensaje: 'Member not found' });
    }

    res.json({ mensaje: 'Member updated', entrenador: memberUpdated });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error updating member' });
  }
}

//SHOW ALL MEMBERS
async function getAll (req,res){
    try{
        const members = await memberController.getAll();
        res.json(members);
    }catch(error){
        console.error(error);
        res.status(500).json({error: "Server Error"});
    }
}


export default{
    deleteMember,
    editMember,
    getAll
} 