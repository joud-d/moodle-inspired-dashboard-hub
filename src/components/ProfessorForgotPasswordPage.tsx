
import React, { useEffect } from 'react';

const ProfessorForgotPasswordPage: React.FC = () => {
  useEffect(() => {
    // Redirect to JU password reset website
    window.location.href = 'https://adresetpw.ju.edu.jo/';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <p className="text-gray-600">Redirecting to Jordan University password reset...</p>
      </div>
    </div>
  );
};

export default ProfessorForgotPasswordPage;
