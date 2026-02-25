import { useState, useEffect } from "react";
import { getArticles } from "../api";
import ArticleCard from "./ArticleCard";
import { useContext } from "react";
import { UserContext } from "../context/User";
import UserProvider from "../context/User";

function ArticlesList() {
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState();

    const {currentUser} = useContext(UserContext);

    useEffect(() => {
        async function fetchArticles() {
            try {
                setIsLoading(true)
                const articlesResult = await getArticles()
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

    return (
        <>
            <div className="current-user">
                 <p><img src={currentUser.avatar_url} alt="" /> Logged in as: {currentUser.username}</p> 
            </div>
            <div className="articles-list">
                {articles.map((article) => (
                    <ArticleCard key={article.article_id} articleObject={article} />
                ))}
            </div>
        </>
    )

}

export default ArticlesList;