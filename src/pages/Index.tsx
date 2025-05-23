
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import LoginPage from '../components/LoginPage';
import ForgotPasswordPage from '../components/ForgotPasswordPage';
import HomePage from '../components/HomePage';
import SubjectPage from '../components/SubjectPage';

const Index = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route 
            path="/login" 
            element={
              isAuthenticated ? 
              <Navigate to="/home" replace /> : 
              <LoginPage onLogin={() => setIsAuthenticated(true)} />
            } 
          />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route 
            path="/home" 
            element={
              isAuthenticated ? 
              <HomePage onLogout={() => setIsAuthenticated(false)} /> : 
              <Navigate to="/login" replace />
            } 
          />
          <Route 
            path="/subject/:subjectId" 
            element={
              isAuthenticated ? 
              <SubjectPage /> : 
              <Navigate to="/login" replace />
            } 
          />
          <Route path="/" element={<Navigate to="/login" replace />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Index;
