function VoteHandler({ itemId, setVotes, updateArticleVotes }) {


    async function updateVotes(inc_votes) {
        setVotes((votes) => votes + inc_votes) // optimistic render

        try {
            await updateArticleVotes(itemId, inc_votes) // update database
        } catch (error) {
            setVotes((votes) => votes - inc_votes) // reverse if failed
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