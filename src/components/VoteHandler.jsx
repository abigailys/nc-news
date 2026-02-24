function VoteHandler({ itemId, votes, setVotes, updateArticleVotes }) {


    function updateVotes(inc_votes) {
        setVotes(votes + inc_votes) // optimistic render

        try {
            updateArticleVotes(itemId, inc_votes) // update database
        } catch (error) {
            setVotes(votes - inc_votes) // reverse if failed
            setError(error.msg || "Unable to update votes. Please try again.")
        }
    }

    return (
        <>
            <button onClick={() => { updateVotes(1) }}>Upvote</button>
            <button onClick={() => { updateVotes(-1) }}>Downvote</button>
        </>
    )


}

export default VoteHandler;