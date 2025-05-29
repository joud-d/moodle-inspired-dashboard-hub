
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GraduationCap, Home, Timer, Calendar, BookOpen } from 'lucide-react';

const Sidebar: React.FC = () => {
  const location = useLocation();

  return (
    <div className="w-20 md:w-64 bg-white border-r border-gray-200 shadow-sm flex flex-col fixed h-screen">
      {/* Logo */}
      <div className="h-16 bg-red-700 flex items-center justify-center">
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
          <GraduationCap className="w-8 h-8 text-red-700" />
        </div>
        <span className="text-white text-lg font-bold ml-2 hidden md:inline">
          Jordan University
        </span>
      </div>
      
      {/* Navigation */}
      <div className="flex flex-col flex-1 py-6">
        <Link 
          to="/home" 
          className={`flex items-center justify-center md:justify-start px-4 py-3 text-gray-700 hover:bg-gray-100 ${
            location.pathname === '/home' ? 'bg-gray-100' : ''
          }`}
        >
          <Home className="w-6 h-6" />
          <span className="ml-4 hidden md:inline">Home</span>
        </Link>
        <Link 
          to="/schedule" 
          className={`flex items-center justify-center md:justify-start px-4 py-3 text-gray-700 hover:bg-gray-100 ${
            location.pathname === '/schedule' ? 'bg-gray-100' : ''
          }`}
        >
          <Calendar className="w-6 h-6" />
          <span className="ml-4 hidden md:inline">Schedule</span>
        </Link>
        <Link 
          to="/analytics" 
          className={`flex items-center justify-center md:justify-start px-4 py-3 text-gray-700 hover:bg-gray-100 ${
            location.pathname === '/analytics' ? 'bg-gray-100' : ''
          }`}
        >
          <BookOpen className="w-6 h-6" />
          <span className="ml-4 hidden md:inline">Analytics</span>
        </Link>
        <Link 
          to="/settings" 
          className={`flex items-center justify-center md:justify-start px-4 py-3 text-gray-700 hover:bg-gray-100 ${
            location.pathname === '/settings' ? 'bg-gray-100' : ''
          }`}
        >
          <GraduationCap className="w-6 h-6" />
          <span className="ml-4 hidden md:inline">Settings</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
