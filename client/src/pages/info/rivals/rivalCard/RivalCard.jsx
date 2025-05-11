import "./RivalCard.css";

function RivalCard({rival}) {

    return (
        <article className="article rival">
            <section className="rival-data">
                <h3 className="rival-name">{rival.name}</h3>
            </section>
        </article>
    )
}

export default RivalCard;