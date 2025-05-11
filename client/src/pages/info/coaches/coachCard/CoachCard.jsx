import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../context/AuthContext.jsx";
import { getCoachByTeamId } from "../../../../utils/api/coaches.js";
import { getPlayerById } from "../../../../utils/api/players.js";
import "./CoachCard.css";

function CoachCard() {
    const { userData } = useContext(AuthContext);
    const [coaches, setCoaches] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCoaches = async () => {
            try {
                
                if (userData?.user_id) {
                    const player = await getPlayerById(userData.user_id);
                    console.log("Player data:", player);
                    
                    if (player && player.team_id) { 
                        console.log("Player team_id:", player.team_id);
                        const teamCoaches = await getCoachByTeamId(player.team_id);
                        setCoaches(teamCoaches);
                    }
                }
            } catch (err) {
                console.error("Error attempting to fetch coaches:", err);
                setError("Data could not be fetched.");
            } finally {
                setLoading(false);
            }
        };

        fetchCoaches();
    }, [userData]);

    if (loading) return <p>Cargando información de los coaches...</p>;
    if (error) return <p>{error}</p>;

    return (
        <section className="coach-list-cards">
            {coaches.length > 0 ? (
                <div className="coach-card-container">
                    {coaches.map((coach) => (
                        <div className="coach-card" key={coach.id}>
                            <h2 className="coach-card-title">
                                {coach.name} {coach.surname1} {coach.surname2}
                            </h2>

                            <div className="coach-card-info">
                                <p><span>Phone:</span> {coach.phone}</p>
                                <p><span>Title:</span> {coach.title}</p>
                                <p><span>Birthdate:</span> {coach.birthdate}</p>
                            </div>

                            <div className="coach-card-teams">
                                {coach.teams.length > 0 ? (
                                    coach.teams.map((team) => (
                                        <div key={team.team_id} className="team">
                                            <p><span>Team:</span> {team.name}</p>
                                            <p><span>Category:</span> {team.category}</p>
                                            <p><span>Role:</span> {team.coaches_teams.role}</p>
                                        </div>
                                    ))
                                ) : (
                                    <p>Dont have teams</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No coaches found.</p>
            )}
        </section>
    );
}

export default CoachCard;
