import dateFormatter from "../utils/dateFormatter";
import CommentDeleteHandler from "./CommentDeleteHandler";

function CommentsCard({ commentObject, setComments }) {
    return (
        <div className="comment-card">
            <div className="comment-header">
                <span className="comment-author">{commentObject.author}</span>
                <span className="comment-date">{dateFormatter(commentObject.created_at)}</span>
            </div>
            
            <p className="comment-body">{commentObject.body}</p>
            
            <div className="comment-footer">
                <span className="comment-votes">👍 {commentObject.votes} votes</span>
                <CommentDeleteHandler commentObject={commentObject} setComments={setComments}/>
            </div>
        </div>
    )
}

export default CommentsCard;