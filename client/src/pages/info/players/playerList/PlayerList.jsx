import { useState,useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";

import {getAllPlayers} from "../../../../utils/api/players.js";
import PlayerCard from "../playerCard/PlayerCard.jsx";
import "./PlayerList.css";

function PlayerList({}) {
    //ESTADOS
    const defaultPlayers = useLoaderData();
    const [players, setPlayers] = useState(defaultPlayers || []); //array vacio
    const [currentPage, setCurrentPage] = useState(1);
    const [playersPerPage] = useState(15); // 15 jugadores por página

    //EFECTOS

    //FUNCIONES

     // Obtener los jugadores que deben mostrarse en la página actual
     const totalPages = Math.ceil(players.length / playersPerPage);
  const indexOfLastPlayer = currentPage * playersPerPage;
  const indexOfFirstPlayer = indexOfLastPlayer - playersPerPage;
  const currentPlayers = players.slice(indexOfFirstPlayer, indexOfLastPlayer);

    // Cambiar la página
    const handlePageChange = (page) => {
        setCurrentPage(page);
      };
    
    return (
        <section className="player-list">
    <div className="table-container">
        <table className="player-table" border="1" style={{ width: "100%", borderCollapse: "collapse", marginTop: "1rem" }}>
            <thead>
                <tr>
                    <th className="player_id">ID</th>
                    <th className="player-name">Name</th>
                    <th className="player-surname1">First sur.</th>
                    <th className="player-surname2">Second sur.</th>
                    <th className="player-nif">NIF</th>
                    <th className="player-birthdate">Birthdate</th>
                    <th className="player-phone">Phone</th>
                    <th className="player-address">Address</th>
                    <th className="player-gender">Gender</th>
                    <th className="player-team">Team</th>
                    <th className="player-position">Position</th>
                    <th className="player-height">Height</th>
                    <th className="player-hand">Hand</th>
                    {/* <th className="player-user_id">User</th>
                    <th className="player-status">Status</th> */}
                    <th className="player-edit">Edit</th>
                    <th className="player-delete">Delete</th>
                </tr>
            </thead>
            <tbody>
                {currentPlayers.map(player => (
                    <tr key={player.player_id}>
                        <td>{player.player_id}</td>
                        <td>{player.name}</td>
                        <td>{player.surname1}</td>
                        <td>{player.surname2}</td>
                        <td>{player.nif}</td>
                        <td>{player.birthdate}</td>
                        <td>{player.phone}</td>
                        <td>{player.address}</td>
                        <td>{player.gender}</td>
                        <td>{player.team.name}</td>
                        <td>{player.position}</td>
                        <td>{player.height}</td>
                        <td>{player.hand}</td>
                        {/* <td>{player.user_id}</td>
                        <td>{player.status}</td> */}
                        <td>
                            <Link to={`/admin/players/edit/${player.player_id}`}>
                                <button><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                    <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                                </svg></button>
                            </Link>
                        </td>
                        <td>
                            <button onClick={() => handleDelete(player.player_id)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
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
                <button className="pagination-button" onClick={() => handlePageChange(currentPage + 1)} disabled={indexOfLastPlayer >= players.length}>Next</button>
            </>
        )}
    </div>
</section>

    )
}

export default PlayerList;