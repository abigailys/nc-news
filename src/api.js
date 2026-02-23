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