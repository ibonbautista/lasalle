

const DeleteMember = ({ id, onDelete }) => {
  // Lógica para manejar la eliminación
  const handleDelete = () => {
    // Mostramos un cuadro de confirmación
    const confirmDelete = window.confirm('Are you sure you want to delete?');
    
    if (confirmDelete) {
      // Si el usuario confirma, llamamos a la función `onEliminar` que pasa el id
      onDelete(id);
      // Mostramos un mensaje de éxito
      alert('Member deleted successfully');
    }
  };

  return (
    <button onClick={handleDelete}>Delete</button>
  );
};

export default DeleteMember;
