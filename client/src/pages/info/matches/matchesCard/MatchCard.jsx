import "./MatchCard.css";

function MatchCard({match}) {

    return (
        <article className="article match">
            <section className="match-data">
                <h3 className="match-name">{match.match_id}</h3>
            </section>
        </article>
    )
}

export default MatchCard;