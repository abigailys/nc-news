import useFetch from "../hooks/useFetch";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../api";
import CommentsList from "./CommentsList";
import dateFormatter from "../utils/dateFormatter";
import VoteHandler from "./VoteHandler";
import { updateArticleVotes } from "../api";



function SingleArticle() {
    const { article_id } = useParams();
    const { data, isLoading, error } = useFetch(() => getArticleById(article_id), [article_id]);

    const [votes, setVotes] = useState(0)

    useEffect(() => {
        if (data) setVotes(data.votes);
    }, [data]);

    if (isLoading) {
        return (<p>Loading...</p>)
    };

    if (!data) {
        return <div>Article ID does not exist</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <article className="single-article-page">
            <div className="article-header">
                <span className="single-topic-tag">#{data.topic}</span>
                <h2>{data.title}</h2>
                <div className="article-info">
                    <span>By <strong>{data.author}</strong></span>
                    <span className="dot-separator"> • </span>
                    <time>{dateFormatter(data.created_at)}</time>
                </div>
            </div>

            <img src={data.article_img_url} alt={data.title} className="featured-img" />

            <div className="article-body">
                <p>{data.body}</p>
            </div>

            <div className="article-footer">
                <div className="stats">
                    <p>👍 {votes}</p>
                    <p>💬 {data.comment_count}</p>
                </div>
                <div className="vote-buttons">
                    <VoteHandler itemId={article_id} votes={votes} setVotes={setVotes} updateArticleVotes={updateArticleVotes} />
                </div>
            </div>

            <hr className="section-divider" />

            <section className="article-comments">
                <h3>Comments</h3>
                <CommentsList article_id={article_id} />
            </section>
        </article>
    )
}

export default SingleArticle;