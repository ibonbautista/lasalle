import PlayerCard from "../playerCard/PlayerCard.jsx";
import "./PlayerList.css";

function PlayerList({players}) {
    return (
        <section className="player-list">
            {players.map(player => <PlayerCard player={player} key={player.player_id}/>)}
        </section>
    )
}

export default PlayerList;