import { useState, useEffect } from "react";
import { getCommentsByArticleId } from "../api";
import CommentsCard from "./CommentsCard";

function CommentsList({ article_id }) {
    const [comments, setComments] = useState([])

    useEffect(() => {
       async function fetchComments() {
        const commentsResult = await getCommentsByArticleId(article_id)
        setComments(commentsResult);
       } 

       fetchComments()
       
    }, [article_id])
    console.log(comments)
    return (
        <>
        <div className="comments-list">
            {comments.map((comment) => (
                <CommentsCard key={comment.comment_id} commentObject={comment}/>
            ))}
        </div>
        </>
        )
}

export default CommentsList;