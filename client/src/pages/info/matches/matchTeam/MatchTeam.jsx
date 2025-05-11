import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../context/AuthContext.jsx";
import { getMatchesByTeam } from "../../../../utils/api/matches.js";
import { getPlayerById } from "../../../../utils/api/players.js";
import "./MatchTeam.css";

function PartidosEquipo() {
    const { userData } = useContext(AuthContext);
    const [matches, setMatches] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMatches = async () => {
            try {
                if (userData?.user_id) {
                    const player = await getPlayerById(userData.user_id);
                    const teamName = player?.team?.name;
                    console.log("nombre del equipo:", teamName);

                    if (teamName) {
                        const teamMatches = await getMatchesByTeam(teamName);
                        console.log("Partidos del equipo:", teamMatches);
                        setMatches(teamMatches);
                    }
                }
            } catch (err) {
                console.error("Error al obtener los partidos del equipo:", err);
                setError("No se pudo obtener la información de los partidos.");
            } finally {
                setLoading(false);
            }
        };

        fetchMatches();
    }, [userData]);

    if (loading) return <p>Cargando partidos del equipo...</p>;
    if (error) return <p>{error}</p>;

    return (
        <section className="match-list-cards">
  {matches.length > 0 ? (
    <>
      {/* Próximos partidos */}
      <div className="upcoming-matches">
        <h2 className="section-title">Próximos Partidos</h2>
        <div className="match-card-container">
          {matches
            .filter((match) => !match.home_score && !match.away_score)
            .map((match) => {
              const isHome = match.home_or_away === "home";
              return (
                <div className="match-card" key={match.match_id}>
                  <h2 className="match-card-title">
                  {new Date(match.date).toLocaleDateString("es-ES", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                  </h2>
                  <div className="match-card-info">
                    {isHome ? (
                      <p>
                        {match.team?.name} vs {match.rival?.name}
                      </p>
                    ) : (
                      <p>
                        {match.rival?.name} vs {match.team?.name}
                      </p>
                    )}
                  </div>
                  <div className="match-card-comment">
                    {match.general_comment}
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      {/* Partidos jugados */}
      <div className="played-matches">
        <h2 className="section-title">Partidos Jugados</h2>
        <div className="match-card-container">
          {matches
            .filter((match) => match.home_score || match.away_score)
            .map((match) => {
              const isHome = match.home_or_away === "home";
              return (
                <div className="match-card" key={match.match_id}>
                  <h2 className="match-card-title">
                  {new Date(match.date).toLocaleDateString("es-ES", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                  </h2>
                  <div className="match-card-info">
                    {isHome ? (
                      <p>
                        {match.team?.name} {match.home_score || "-"} vs {match.away_score || "-"} {match.rival?.name}
                      </p>
                    ) : (
                      <p>
                        {match.rival?.name} {match.away_score || "-"} vs {match.home_score || "-"} {match.team?.name}
                      </p>
                    )}
                  </div>
                  <div className="match-card-comment">
                    <h3>{match.general_comment}</h3>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  ) : (
    <p>No se encontraron partidos para tu equipo.</p>
  )}
</section>

    );
    
}

export default PartidosEquipo;