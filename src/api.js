export async function getArticles() {
    const response = await fetch("https://nc-news-abigail.onrender.com/api/articles");

    if(!response.ok) {
        throw { status: response.status, msg: 'Failed to fetch articles' };
    }

    const articlesData = await response.json();
    return articlesData.articles;
}

export async function getArticleById(article_id) {
    const response = await fetch(`https://nc-news-abigail.onrender.com/api/articles/${article_id}`);

    if(!response.ok) {
        throw { status: response.status, msg: 'Failed to fetch article' };
    }

    const articleData = await response.json();
    return articleData.article;
}

export async function getCommentsByArticleId(article_id) {
    const response = await fetch(`https://nc-news-abigail.onrender.com/api/articles/${article_id}/comments`);

    if(!response.ok) {
        throw { status: response.status, msg: 'Failed to fetch comments' };
    }

    const commentsData = await response.json();
    return commentsData.comments;
}

export async function updateArticleVotes(article_id, inc_votes) {
    const response = await fetch(`https://nc-news-abigail.onrender.com/api/articles/${article_id}`, {
        method: "PATCH",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({inc_votes: inc_votes})
    });

    if(!response.ok) {
        throw { status: response.status, msg: 'Failed to change vote' };
    }

    const updatedArticleData = await response.json();
    return updatedArticleData.article;
}