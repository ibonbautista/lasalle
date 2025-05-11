import { useState,useEffect } from "react";
import { useLoaderData } from "react-router-dom";

import getAllUsers from "../../../../utils/api/users.js";
import UserCard from "../userCard/UserCard.jsx";
import "./UserList.css";

function UserList({}) {
    //ESTADOS
    const defaultUsers = useLoaderData();
    const [users, setUsers] = useState(defaultUsers || []); //array vacio
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage] = useState(15); // 15 jugadores por página

    //EFECTOS

    //FUNCIONES

     // Obtener los jugadores que deben mostrarse en la página actual
  const totalPages = Math.ceil(users.length / usersPerPage);
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

    // Cambiar la página
    const handlePageChange = (page) => {
        setCurrentPage(page);
      };
    
    return (
        <section className="user-list">
            <div className="table-container">
            <table className="user-table" border="1" style={{ width: "100%", borderCollapse: "collapse", marginTop: "1rem" }}>
                <thead>
                    <tr>
                    <th className="id">ID</th>
                    <th className="user-email">Email</th>
                    <th className="user-password">Password</th>
                    <th className="user-role">Role</th>
                    <th className="user-in-date">In</th>
                    <th className="user-update-date">Update</th>
                    <th className="user-out-date">Out</th>
                    <th className="user-edit">Edit</th>
                    <th className="user-delete">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {currentUsers.map(user => (
                    <tr key={user.user_id}>
                        <td>{user.user_id}</td>
                        <td>{user.email}</td>
                        <td>{user.password}</td>
                        <td>{user.role}</td>
                        <td>{user.in_date}</td>
                        <td>{user.update_date}</td>
                        <td>{user.out_date}</td>
                        <td>
                            <button onClick={() => handleEdit(user.user_id)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
</svg></button>
                        </td>
                        <td>
                            <button onClick={() => handleDelete(user.user_id)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
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
                        <button className="pagination-button" onClick={() => handlePageChange(currentPage + 1)} disabled={indexOfLastUser >= users.length}>Next</button>
                    </>
                )}
            </div>
        </section>
    )
}

export default UserList;