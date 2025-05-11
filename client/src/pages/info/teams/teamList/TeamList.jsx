import { useState,useEffect } from "react";
import { useLoaderData } from "react-router-dom";

import getAllTeams from "../../../../utils/api/teams.js";
import TeamCard from "../teamCard/TeamCard.jsx";
import "./TeamList.css";

function TeamList({}) {
    //ESTADOS
    const defaultTeams = useLoaderData();
    const [teams, setTeams] = useState(defaultTeams || []); //array vacio
    const [currentPage, setCurrentPage] = useState(1);
    const [teamsPerPage] = useState(15); // 15 jugadores por página

    //EFECTOS

    //FUNCIONES

    // Obtener los jugadores que deben mostrarse en la página actual
    const totalPages = Math.ceil(teams.length / teamsPerPage);
  const indexOfLastTeam = currentPage * teamsPerPage;
  const indexOfFirstTeam = indexOfLastTeam - teamsPerPage;
  const currentTeams = teams.slice(indexOfFirstTeam, indexOfLastTeam);

    // Cambiar la página
    const handlePageChange = (page) => {
        setCurrentPage(page);
      };
    
    return (
        <section className="team-list">
            <div className="table-container">
            <table className="team-table" border="1" style={{ width: "100%", borderCollapse: "collapse", marginTop: "1rem" }}>
                <thead>
                    <tr>
                        <th className="team_id">ID</th>
                        <th className="season">Season</th>
                        <th className="team-name">Name</th>
                        <th className="team-category">Category</th>
                        <th className="team-gender">Gender</th>
                        <th className="team-edit">Edit</th>
                        <th className="team-delete">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {currentTeams.map(team => (
                    <tr key={team.team_id}>
                        <td>{team.team_id}</td>
                        <td>{team.season.name}</td>
                        <td>{team.name}</td>
                        <td>{team.category}</td>
                        <td>{team.gender}</td>
                        <td>
                            <button onClick={() => handleEdit(team.team_id)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                    <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                                </svg></button>
                        </td>
                        <td>
                            <button onClick={() => handleDelete(team.team_id)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
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
                        <button className="pagination-button" onClick={() => handlePageChange(currentPage + 1)} disabled={indexOfLastTeam >= teams.length}>Next</button>
                    </>
                )}
            </div>
        </section>
    )
}

export default TeamList;