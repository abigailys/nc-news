import { useState, useEffect } from "react";
import { getArticles } from "../api";
import ArticleCard from "./ArticleCard";

function ArticlesList() {
    const [articles, setArticles] = useState([])

    useEffect(() => {
       async function fetchArticles() {
        const articlesResult = await getArticles()
        setArticles(articlesResult);
       } 

       fetchArticles()
    }, [])
    
    return (
        <>
        <div className="articles-list">
            {articles.map((article) => (
                <ArticleCard key={article.article_id} articleObject={article}/>
            ))}
        </div>
        </>
        )
}

export default ArticlesList;