import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../context/User";
import { postComment } from "../api";

function CommentHandler({ article_id, setComments }) {
    const { currentUser } = useContext(UserContext);
    const [commentBody, setCommentBody] = useState("");

    const handleCommentPost = async (e) => {
        e.preventDefault();
        const newComment = await postComment(article_id, currentUser.username, commentBody);
        setComments((currentComments) => [newComment, ...currentComments])
        setCommentBody("");
    };
    return (
        <form onSubmit={handleCommentPost}>
            <input type="text" id="comment" name="comment" placeholder={`comment as ${currentUser.username}`} value={commentBody}
                onChange={(e) => setCommentBody(e.target.value)}  required/>
                <button type="submit">Post</button>
        </form>)


}

export default CommentHandler;