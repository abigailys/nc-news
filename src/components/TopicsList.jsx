import useFetch from "../hooks/useFetch";
import { getTopics } from "../api";
import TopicCard from "./TopicCard";

function TopicsList() {
    const { data, isLoading, error } = useFetch(getTopics);

    if (isLoading) {
        return (<p>Loading...</p>)
    };

    if (error) {
        return (<p>Error...</p>)
    };

    return (
        <>
            <div className="topics-list">
                {data.map((topic) => (
                    <TopicCard key={topic.slug} topicObject={topic} />
                ))}
            </div>
        </>
    )
}

export default TopicsList;