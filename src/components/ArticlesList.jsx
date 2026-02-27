import useFetch from "../hooks/useFetch";
import { getArticles } from "../api";
import ArticleCard from "./ArticleCard";
import { useSearchParams } from "react-router";

function ArticlesList() {
    const [searchParams, setSearchParams] = useSearchParams();

    let params = "";

    if (searchParams.get("topic") !== null) {
        params = `topic=${searchParams.get("topic")}`
    }

    const { data, isLoading, error } = useFetch(() => getArticles(params));

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