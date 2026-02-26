import { getCommentsByArticleId } from "../api";
import CommentHandler from "./CommentHandler";
import CommentsCard from "./CommentsCard";
import useFetch from "../hooks/useFetch";

function CommentsList({ article_id }) {
    const { data, setData, isLoading, error } = useFetch(() => getCommentsByArticleId(article_id), [article_id]);

    if (isLoading) {
        return (<p>Loading...</p>)
    };

    if (error) {
        return (<p>Error...</p>)
    };


    return (
        <>
            <div className="comment-insert">
                <CommentHandler article_id={article_id} setComments={setData}/>
            </div>
            <div className="comments-list">
                {data.map((comment) => (
                    <CommentsCard key={comment.comment_id} commentObject={comment} />
                ))}
            </div>
        </>
    )
}

export default CommentsList;