import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthContext.jsx";
import { getPlayerById } from "../../../utils/api/players.js"; // Asegúrate de que esta función esté definida
import "./LoginPlayerInfo.css";

function LoginPlayerInfo() {
    const { userData } = useContext(AuthContext); // Obtener los datos del usuario del contexto
    const [playerData, setPlayerData] = useState(null); // Estado para almacenar los datos del jugador
    const [loading, setLoading] = useState(true); // Estado de carga
    const [error, setError] = useState(null); // Estado para manejar errores

    useEffect(() => {
        if (userData && userData.user_id) {
            // Solo hacer la solicitud si tenemos el id del jugador
            const fetchPlayerData = async () => {
                try {
                    const player = await getPlayerById(userData.user_id); // Usamos el id del usuario logueado
                    setPlayerData(player);
                    setLoading(false);
                } catch (err) {
                    setError("Error al obtener los datos del jugador");
                    setLoading(false);
                }
            };

            fetchPlayerData();
        }
    }, [userData]);

    if (loading) {
        return <p>Cargando la información del jugador...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <section className="player-info-wrapper">
  <div className="player-info-card">
    <div className="player-info-content">
      {playerData ? (
        <>
          <div className="column">
            <p><strong>Name:</strong> {playerData.name} {playerData.surname1} {playerData.surname2}</p>
            <p><strong>NIF:</strong> {playerData.nif}</p>
            <p><strong>Address:</strong> {playerData.address}</p>
            <p><strong>Phone:</strong> {playerData.phone}</p>
            <p><strong>Email:</strong> {playerData.user.email}</p>
          </div>
          <div className="column">
            <p><strong>Birthdate:</strong> {playerData.birthdate}</p>
            <p><strong>Team:</strong> {playerData.team.name}</p>
            <p><strong>Position:</strong> {playerData.position}</p>
            <p><strong>Height:</strong> {playerData.height} cm</p>
            <p><strong>Hand:</strong> {playerData.hand}</p>
          </div>
        </>
      ) : (
        <p>Player not found.</p>
      )}
    </div>
  </div>
</section>

    );
}

export default LoginPlayerInfo;