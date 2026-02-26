import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../context/User";
import { deleteComment } from "../api";

function CommentDeleteHandler({ commentObject, setComments }) {
    const { currentUser } = useContext(UserContext);
    const [isDeleting, setIsDeleting] = useState(false);
    const [error, setError] = useState(null);


    const handleDeletePost = async (e) => {
        e.preventDefault();
        setIsDeleting(true);
        setError(null);

        try {
            await deleteComment(commentObject.comment_id);
            setComments((currentComments) => currentComments.filter((comment) => comment.comment_id !== commentObject.comment_id))
        } catch (err) {
            setError("Failed to delete comment. Please try again.");
        } finally {
            setIsDeleting(false);
        }
    }

    if (error) {
        return (<p>{error}</p>)
    };
    
    if (commentObject.author === currentUser.username) {
        return (
            <button type="button" onClick={handleDeletePost} disabled={isDeleting}>{isDeleting ? "Deleting..." : "Delete"}</button>
        )
    }

}

export default CommentDeleteHandler;