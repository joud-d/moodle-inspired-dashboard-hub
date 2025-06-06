
import { Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import LoginPage from '../components/LoginPage';
import ForgotPasswordPage from '../components/ForgotPasswordPage';
import HomePage from '../components/HomePage';
import SubjectPage from '../components/SubjectPage';
import ExamPage from '../components/ExamPage';
import SettingsPage from '../components/SettingsPage';
import AnalyticsPage from '../components/AnalyticsPage';
import SchedulePage from '../components/SchedulePage';
import ProfessorLoginPage from '../components/ProfessorLoginPage';
import ProfessorForgotPasswordPage from '../components/ProfessorForgotPasswordPage';
import ProfessorHomePage from '../components/ProfessorHomePage';
import ProfessorSettingsPage from '../components/ProfessorSettingsPage';
import ProfessorAnalyticsPage from '../components/ProfessorAnalyticsPage';
import ProfessorSchedulePage from '../components/ProfessorSchedulePage';
import CourseExamsPage from '../components/CourseExamsPage';
import ExamReportsPage from '../components/ExamReportsPage';

const Index = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isProfessorAuthenticated, setIsProfessorAuthenticated] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Routes>
        {/* Student Portal Routes */}
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
        <Route 
          path="/exam/:subjectId" 
          element={
            isAuthenticated ? 
            <ExamPage /> : 
            <Navigate to="/login" replace />
          } 
        />
        <Route 
          path="/settings" 
          element={
            isAuthenticated ? 
            <SettingsPage /> : 
            <Navigate to="/login" replace />
          } 
        />
        <Route 
          path="/analytics" 
          element={
            isAuthenticated ? 
            <AnalyticsPage /> : 
            <Navigate to="/login" replace />
          } 
        />
        <Route 
          path="/schedule" 
          element={
            isAuthenticated ? 
            <SchedulePage /> : 
            <Navigate to="/login" replace />
          } 
        />

        {/* Professor Portal Routes */}
        <Route 
          path="/professor/login" 
          element={
            isProfessorAuthenticated ? 
            <Navigate to="/professor/home" replace /> : 
            <ProfessorLoginPage onLogin={() => setIsProfessorAuthenticated(true)} />
          } 
        />
        <Route path="/professor/forgot-password" element={<ProfessorForgotPasswordPage />} />
        <Route 
          path="/professor/home" 
          element={
            isProfessorAuthenticated ? 
            <ProfessorHomePage onLogout={() => setIsProfessorAuthenticated(false)} /> : 
            <Navigate to="/professor/login" replace />
          } 
        />
        <Route 
          path="/professor/course/:courseId" 
          element={
            isProfessorAuthenticated ? 
            <CourseExamsPage onLogout={() => setIsProfessorAuthenticated(false)} /> : 
            <Navigate to="/professor/login" replace />
          } 
        />
        <Route 
          path="/professor/exam/:examId/reports" 
          element={
            isProfessorAuthenticated ? 
            <ExamReportsPage onLogout={() => setIsProfessorAuthenticated(false)} /> : 
            <Navigate to="/professor/login" replace />
          } 
        />
        <Route 
          path="/professor/settings" 
          element={
            isProfessorAuthenticated ? 
            <ProfessorSettingsPage onLogout={() => setIsProfessorAuthenticated(false)} /> : 
            <Navigate to="/professor/login" replace />
          } 
        />
        <Route 
          path="/professor/analytics" 
          element={
            isProfessorAuthenticated ? 
            <ProfessorAnalyticsPage onLogout={() => setIsProfessorAuthenticated(false)} /> : 
            <Navigate to="/professor/login" replace />
          } 
        />
        <Route 
          path="/professor/schedule" 
          element={
            isProfessorAuthenticated ? 
            <ProfessorSchedulePage onLogout={() => setIsProfessorAuthenticated(false)} /> : 
            <Navigate to="/professor/login" replace />
          } 
        />

        {/* Default Routes */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/professor" element={<Navigate to="/professor/login" replace />} />
      </Routes>
    </div>
  );
};

export default Index;
