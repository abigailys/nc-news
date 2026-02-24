function CommentsCard({ commentObject }) {
    return (
        <>
            <div className="comment-card">
                <p>{commentObject.author}: {commentObject.body}</p>
                <p>Votes: {commentObject.votes}</p>
                <p>Created at: {commentObject.created_at}</p>
            </div>
        </>
    )
}

export default CommentsCard;