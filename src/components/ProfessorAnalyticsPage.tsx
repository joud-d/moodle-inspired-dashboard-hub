
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { GraduationCap, Home, Timer, Calendar, BookOpen, User, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProfessorAnalyticsPageProps {
  onLogout: () => void;
}

const studentPerformanceData = [
  { course: 'CS101', average: 82 },
  { course: 'CS201', average: 78 },
  { course: 'CS301', average: 85 },
  { course: 'CS401', average: 88 },
];

const examTrendsData = [
  { month: 'Sep', passRate: 85 },
  { month: 'Oct', passRate: 87 },
  { month: 'Nov', passRate: 83 },
  { month: 'Dec', passRate: 89 },
  { month: 'Jan', passRate: 91 },
];

const gradeDistribution = [
  { grade: 'A', count: 35, color: '#10b981' },
  { grade: 'B', count: 42, color: '#3b82f6' },
  { grade: 'C', count: 28, color: '#f59e0b' },
  { grade: 'D', count: 15, color: '#ef4444' },
  { grade: 'F', count: 8, color: '#6b7280' },
];

const ProfessorAnalyticsPage: React.FC<ProfessorAnalyticsPageProps> = ({ onLogout }) => {
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
          <Link to="#" className="flex items-center justify-center md:justify-start px-4 py-3 text-gray-700 hover:bg-gray-100">
            <Timer className="w-6 h-6" />
            <span className="ml-4 hidden md:inline">Exam Reports</span>
          </Link>
          <Link to="#" className="flex items-center justify-center md:justify-start px-4 py-3 text-gray-700 hover:bg-gray-100">
            <Calendar className="w-6 h-6" />
            <span className="ml-4 hidden md:inline">Schedule</span>
          </Link>
          <Link to="#" className="flex items-center justify-center md:justify-start px-4 py-3 text-gray-700 hover:bg-gray-100 bg-gray-100">
            <BookOpen className="w-6 h-6" />
            <span className="ml-4 hidden md:inline">Analytics</span>
          </Link>
          <Link to="#" className="flex items-center justify-center md:justify-start px-4 py-3 text-gray-700 hover:bg-gray-100">
            <GraduationCap className="w-6 h-6" />
            <span className="ml-4 hidden md:inline">Settings</span>
          </Link>
        </div>
      </div>

      <div className="flex-1 ml-20 md:ml-64">
        {/* Header */}
        <header className="bg-red-700 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <h1 className="text-xl font-bold text-white">Professor Portal</h1>
              <div className="flex items-center space-x-4">
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
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Teaching Analytics</h2>
            <p className="text-gray-600">Monitor student performance and course effectiveness</p>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-gray-900">4</div>
                <p className="text-gray-600">Active Courses</p>
                <div className="text-sm text-green-600">2 new this semester</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-gray-900">128</div>
                <p className="text-gray-600">Total Students</p>
                <div className="text-sm text-blue-600">95% attendance</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-gray-900">87%</div>
                <p className="text-gray-600">Average Pass Rate</p>
                <div className="text-sm text-green-600">+5% from last semester</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-gray-900">42</div>
                <p className="text-gray-600">Exams Graded</p>
                <div className="text-sm text-gray-600">6 pending</div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Course Performance */}
            <Card>
              <CardHeader>
                <CardTitle>Course Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={studentPerformanceData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="course" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="average" fill="#dc2626" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Exam Trends */}
            <Card>
              <CardHeader>
                <CardTitle>Pass Rate Trends</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={examTrendsData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="passRate" stroke="#dc2626" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Grade Distribution */}
            <Card>
              <CardHeader>
                <CardTitle>Grade Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={gradeDistribution}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="count"
                      label={({ grade, percent }) => `${grade} ${(percent * 100).toFixed(0)}%`}
                    >
                      {gradeDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <div>
                      <p className="text-sm font-medium">CS301 Midterm Graded</p>
                      <p className="text-xs text-gray-600">42 students - Average: 85% - 2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <div>
                      <p className="text-sm font-medium">CS101 Quiz Published</p>
                      <p className="text-xs text-gray-600">38 students - Due: Tomorrow - 1 day ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <div>
                      <p className="text-sm font-medium">Attendance Report Generated</p>
                      <p className="text-xs text-gray-600">CS201 - 95% attendance - 2 days ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <div>
                      <p className="text-sm font-medium">New Assignment Created</p>
                      <p className="text-xs text-gray-600">CS401 - Data Structures Project - 3 days ago</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProfessorAnalyticsPage;
