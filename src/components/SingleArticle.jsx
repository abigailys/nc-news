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
        <>
            <div>{isLoading && "Loading..."}</div>
            <div className="single-article">
                <h2>{data.title}</h2>
                <h4>{data.body}</h4>
                <h6>by {data.author}</h6>
                <h6>Topic: {data.topic}</h6>
                <p>Votes: {votes}</p>
                <VoteHandler itemId={article_id} votes={votes} setVotes={setVotes} updateArticleVotes={updateArticleVotes} />
                <p>Comments: {data.comment_count}</p>
                <p>Created at: {dateFormatter(data.created_at)}</p>
                <img src={data.article_img_url} alt={data.title} />

                <div className="article-comments">
                    <CommentsList article_id={article_id} />
                </div>
            </div>
        </>

    )
}

export default SingleArticle;