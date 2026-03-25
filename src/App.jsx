import './App.css'
import ArticlesList from './components/ArticlesList';
import SingleArticle from './components/SingleArticle';
import TopicsList from './components/TopicsList';
import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from 'react';
import { UserContext } from './context/User';
import { Link } from "react-router-dom";

function App() {
  const { currentUser } = useContext(UserContext);
  return (
    <div className="app">
      <header>
        <div className="header-content">
          <div className="header-left">
            <Link to="/articles" className="logo-link">
              <h1>NC <span>NEWS</span></h1>
            </Link>
            <nav className="header-nav">
              <Link to="/articles">Home</Link>
              <Link to="/topics">Topics</Link>
            </nav>
          </div>

          <div className="current-user">
            <div className="user-info">
              <span className="user-label">Logged in as</span>
              <span className="username">{currentUser.username}</span>
            </div>
            <img src={currentUser.avatar_url} alt={`${currentUser.username}'s avatar`} />
          </div>
        </div>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/articles" />} />
          <Route path="/articles" element={<ArticlesList />} />
          <Route path="/articles/:article_id" element={<SingleArticle />} />
          <Route path="/topics" element={<TopicsList />} />
        </Routes>
      </main>

      <footer>
        <div className="footer-content">
          <div className="footer-section">
            <h4>NC News</h4>
            <p>A full-stack portfolio project built during the <strong>Northcoders</strong> Bootcamp.</p>
          </div>

          <div className="footer-section">
            <h4>Stack</h4>
            <p>React • Node.js • PostgreSQL</p>
          </div>

          <div className="footer-section">
            <h4>Connect</h4>
            <div className="footer-links">
              <a href="https://github.com/abigailys" target="_blank" rel="noreferrer">GitHub</a>
              <span className="footer-divider">|</span>
              <a href="https://www.linkedin.com/in/abigail-lee-ys/" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Abigail Lee</p>
        </div>
      </footer>
    </div>

  )
}

export default App
