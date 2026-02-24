import { useState, useEffect } from "react";
import { getArticles } from "../api";
import ArticleCard from "./ArticleCard";

function ArticlesList() {
    const [articles, setArticles] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState();

    useEffect(() => {
        async function fetchArticles() {
            try {
                setIsLoading(true)
                const articlesResult = await getArticles()
                console.log(articlesResult)
                setArticles(articlesResult);
            } catch (error) {
                setError(error.msg || "Something went wrong!");
            } finally {
                setIsLoading(false);
            }
        }
        fetchArticles()

    }, [])

    if (isLoading) {
        return (<p>Loading...</p>)
    };


    console.log(articles)
    return (
        <>
            <div className="articles-list">
                {articles.map((article) => (
                    <ArticleCard key={article.article_id} articleObject={article} />
                ))}
            </div>
        </>
    )
}

export default ArticlesList;