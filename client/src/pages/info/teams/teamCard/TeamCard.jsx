import "./TeamCard.css";

function TeamCard({team}) {

    return (
        <article className="article team">
            <section className="team-data">
                <h3 className="team-name">{team.name}</h3>
            </section>
        </article>
    )
}

export default TeamCard;