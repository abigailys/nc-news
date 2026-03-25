import { useState } from "react";

function VoteHandler({ itemId, setVotes, updateArticleVotes }) {

    const [error, setError] = useState(null);
    const [userVote, setUserVote] = useState(0);

    async function updateVotes(inc_votes) {
        let increment = 0;
        const previousVote = userVote; 

        if (userVote === inc_votes) {
            increment = -inc_votes;
            setUserVote(0);
        } else if (userVote === 0) {
            increment = inc_votes;
            setUserVote(inc_votes);
        } else {
            increment = inc_votes * 2;
            setUserVote(inc_votes);
        }

        setVotes((votes) => votes + increment); // optimistic render
        setError(null);

        try {
            await updateArticleVotes(itemId, increment) // update database
        } catch (error) {
            setVotes((votes) => votes - increment) // reverse if failed
            setUserVote(previousVote);
            setError("Failed to vote. Please try again.");
        }
    }

    return (
        <>
            <button
                className={`upvote-button ${userVote === 1 ? 'active' : ''}`}
                onClick={() => { updateVotes(1) }}>
                <span className="vote-arrow">▲ Upvote</span>
            </button>

            <button
                className={`downvote-button ${userVote === -1 ? 'active' : ''}`}
                onClick={() => { updateVotes(-1) }}>
                <span className="vote-arrow">▼ Downvote</span>
            </button>
            {error && <p className="vote-error">{error}</p>}
        </>
    )


}

export default VoteHandler;