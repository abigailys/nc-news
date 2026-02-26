import { useState } from "react";

function VoteHandler({ itemId, setVotes, updateArticleVotes }) {

    const [error, setError] = useState(null);

    async function updateVotes(inc_votes) {
        setVotes((votes) => votes + inc_votes) // optimistic render
        setError(null);
        try {
            await updateArticleVotes(itemId, inc_votes) // update database
        } catch (error) {
            setVotes((votes) => votes - inc_votes) // reverse if failed
            setError("Failed to vote. Please try again.");
        }
    }

    return (
        <>
            {error && <p>{error}</p>}
            <button onClick={() => { updateVotes(1) }}>Upvote</button>
            <button onClick={() => { updateVotes(-1) }}>Downvote</button>
        </>
    )


}

export default VoteHandler;