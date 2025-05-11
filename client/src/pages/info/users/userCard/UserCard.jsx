import "./UserCard.css";

function UserCard({user}) {

    return (
        <article className="article user">
            <section className="user-data">
                <h3 className="user-name">{user.name}</h3>
            </section>
        </article>
    )
}

export default UserCard;