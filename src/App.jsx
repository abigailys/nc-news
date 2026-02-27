import './App.css'
import ArticlesList from './components/ArticlesList';
import SingleArticle from './components/SingleArticle';
import TopicsList from './components/TopicsList';
import { Routes, Route } from "react-router-dom";
import { useContext } from 'react';
import { UserContext } from './context/User';

function App() {
  const { currentUser } = useContext(UserContext);
  return (
    <div className="app">
      <header>
        <h1>NC News</h1>
        <div className="current-user">
          <p><img src={currentUser.avatar_url} alt="" /> Logged in as: {currentUser.username}</p>
        </div>
      </header>

      <main>
          <Routes>
            <Route path="/articles" element={<ArticlesList />} />
            <Route path="/articles/:article_id" element={<SingleArticle />} />
            <Route path="/topics" element={<TopicsList />} />
          </Routes>
      </main>

      <footer>...</footer>
    </div>

  )
}

export default App
