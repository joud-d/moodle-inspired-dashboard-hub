
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, BookOpen, Calendar, Users, LogOut, User, Home, Timer, ArrowLeft, FileText } from 'lucide-react';
import { professorCoursesData } from '@/utils/professorData';
import { formatDate } from '@/utils/examUtils';

interface CourseExamsPageProps {
  onLogout: () => void;
}

const CourseExamsPage: React.FC<CourseExamsPageProps> = ({ onLogout }) => {
  const { courseId } = useParams<{ courseId: string }>();
  const course = professorCoursesData[courseId as keyof typeof professorCoursesData];

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Course Not Found</h1>
          <Link to="/professor/home">
            <Button>Back to Dashboard</Button>
          </Link>
        </div>
      </div>
    );
  }

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
          <Link to="/professor/home" className="flex items-center justify-center md:justify-start px-4 py-3 text-gray-700 hover:bg-gray-100">
            <Home className="w-6 h-6" />
            <span className="ml-4 hidden md:inline">Home</span>
          </Link>
          <Link to="#" className="flex items-center justify-center md:justify-start px-4 py-3 text-gray-700 hover:bg-gray-100 bg-gray-100">
            <Timer className="w-6 h-6" />
            <span className="ml-4 hidden md:inline">Exam Reports</span>
          </Link>
          <Link to="#" className="flex items-center justify-center md:justify-start px-4 py-3 text-gray-700 hover:bg-gray-100">
            <Calendar className="w-6 h-6" />
            <span className="ml-4 hidden md:inline">Schedule</span>
          </Link>
          <Link to="#" className="flex items-center justify-center md:justify-start px-4 py-3 text-gray-700 hover:bg-gray-100">
            <BookOpen className="w-6 h-6" />
            <span className="ml-4 hidden md:inline">Analytics</span>
          </Link>
          <Link to="#" className="flex items-center justify-center md:justify-start px-4 py-3 text-gray-700 hover:bg-gray-100">
            <GraduationCap className="w-6 h-6" />
            <span className="ml-4 hidden md:inline">Settings</span>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-20 md:ml-64">
        {/* Header */}
        <header className="bg-red-700 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <h1 className="text-xl font-bold text-white">Professor Portal</h1>
              <div className="flex items-center space-x-4">
                <Link to="/professor/home">
                  <Button variant="outline" size="sm" className="bg-white text-red-700 border-white hover:bg-gray-100">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Dashboard
                  </Button>
                </Link>
                <div className="flex items-center space-x-2 text-sm text-white">
                  <User className="w-4 h-4" />
                  <span>Dr. Ahmad Hassan</span>
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
          {/* Course Header */}
          <div className="mb-8">
            <div className="flex items-start space-x-4">
              <div className={`w-16 h-16 ${course.color} rounded-xl flex items-center justify-center`}>
                <FileText className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">{course.name}</h2>
                <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4 text-gray-600">
                  <span className="font-medium">{course.code}</span>
                  <span className="hidden md:inline">•</span>
                  <span>{course.instructor}</span>
                  <span className="hidden md:inline">•</span>
                  <span>{course.credits} Credit Hours</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">{course.department}</p>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Timer className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">{course.pastExams.length}</p>
                    <p className="text-sm text-gray-600">Completed Exams</p>
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
                      {course.pastExams.reduce((acc, exam) => acc + exam.studentsCount, 0)}
                    </p>
                    <p className="text-sm text-gray-600">Total Participants</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">
                      {course.pastExams.reduce((acc, exam) => acc + exam.studentsCount, 0)}
                    </p>
                    <p className="text-sm text-gray-600">Reports to Review</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Exams List */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Completed Exams</h3>
            <div className="space-y-4">
              {course.pastExams.map((exam) => (
                <Card key={exam.id} className="hover:shadow-lg transition-shadow border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center">
                          <FileText className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900">{exam.name}</h4>
                          <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                            <span>{formatDate(exam.date)}</span>
                            <span>•</span>
                            <span>{exam.time}</span>
                            <span>•</span>
                            <span>{exam.duration}</span>
                            <span>•</span>
                            <span>{exam.location}</span>
                          </div>
                          <p className="text-sm text-gray-500 mt-1">
                            {exam.studentsCount} students participated
                          </p>
                        </div>
                      </div>
                      <Link to={`/professor/exam/${exam.id}/reports`}>
                        <Button className="bg-red-600 hover:bg-red-700 text-white">
                          View Reports
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CourseExamsPage;
