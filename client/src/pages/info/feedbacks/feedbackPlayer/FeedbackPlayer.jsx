import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../context/AuthContext.jsx";
import { getFeedbacksByPlayerId } from "../../../../utils/api/feedbacks.js";
import { getPlayerById } from "../../../../utils/api/players.js";

import "./FeedbackPlayer.css";

function FeedbackPlayer() {
    const { userData } = useContext(AuthContext);
    const [feedbacks, setFeedbacks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFeedbacks = async () => {
            try {
                if (userData?.user_id) {
                    const player = await getPlayerById(userData.user_id);
                    console.log("Jugador logeado:", player);

                    if (player?.player_id) {
                        console.log("ID del jugador:", player.player_id);
                        const playerFeedbacks = await getFeedbacksByPlayerId(player.player_id);
                        console.log("Feedbacks del jugador:", playerFeedbacks);
                        setFeedbacks(playerFeedbacks);
                    }
                }
            } catch (err) {
                console.error("Error al obtener los feedbacks del jugador:", err);
                setError("No se pudo obtener la información de los feedbacks.");
            } finally {
                setLoading(false);
            }
        };

        fetchFeedbacks();
    }, [userData]);

    if (loading) return <p>Cargando feedbacks del jugador...</p>;
    if (error) return <p>{error}</p>;

    return (
        <section className="feedback-list-cards">
            <div className="feedback-card-container">
                {feedbacks.length > 0 ? (
                    feedbacks.map((feedback) => (
                        <div key={feedback.feedback_id} className="feedback-card">
                            <h2 className="feedback-card-title">Feedback</h2>
    
                            <div className="feedback-card-info">
                                <p><span>Fecha:</span> {new Date(feedback.match.date).toLocaleDateString("es-ES", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })} - {feedback.match.home_or_away}</p>
                                <p><span>Rival:</span> {feedback.match.rival.name}</p>
                                <p><span>Score:</span> {feedback.match.home_score} - {feedback.match.away_score}</p>
                                <p><span>Coach:</span> {feedback.coach.name} {feedback.coach.surname1}</p>
                            </div>
    
                            <div className="feedback-card-comment">
                                <h3>{feedback.comment}</h3>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="no-feedback-message">No se encontraron feedbacks para el jugador.</p>
                )}
            </div>
        </section>
    );
    
}

export default FeedbackPlayer;
