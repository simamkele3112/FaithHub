import React, { useState } from 'react';
import { Routes, Route,  } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './Pages/HomePage';
import TopicsPage from './Pages/TopicsPage';
import QuotesPage from './components/QuotesPage';
import BooksPage from './Pages/BooksPage';
import SongsPage from './Pages/SongsPage';
import RecommendationsPage from './Pages/RecommendationsPage';
import AboutPage from './Pages/AboutPage';
import LoginPage from './Pages/LoginPage'; // Import LoginPage
import UserProfilePage from './Pages/UserProfilePage'; // Import UserProfilePage

const App = () => {
  const [user, setUser] = useState(null); // Manage logged-in user state

  return (
    <div>
      <Navbar />
      <Routes>
        {/* Route for login page */}
        <Route path="/login" element={<LoginPage setUser={setUser} />} />

        {/* Protect the HomePage */}
        <Route path="/" element={user ? <HomePage user={user} /> : <LoginPage setUser={setUser} />} />

        {/* Protect the other routes, redirect to login if not logged in */}
        <Route path="/topics" element={user ? <TopicsPage /> : <LoginPage setUser={setUser} />} />
        <Route path="/quotes" element={user ? <QuotesPage /> : <LoginPage setUser={setUser} />} />
        <Route path="/books" element={user ? <BooksPage /> : <LoginPage setUser={setUser} />} />
        <Route path="/songs" element={user ? <SongsPage /> : <LoginPage setUser={setUser} />} />
        <Route path="/recommendations" element={user ? <RecommendationsPage /> : <LoginPage setUser={setUser} />} />
        <Route path="/about" element={user ? <AboutPage /> : <LoginPage setUser={setUser} />} />

        {/* User profile page */}
        <Route path="/profile" element={user ? <UserProfilePage user={user} /> : <LoginPage setUser={setUser} />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
