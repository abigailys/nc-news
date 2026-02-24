import { Link } from "react-router-dom";
import dateFormatter from "../utils/dateFormatter";

function ArticleCard({articleObject}) {
   
    return (
        <>
        <div className="article-card">
        <h3>{articleObject.title}</h3>
        <h6>by {articleObject.author}</h6>
        <h6>Topic: {articleObject.topic}</h6>
        <p>Votes: {articleObject.votes}</p>
        <p>Comments: {articleObject.comment_count}</p>
        <p>Created at: {dateFormatter(articleObject.created_at)}</p>
        <img src={articleObject.article_img_url} alt="" />
        <nav>
            <Link to={`/articles/${articleObject.article_id}`}></Link>
            <button>Read Full Article</button>
        </nav>
        </div>
        </>
    )
}

export default ArticleCard;