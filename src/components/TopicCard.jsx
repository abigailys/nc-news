import { Link } from "react-router-dom";
function TopicCard({ topicObject }) {

    return (
        <>
            <div className="topic-card">
                <img src={topicObject.img_url} alt={topicObject.slug} />
                <div className="topic-card-text">
                    <p className="topic-card-slug">{topicObject.slug}</p>
                    <p className="topic-card-description">{topicObject.description}</p>
                </div>
                <nav>
                    <Link to={`/articles?topic=${topicObject.slug}`}>
                        <button>View Articles</button>
                    </Link>
                </nav>
            </div>


        </>
    )
}

export default TopicCard;