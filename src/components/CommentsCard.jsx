import dateFormatter from "../utils/dateFormatter";
import CommentDeleteHandler from "./CommentDeleteHandler";

function CommentsCard({ commentObject, setComments }) {
    return (
        <>
            <div className="comment-card">
                <p>{commentObject.author}: {commentObject.body}</p>
                <p>Votes: {commentObject.votes}</p>
                <p>Created at: {dateFormatter(commentObject.created_at)}</p>
                <CommentDeleteHandler commentObject = {commentObject} setComments={setComments}/>
            </div>
        </>
    )
}

export default CommentsCard;