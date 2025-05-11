import "./MemberCard.css";

function MemberCard({member}) {

    return (
        <article className="article member">
            <section className="member-data">
                <h3 className="member-name">{member.name}</h3>
            </section>
        </article>
    )
}

export default MemberCard;