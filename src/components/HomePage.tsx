
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GraduationCap, BookOpen, Calendar, Users, LogOut, User } from 'lucide-react';

interface HomePageProps {
  onLogout: () => void;
}

const subjects = [
  {
    id: 'cs101',
    name: 'Introduction to Computer Science',
    code: 'CS 101',
    instructor: 'Dr. Ahmad Hassan',
    credits: 3,
    color: 'bg-blue-500',
    upcomingExams: 2
  },
  {
    id: 'math201',
    name: 'Calculus II',
    code: 'MATH 201',
    instructor: 'Dr. Sarah Ahmed',
    credits: 4,
    color: 'bg-green-500',
    upcomingExams: 1
  },
  {
    id: 'eng102',
    name: 'English Literature',
    code: 'ENG 102',
    instructor: 'Dr. Omar Khatib',
    credits: 3,
    color: 'bg-purple-500',
    upcomingExams: 3
  },
  {
    id: 'phys101',
    name: 'General Physics I',
    code: 'PHYS 101',
    instructor: 'Dr. Layla Mansour',
    credits: 4,
    color: 'bg-orange-500',
    upcomingExams: 1
  },
  {
    id: 'chem101',
    name: 'General Chemistry',
    code: 'CHEM 101',
    instructor: 'Dr. Khalil Nasser',
    credits: 3,
    color: 'bg-red-500',
    upcomingExams: 0
  },
  {
    id: 'hist101',
    name: 'Middle Eastern History',
    code: 'HIST 101',
    instructor: 'Dr. Fatima Al-Zahra',
    credits: 3,
    color: 'bg-indigo-500',
    upcomingExams: 2
  }
];

const HomePage: React.FC<HomePageProps> = ({ onLogout }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">Jordan University</h1>
                <p className="text-sm text-gray-500">Student Portal</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <User className="w-4 h-4" />
                <span>Ahmad Khaled</span>
              </div>
              <Button
                onClick={onLogout}
                variant="outline"
                size="sm"
                className="flex items-center space-x-2"
              >
                <LogOut className="w-4 h-4" />
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
                <Card className="hover:shadow-lg transition-shadow cursor-pointer border-0 shadow-md">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className={`w-12 h-12 ${subject.color} rounded-lg flex items-center justify-center`}>
                        <BookOpen className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-medium text-gray-500">{subject.code}</span>
                        <p className="text-xs text-gray-500">{subject.credits} Credits</p>
                      </div>
                    </div>
                    <CardTitle className="text-lg font-semibold text-gray-900 mt-3">
                      {subject.name}
                    </CardTitle>
                    <CardDescription className="text-sm text-gray-600">
                      {subject.instructor}
                    </CardDescription>
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
  );
};

export default HomePage;
