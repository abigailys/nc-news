import './App.css'
import ArticlesList from './components/ArticlesList'
import SingleArticle from './components/SingleArticle';
import UserProvider from './context/User';
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className="app">
      <header>
        <h1>NC News</h1>
      </header>

      <main>
        <UserProvider>
          <Routes>
            <Route path="/articles" element={<ArticlesList />} />
            <Route path="/articles/:article_id" element={<SingleArticle />} />
          </Routes>
        </UserProvider>
      </main>

      <footer>...</footer>
    </div>

  )
}

export default App
