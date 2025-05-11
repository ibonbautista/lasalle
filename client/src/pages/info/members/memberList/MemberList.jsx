import { useState,useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";

import { deleteMember,getAllMembers} from "../../../../utils/api/members.js";
import MemberCard from "../memberCard/MemberCard.jsx";
import "./MemberList.css";

function MemberList({}) {
    //ESTADOS
    const defaultMembers = useLoaderData();
    const [members, setMembers] = useState(defaultMembers || []); //array vacio
    const [currentPage, setCurrentPage] = useState(1);
    const [membersPerPage] = useState(15); // 15 jugadores por página

    //EFECTOS

    //FUNCIONES
// Función para eliminar un miembro
const handleDelete = async (memberId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this member?");
    
    if (!confirmDelete) return;
  
    try {
      // Aquí puedes hacer la petición DELETE a tu API
      await deleteMember(memberId);
  
      // Actualizar el estado
      setMembers(members.filter(member => member.member_id !== memberId));
  
      alert("Member deleted successfully.");
    } catch (error) {
      console.error("Error atempting to delete member:", error);
      alert("There was an error deleting the member.");
    }
  };
     // Obtener los jugadores que deben mostrarse en la página actual
     const totalPages = Math.ceil(members.length / membersPerPage);
  const indexOfLastMember = currentPage * membersPerPage;
  const indexOfFirstMember = indexOfLastMember - membersPerPage;
  const currentMembers = members.slice(indexOfFirstMember, indexOfLastMember);

    // Cambiar la página
    const handlePageChange = (page) => {
        setCurrentPage(page);
      };
    
    return (
        <section className="member-list">
            <div className="table-container">
            <table className="member-table" border="1" style={{ width: "100%", borderCollapse: "collapse", marginTop: "1rem" }}>
                <thead>
                    <tr>
                        <th className="member_id">ID</th>
                        <th className="user_id">User ID</th>
                        <th className="member-name">Name</th>
                        <th className="member-surname">Surname</th>
                        <th className="member-nif">NIF</th>
                        <th className="member-phone">Phone</th>
                        <th className="member-family">Family</th>
                        <th className="member-edit">Edit</th>
                        <th className="member-delete">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {currentMembers.map(member => (
                    <tr key={member.member_id}>
                        <td>{member.member_id}</td>
                        <td>{member.user_id}</td>
                        <td>{member.name}</td>
                        <td>{member.surname}</td>
                        <td>{member.nif}</td>
                        <td>{member.phone}</td>
                        {member.family === true ? <td>Yes</td> : <td>No</td>}
                        <td>
                            <button onClick={() => handleEdit(member.member_id)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                    <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                                </svg></button>
                        </td>
                        <td>
                            <button onClick={() => handleDelete(member.member_id)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                                </svg></button>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
            </div>
            <div className="pagination">
                {/* Paginación */}
                {totalPages > 1 && (
                    <>
                        <button className="pagination-button" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
                        <span> {currentPage} of {totalPages}</span>
                        <button className="pagination-button" onClick={() => handlePageChange(currentPage + 1)} disabled={indexOfLastMember >= members.length}>Next</button>
                    </>
                )}
            </div>
        </section>
    )
}

export default MemberList;