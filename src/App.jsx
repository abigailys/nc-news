import { useState } from 'react'
import './App.css'
import ArticlesList from './components/ArticlesList'
import SingleArticle from './components/SingleArticle';
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className="app">
      <h1>NC News</h1>
      <Routes>
        <Route path="/articles" element={<ArticlesList/>}/>
        <Route path="/articles/:article_id" element={<SingleArticle/>}/>
      </Routes>
    </div>



  )
}

export default App
