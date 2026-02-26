import useFetch from "../hooks/useFetch";
import { getArticles } from "../api";
import ArticleCard from "./ArticleCard";

function ArticlesList() {
    const { data, isLoading, error } = useFetch(getArticles);

    if (isLoading) {
        return (<p>Loading...</p>)
    };

    if (error) {
        return (<p>Error...</p>)
    };

    return (
        <>
            <div className="articles-list">
                {data.map((article) => (
                    <ArticleCard key={article.article_id} articleObject={article} />
                ))}
            </div>
        </>
    )

}

export default ArticlesList;