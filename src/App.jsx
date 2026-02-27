import './App.css'
import ArticlesList from './components/ArticlesList';
import SingleArticle from './components/SingleArticle';
import TopicsList from './components/TopicsList';
import { Routes, Route } from "react-router-dom";
import { useContext } from 'react';
import { UserContext } from './context/User';
import { Link } from "react-router-dom";

function App() {
  const { currentUser } = useContext(UserContext);
  return (
    <div className="app">
      <header>
        <div className="header-content">
          <Link to="/articles" className="header-link">
            <h1>NC News</h1>
          </Link>
          
          <div className="current-user">
            <img src={currentUser.avatar_url} alt="User avatar" />
            <p><span>Logged in as:</span> {currentUser.username}</p>
          </div>
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
