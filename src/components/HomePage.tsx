
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GraduationCap, BookOpen, Calendar, Users, LogOut, User, Home, Timer } from 'lucide-react';

interface HomePageProps {
  onLogout: () => void;
}

const subjects = [
  {
    id: 'cs101',
    name: 'INTRODUCTION TO COMPUTER SCIENCE',
    code: 'CS 101',
    instructor: 'Dr. Ahmad Hassan',
    credits: 3,
    color: 'bg-red-500',
    department: 'King Abdullah II School of Information Technology',
    upcomingExams: 2,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=500&h=200"
  },
  {
    id: 'math201',
    name: 'CALCULUS II',
    code: 'MATH 201',
    instructor: 'Dr. Sarah Ahmed',
    credits: 4,
    color: 'bg-red-500',
    department: 'King Abdullah II School of Information Technology',
    upcomingExams: 1,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=500&h=200"
  },
  {
    id: 'eng102',
    name: 'ENGLISH LITERATURE',
    code: 'ENG 102',
    instructor: 'Dr. Omar Khatib',
    credits: 3,
    color: 'bg-red-500',
    department: 'King Abdullah II School of Information Technology',
    upcomingExams: 3,
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=500&h=200"
  },
  {
    id: 'phys101',
    name: 'GENERAL PHYSICS I',
    code: 'PHYS 101',
    instructor: 'Dr. Layla Mansour',
    credits: 4,
    color: 'bg-red-500',
    department: 'King Abdullah II School of Information Technology',
    upcomingExams: 1,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=500&h=200"
  },
  {
    id: 'chem101',
    name: 'GENERAL CHEMISTRY',
    code: 'CHEM 101',
    instructor: 'Dr. Khalil Nasser',
    credits: 3,
    color: 'bg-red-500',
    department: 'King Abdullah II School of Information Technology',
    upcomingExams: 0,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=500&h=200"
  },
  {
    id: 'hist101',
    name: 'MIDDLE EASTERN HISTORY',
    code: 'HIST 101',
    instructor: 'Dr. Fatima Al-Zahra',
    credits: 3,
    color: 'bg-red-500',
    department: 'King Abdullah II School of Information Technology',
    upcomingExams: 2,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=500&h=200"
  }
];

const HomePage: React.FC<HomePageProps> = ({ onLogout }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
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
          <Link to="/home" className="flex items-center justify-center md:justify-start px-4 py-3 text-gray-700 hover:bg-gray-100 bg-gray-100">
            <Home className="w-6 h-6" />
            <span className="ml-4 hidden md:inline">Home</span>
          </Link>
          <Link to="#" className="flex items-center justify-center md:justify-start px-4 py-3 text-gray-700 hover:bg-gray-100">
            <Timer className="w-6 h-6" />
            <span className="ml-4 hidden md:inline">Exams</span>
          </Link>
          <Link to="#" className="flex items-center justify-center md:justify-start px-4 py-3 text-gray-700 hover:bg-gray-100">
            <Calendar className="w-6 h-6" />
            <span className="ml-4 hidden md:inline">Schedule</span>
          </Link>
          <Link to="#" className="flex items-center justify-center md:justify-start px-4 py-3 text-gray-700 hover:bg-gray-100">
            <BookOpen className="w-6 h-6" />
            <span className="ml-4 hidden md:inline">Resources</span>
          </Link>
          <Link to="#" className="flex items-center justify-center md:justify-start px-4 py-3 text-gray-700 hover:bg-gray-100">
            <GraduationCap className="w-6 h-6" />
            <span className="ml-4 hidden md:inline">Grades</span>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-20 md:ml-64">
        {/* Header */}
        <header className="bg-red-700 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <h1 className="text-xl font-bold text-white">Student Portal</h1>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 text-sm text-white">
                  <User className="w-4 h-4" />
                  <span>Ahmad Khaled</span>
                </div>
                <Button
                  onClick={onLogout}
                  variant="outline"
                  size="sm"
                  className="bg-white text-red-700 border-white hover:bg-gray-100"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  <span>Sign Out</span>
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Welcome Section */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, Ahmad!</h2>
            <p className="text-gray-600">Here are your enrolled courses for Spring 2024</p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">{subjects.length}</p>
                    <p className="text-sm text-gray-600">Enrolled Courses</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">
                      {subjects.reduce((acc, subject) => acc + subject.upcomingExams, 0)}
                    </p>
                    <p className="text-sm text-gray-600">Upcoming Exams</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">
                      {subjects.reduce((acc, subject) => acc + subject.credits, 0)}
                    </p>
                    <p className="text-sm text-gray-600">Credit Hours</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Courses Grid */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">My Courses</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {subjects.map((subject) => (
                <Link key={subject.id} to={`/subject/${subject.id}`}>
                  <Card className="hover:shadow-lg transition-shadow cursor-pointer border-0 shadow-md overflow-hidden">
                    <div className="h-36 w-full relative">
                      <img 
                        src={subject.image} 
                        alt={subject.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-base font-bold text-gray-900">
                            {subject.name}
                          </CardTitle>
                          <CardDescription className="text-sm text-gray-600 mt-1">
                            {subject.department}
                          </CardDescription>
                        </div>
                        <div className="text-right">
                          <span className="text-xs font-medium text-gray-500">{subject.code}</span>
                          <p className="text-xs text-gray-500">{subject.credits} Credits</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">
                          {subject.upcomingExams} upcoming exam{subject.upcomingExams !== 1 ? 's' : ''}
                        </span>
                        {subject.upcomingExams > 0 && (
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default HomePage;
