import "./PlayerCard.css";

function PlayerCard({player}) {

    return (
        <article className="article player">
            <section className="player-data">
                <h3 className="player-name">{player.name}</h3>
                <p className="player-position">{player.position}</p>
                <p className="player-team">{player.team}</p>
            </section>
        </article>
    )
}

export default PlayerCard;