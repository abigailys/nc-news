import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../api";
import CommentsList from "./CommentsList";
import dateFormatter from "../utils/dateFormatter";
import VoteHandler from "./VoteHandler";
import { updateArticleVotes } from "../api";


function SingleArticle() {
    const [article, setArticle] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState();
    const [votes, setVotes] = useState(0)

    const { article_id } = useParams();

    useEffect(() => {
        async function fetchArticle() {
            try {
                setIsLoading(true)
                const articleResult = await getArticleById(article_id)
                setArticle(articleResult);
                setVotes(articleResult.votes); 
            } catch (error) {
                setError(error.msg || "Something went wrong!");
            } finally {
                setIsLoading(false);
            }
        }

        fetchArticle()
    }, [article_id])

    if (isLoading) {
        return (<p>Loading...</p>)
    };

    if (!article) {
        return <div>Article ID does not exist</div>;
    }
    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <>
            <div>{isLoading && "Loading..."}</div>
            <div className="single-article">
                <h2>{article.title}</h2>
                <h4>{article.body}</h4>
                <h6>by {article.author}</h6>
                <h6>Topic: {article.topic}</h6>
                <p>Votes: {votes}</p>
                <VoteHandler itemId={article_id} votes={votes} setVotes={setVotes} updateArticleVotes={updateArticleVotes} />
                <p>Comments: {article.comment_count}</p>
                <p>Created at: {dateFormatter(article.created_at)}</p>
                <img src={article.article_img_url} alt="" />
            </div>

            <div className="article-comments">
                <CommentsList article_id={article_id} />
            </div>
        </>

    )
}

export default SingleArticle;