import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin, Users, GraduationCap, Home, Timer, BookOpen, User, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProfessorSchedulePageProps {
  onLogout: () => void;
}

const teachingSchedule = [
  {
    id: 1,
    day: 'Monday',
    classes: [
      { time: '08:00 - 09:30', course: 'CS101 - Intro to Programming', room: 'Lab A', students: 35 },
      { time: '10:00 - 11:30', course: 'CS301 - Data Structures', room: 'E201', students: 42 },
      { time: '14:00 - 15:30', course: 'Office Hours', room: 'CS205', students: 0 },
    ]
  },
  {
    id: 2,
    day: 'Tuesday',
    classes: [
      { time: '09:00 - 10:30', course: 'CS201 - OOP Concepts', room: 'D304', students: 38 },
      { time: '11:00 - 12:30', course: 'CS401 - Software Engineering', room: 'E301', students: 28 },
      { time: '13:00 - 14:30', course: 'CS101 Lab Session', room: 'Lab B', students: 18 },
    ]
  },
  {
    id: 3,
    day: 'Wednesday',
    classes: [
      { time: '08:00 - 09:30', course: 'CS101 - Intro to Programming', room: 'Lab A', students: 35 },
      { time: '10:00 - 11:30', course: 'CS301 - Data Structures', room: 'E201', students: 42 },
      { time: '15:00 - 16:30', course: 'Faculty Meeting', room: 'Conference Room', students: 0 },
    ]
  },
  {
    id: 4,
    day: 'Thursday',
    classes: [
      { time: '09:00 - 10:30', course: 'CS201 - OOP Concepts', room: 'D304', students: 38 },
      { time: '11:00 - 12:30', course: 'CS401 - Software Engineering', room: 'E301', students: 28 },
      { time: '14:00 - 15:30', course: 'Office Hours', room: 'CS205', students: 0 },
    ]
  },
  {
    id: 5,
    day: 'Friday',
    classes: [
      { time: '08:00 - 09:30', course: 'CS301 Lab Session', room: 'Lab C', students: 21 },
      { time: '10:00 - 11:30', course: 'CS401 Project Review', room: 'E301', students: 28 },
    ]
  },
];

const upcomingDeadlines = [
  { task: 'CS301 Midterm Grading', date: '2024-12-15', priority: 'high' },
  { task: 'CS101 Assignment Review', date: '2024-12-16', priority: 'medium' },
  { task: 'Faculty Research Proposal', date: '2024-12-18', priority: 'high' },
  { task: 'CS401 Project Presentations', date: '2024-12-20', priority: 'low' },
];

const ProfessorSchedulePage: React.FC<ProfessorSchedulePageProps> = ({ onLogout }) => {
  const [selectedDay, setSelectedDay] = useState('Monday');

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
          <Link to="/professor/schedule" className="flex items-center justify-center md:justify-start px-4 py-3 text-gray-700 hover:bg-gray-100 bg-gray-100">
            <Calendar className="w-6 h-6" />
            <span className="ml-4 hidden md:inline">Schedule</span>
          </Link>
          <Link to="/professor/analytics" className="flex items-center justify-center md:justify-start px-4 py-3 text-gray-700 hover:bg-gray-100">
            <BookOpen className="w-6 h-6" />
            <span className="ml-4 hidden md:inline">Analytics</span>
          </Link>
          <Link to="/professor/settings" className="flex items-center justify-center md:justify-start px-4 py-3 text-gray-700 hover:bg-gray-100">
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
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Teaching Schedule</h2>
            <p className="text-gray-600">View your weekly teaching schedule and upcoming tasks</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Weekly Schedule */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="w-5 h-5 mr-2" />
                    Weekly Teaching Schedule
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {/* Day Selector */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {teachingSchedule.map((dayData) => (
                      <Button
                        key={dayData.day}
                        variant={selectedDay === dayData.day ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedDay(dayData.day)}
                        className={selectedDay === dayData.day ? "bg-red-600 hover:bg-red-700" : ""}
                      >
                        {dayData.day}
                      </Button>
                    ))}
                  </div>

                  {/* Classes for Selected Day */}
                  <div className="space-y-4">
                    {teachingSchedule
                      .find(day => day.day === selectedDay)
                      ?.classes.map((classItem, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h3 className="font-semibold text-gray-900 flex items-center">
                                <BookOpen className="w-4 h-4 mr-2 text-red-600" />
                                {classItem.course}
                              </h3>
                              <div className="flex items-center space-x-4 mt-2">
                                <span className="flex items-center text-sm text-gray-500">
                                  <Clock className="w-4 h-4 mr-1" />
                                  {classItem.time}
                                </span>
                                <span className="flex items-center text-sm text-gray-500">
                                  <MapPin className="w-4 h-4 mr-1" />
                                  {classItem.room}
                                </span>
                                {classItem.students > 0 && (
                                  <span className="flex items-center text-sm text-gray-500">
                                    <Users className="w-4 h-4 mr-1" />
                                    {classItem.students} students
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar with Tasks and Quick Info */}
            <div className="space-y-6">
              {/* Upcoming Deadlines */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Upcoming Deadlines</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {upcomingDeadlines.map((deadline, index) => (
                      <div 
                        key={index} 
                        className={`border rounded-lg p-3 ${
                          deadline.priority === 'high' ? 'bg-red-50 border-red-200' :
                          deadline.priority === 'medium' ? 'bg-yellow-50 border-yellow-200' :
                          'bg-green-50 border-green-200'
                        }`}
                      >
                        <h4 className={`font-medium ${
                          deadline.priority === 'high' ? 'text-red-900' :
                          deadline.priority === 'medium' ? 'text-yellow-900' :
                          'text-green-900'
                        }`}>{deadline.task}</h4>
                        <div className={`text-sm mt-1 ${
                          deadline.priority === 'high' ? 'text-red-700' :
                          deadline.priority === 'medium' ? 'text-yellow-700' :
                          'text-green-700'
                        }`}>
                          <div className="flex items-center">
                            <Calendar className="w-3 h-3 mr-1" />
                            {deadline.date}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Teaching Load */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">This Week</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Classes</span>
                      <span className="font-semibold">14</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Lab Sessions</span>
                      <span className="font-semibold">3</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Office Hours</span>
                      <span className="font-semibold">4h</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Students</span>
                      <span className="font-semibold">161</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full">
                      Export Schedule
                    </Button>
                    <Button variant="outline" className="w-full">
                      Book Meeting Room
                    </Button>
                    <Button variant="outline" className="w-full">
                      Set Office Hours
                    </Button>
                    <Button variant="outline" className="w-full">
                      View Attendance
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProfessorSchedulePage;
