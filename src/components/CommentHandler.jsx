import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../context/User";
import { postComment } from "../api";

function CommentHandler({ article_id, setComments }) {
    const { currentUser } = useContext(UserContext);
    const [commentBody, setCommentBody] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState(null);

    const handleCommentPost = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);
        try {
            const newComment = await postComment(article_id, currentUser.username, commentBody);
            setComments((currentComments) => [newComment, ...currentComments])
            setCommentBody("");
        } catch (err) {
            setError("Failed to post comment. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (error) {
        return (<p>Error...</p>)
    };

    return (
        <form onSubmit={handleCommentPost}>
            <input type="text" id="comment" name="comment" placeholder={`comment as ${currentUser.username}`} value={commentBody}
                onChange={(e) => setCommentBody(e.target.value)} disabled={isSubmitting} required />
            <button type="submit">{isSubmitting ? "Posting..." : "Post"}</button>
        </form>)


}

export default CommentHandler;