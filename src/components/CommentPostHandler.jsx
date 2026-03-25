import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../context/User";
import { postComment } from "../api";

function CommentPostHandler({ article_id, setComments }) {
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
        return (<p>{error}</p>)
    };

    return (
        <form className="comment-insert" onSubmit={handleCommentPost}>
            <label htmlFor="comment">Join the conversation</label>
            <div className="input-group">
                <input 
                    type="text" 
                    id="comment" 
                    placeholder={`comment as ${currentUser.username}`} 
                    value={commentBody}
                    onChange={(e) => setCommentBody(e.target.value)} 
                    disabled={isSubmitting} 
                    required />
                <button type="submit">{isSubmitting ? "Posting..." : "Post"}</button>
            </div>
        </form>)
}

export default CommentPostHandler;