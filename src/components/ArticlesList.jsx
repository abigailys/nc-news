import { useState, useEffect } from "react";
import { getArticles } from "../api";
import ArticleCard from "./ArticleCard";

function ArticlesList() {
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState();

    useEffect(() => {
        async function fetchArticles() {
            try {
                setIsLoading(true)
                const articlesResult = await getArticles()
                setArticles(articlesResult);
            } catch (err) {
                setError(err.message || "Something went wrong!");
            } finally {
                setIsLoading(false);
            }
}
            fetchArticles()
        
    }, [])

    if (error) {
    return <div>Error: {error}</div>;
  }
    return (
        <>
            <div>{isLoading && "Loading..."}</div>
            <div className="articles-list">
                {articles.map((article) => (
                    <ArticleCard key={article.article_id} articleObject={article} />
                ))}
            </div>
        </>
    )
}

export default ArticlesList;