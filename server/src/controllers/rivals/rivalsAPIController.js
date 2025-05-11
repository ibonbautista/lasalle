import rivalController from "./rivalsController.js";

//FUNCTION TO EDIT A USER
async function editRival(req, res) {
    const { id } = req.params;
    const data = req.body;
  
    if (!data || Object.keys(data).length === 0) {
      return res.status(400).json({ error: 'You must send at least one field' });
    }
  
    try {
      const rivalUpdated = await rivalController.editRival(id, data);
  
      if (!rivalUpdated) {
        return res.status(404).json({ mensaje: 'Rival not found' });
      }
  
      res.json({ mensaje: 'Rival updated', rival: rivalUpdated });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error updating rival' });
    }
  }

  //FUNCTION TO DELETE A USER
  async function deleteRival(req,res){
      const id = req.params.id;
      try {
          const deletedRival = await rivalController.deleteRival(id);
      
          if (!deletedRival) {
            return res.status(404).json({ mensaje: 'Not finded rival' });
          }
      
          res.json({ message: 'Used deleted', rival: deletedRival });
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Error during rival deletion' });
        }
  }

//SHOW ALL COACHES
async function getAll (req,res){
    try{
        const rivals = await rivalController.getAll();
        res.json(rivals);
    }catch(error){
        console.error(error);
        res.status(500).json({error: "Server Error"});
    }
}



export default{
  editRival,
  deleteRival,
  getAll
}