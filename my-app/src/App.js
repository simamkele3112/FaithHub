// App.js
import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './Pages/HomePage';
import TopicsPage from './Pages/TopicsPage';
import QuotesPage from './components/QuotesPage';
import BooksPage from './Pages/BooksPage';
import SongsPage from './Pages/SongsPage';
import RecommendationsPage from './Pages/RecommendationsPage';
import AboutPage from './Pages/AboutPage';
import LoginPage from './Pages/LoginPage';
import UserProfilePage from './Pages/UserProfilePage';
import './App.css'; // Import CSS file for styling the body-content

const ProtectedRoute = ({ user, children }) => {
  return user ? children : <Navigate to="/login" />;
};

const App = () => {
  const [user, setUser] = useState(null); // Manage logged-in user state

  return (
    <div>
      <Navbar />
      <div className="body-content"> {/* body-content div for styling */}
        <Routes>
          <Route path="/login" element={<LoginPage setUser={setUser} />} />

          <Route 
            path="/" 
            element={
              <ProtectedRoute user={user}>
                <HomePage user={user} />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/topics" 
            element={
              <ProtectedRoute user={user}>
                <TopicsPage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/quotes" 
            element={
              <ProtectedRoute user={user}>
                <QuotesPage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/books" 
            element={
              <ProtectedRoute user={user}>
                <BooksPage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/songs" 
            element={
              <ProtectedRoute user={user}>
                <SongsPage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/recommendations" 
            element={
              <ProtectedRoute user={user}>
                <RecommendationsPage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/about" 
            element={
              <ProtectedRoute user={user}>
                <AboutPage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/profile" 
            element={
              <ProtectedRoute user={user}>
                <UserProfilePage user={user} />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
