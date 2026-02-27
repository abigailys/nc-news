import { Link } from "react-router-dom";
import dateFormatter from "../utils/dateFormatter";

function ArticleCard({ articleObject }) {
    console.log(articleObject)
    return (
        <>
            <div className="article-card">
                <span className="topic-tag">#{articleObject.topic}</span>

                <div className="title-section">
                    <h2>{articleObject.title}</h2>
                    <h6 className="author-tag">👤 {articleObject.author}</h6>
                </div>

                <img src={articleObject.article_img_url} alt="" />

                <div className="article-card-footer">
                    <div className="stats">
                        <p>👍 {articleObject.votes}</p>
                        <p>💬 {articleObject.comment_count}</p>
                        <p>{dateFormatter(articleObject.created_at)}</p>
                    </div>
                    <nav>
                        <Link to={`/articles/${articleObject.article_id}`}>
                            <button>Read Full Article</button>
                        </Link>
                    </nav>
                </div>

            </div>
        </>
    )
}


export default ArticleCard;