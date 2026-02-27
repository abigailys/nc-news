function TopicCard({ topicObject }) {

    return (
        <>
            <div className="topic-card">
                <img src={topicObject.img_url} alt={topicObject.slug} />
                <div className="topic-card-slug">{topicObject.slug}</div>
                <div className="top-card-description">{topicObject.description}</div>
                {/* <nav>
                    <Link to={`/articles/${articleObject.article_id}`}>
                        <button>Read Full Article</button>
                    </Link>
                </nav> */}
            </div>


        </>
    )
}

export default TopicCard;