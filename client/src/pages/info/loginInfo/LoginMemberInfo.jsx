import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthContext.jsx";
import { getPlayerById } from "../../../utils/api/players.js"; // Asegúrate de que esta función esté definida

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
        <section className="user-profile">
            <h2>Información del Usuario</h2>
            {playerData ? (
                <>
                    <p><strong>Nombre:</strong> {playerData.name} {playerData.surname1} {playerData.surname2} </p>
                    <p><strong>NIF:</strong> {playerData.nif} {playerData.birthdate}</p>
                    <p><strong>Correo:</strong> {playerData.user.email} Telefono:{playerData.phone}</p>
                    <p><strong>Direccion:</strong> {playerData.address}</p>
                    <p><strong>Posición:</strong> {playerData.position} Altura: {playerData.height}</p>
                    <p><strong>Mano:</strong> {playerData.hand}</p>
                    <p><strong>Equipo:</strong> {playerData.team.name}</p>

                </>
            ) : (
                <p>No se encontraron datos del jugador.</p>
            )}
        </section>
    );
}

export default LoginPlayerInfo;