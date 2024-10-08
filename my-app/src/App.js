// App.js
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './Pages/HomePage';
import TopicsPage from './Pages/TopicsPage';
import QuotesPage from './Pages/QuotesPage';
import BooksPage from './Pages/BooksPage';
import SongsPage from './Pages/SongsPage';
import RecommendationsPage from './Pages/RecommendationsPage';

const App = () => {
  const [user, setUser] = useState(null); // State to manage user

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/topics" element={<TopicsPage />} />
        <Route path="/quotes" element={<QuotesPage />} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/songs" element={<SongsPage />} />
        <Route path="/recommendations" element={<RecommendationsPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
