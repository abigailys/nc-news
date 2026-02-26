import useFetch from "../hooks/useFetch";
import { getArticles } from "../api";
import ArticleCard from "./ArticleCard";
import { useContext } from "react";
import { UserContext } from "../context/User";

function ArticlesList() {
    const { data, isLoading, error } = useFetch(getArticles);
    const { currentUser } = useContext(UserContext);

    if (isLoading) {
        return (<p>Loading...</p>)
    };

    if (error) {
        return (<p>Error...</p>)
    };

    return (
        <>
            <div className="current-user">
                 <p><img src={currentUser.avatar_url} alt="" /> Logged in as: {currentUser.username}</p> 
            </div>
            <div className="articles-list">
                {data.map((article) => (
                    <ArticleCard key={article.article_id} articleObject={article} />
                ))}
            </div>
        </>
    )

}

export default ArticlesList;