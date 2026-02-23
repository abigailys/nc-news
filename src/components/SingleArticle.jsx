import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../api";



function SingleArticle() {
    const [article, setArticle] = useState([])
    const { article_id } = useParams();

    useEffect(() => {
       async function fetchArticle() {
        const articleResult = await getArticleById(article_id)
        setArticle(articleResult);
       } 

       fetchArticle()
    }, [article_id])
    
    return (
        <>
        <>
        <div className="article-page">
        <h2>{article.title}</h2>
        <h4>{article.body}</h4>
        <h6>by {article.author}</h6>
        <h6>Topic: {article.topic}</h6> §
        <p>Votes: {article.votes}</p>
        <p>Comments: {article.comment_count}</p>
        <p>Created at: {article.created_at}</p>
        <img src={article.article_img_url} alt="" />
        </div>
        </>
        </>
        )
}

export default SingleArticle;