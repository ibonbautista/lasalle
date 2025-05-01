import userController from "./usersController.js";

//FUNCTION TO EDIT A USER
async function editUser(req, res) {
    const { id } = req.params;
    const data = req.body;
  
    if (!data || Object.keys(data).length === 0) {
      return res.status(400).json({ error: 'You must send at least one field' });
    }
  
    try {
      const userUpdated = await userController.editUser(id, data);
  
      if (!userUpdated) {
        return res.status(404).json({ mensaje: 'User not found' });
      }
  
      res.json({ mensaje: 'User updated', user: userUpdated });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error updating user' });
    }
  }

  //FUNCTION TO DELETE A USER
  async function deleteUser(req,res){
      const id = req.params.id;
      try {
          const deletedUser = await userController.deleteUser(id);
      
          if (!deletedUser) {
            return res.status(404).json({ mensaje: 'Not finded user' });
          }
      
          res.json({ message: 'Used deleted', user: deletedUser });
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Error during user deletion' });
        }
  }

//SHOW ALL COACHES
async function getAll (req,res){
    try{
        const users = await userController.getAll();
        res.json(users);
    }catch(error){
        console.error(error);
        res.status(500).json({error: "Server Error"});
    }
}



export default{
  editUser,
  deleteUser,
  getAll
}