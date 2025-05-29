
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import Sidebar from './Sidebar';
import Header from './Header';

const gradeData = [
  { subject: 'Math', grade: 85 },
  { subject: 'Physics', grade: 92 },
  { subject: 'Chemistry', grade: 78 },
  { subject: 'Biology', grade: 88 },
  { subject: 'English', grade: 95 },
];

const progressData = [
  { month: 'Sep', average: 75 },
  { month: 'Oct', average: 78 },
  { month: 'Nov', average: 82 },
  { month: 'Dec', average: 85 },
  { month: 'Jan', average: 87 },
];

const examTypeData = [
  { name: 'Midterm', value: 35, color: '#ef4444' },
  { name: 'Final', value: 40, color: '#f97316' },
  { name: 'Quiz', value: 25, color: '#eab308' },
];

const AnalyticsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      
      <div className="flex-1 ml-20 md:ml-64">
        <Header />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Academic Analytics</h2>
            <p className="text-gray-600">Track your academic performance and progress</p>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-gray-900">87.2</div>
                <p className="text-gray-600">Overall GPA</p>
                <div className="text-sm text-green-600">+2.3% from last semester</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-gray-900">24</div>
                <p className="text-gray-600">Exams Completed</p>
                <div className="text-sm text-blue-600">6 pending</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-gray-900">96%</div>
                <p className="text-gray-600">Attendance Rate</p>
                <div className="text-sm text-green-600">Excellent</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-gray-900">15</div>
                <p className="text-gray-600">Credit Hours</p>
                <div className="text-sm text-gray-600">This semester</div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Grades by Subject */}
            <Card>
              <CardHeader>
                <CardTitle>Grades by Subject</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={gradeData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="subject" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="grade" fill="#dc2626" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Progress Over Time */}
            <Card>
              <CardHeader>
                <CardTitle>Academic Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={progressData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="average" stroke="#dc2626" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Exam Distribution */}
            <Card>
              <CardHeader>
                <CardTitle>Exam Type Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={examTypeData}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {examTypeData.map((entry, index) => (
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
                      <p className="text-sm font-medium">Physics Midterm</p>
                      <p className="text-xs text-gray-600">Score: 92/100 - 2 days ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <div>
                      <p className="text-sm font-medium">Math Quiz 3</p>
                      <p className="text-xs text-gray-600">Score: 85/100 - 5 days ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <div>
                      <p className="text-sm font-medium">Chemistry Lab Report</p>
                      <p className="text-xs text-gray-600">Score: 78/100 - 1 week ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <div>
                      <p className="text-sm font-medium">English Essay</p>
                      <p className="text-xs text-gray-600">Score: 95/100 - 1 week ago</p>
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

export default AnalyticsPage;
