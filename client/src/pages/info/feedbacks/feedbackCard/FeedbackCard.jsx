import "./FeedbackCard.css";

function FeedbackCard({feedback}) {

    return (
        <article className="article feedback">
            <section className="feedback-data">
                <h3 className="feedback-name">{feedback.id}</h3>
            </section>
        </article>
    )
}

export default FeedbackCard;