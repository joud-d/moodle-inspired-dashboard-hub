
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin, BookOpen } from 'lucide-react';
import Sidebar from './Sidebar';
import Header from './Header';

const scheduleData = [
  {
    id: 1,
    day: 'Monday',
    classes: [
      { time: '08:00 - 09:30', subject: 'Calculus I', room: 'A101', instructor: 'Dr. Sarah Ahmad' },
      { time: '10:00 - 11:30', subject: 'Physics I', room: 'B205', instructor: 'Dr. Omar Hassan' },
      { time: '13:00 - 14:30', subject: 'Chemistry Lab', room: 'Lab C', instructor: 'Dr. Layla Khouri' },
    ]
  },
  {
    id: 2,
    day: 'Tuesday',
    classes: [
      { time: '09:00 - 10:30', subject: 'English Literature', room: 'D304', instructor: 'Ms. Rania Mansour' },
      { time: '11:00 - 12:30', subject: 'Computer Science', room: 'E201', instructor: 'Dr. Ahmad Zaid' },
      { time: '14:00 - 15:30', subject: 'Statistics', room: 'A203', instructor: 'Dr. Fatima Ali' },
    ]
  },
  {
    id: 3,
    day: 'Wednesday',
    classes: [
      { time: '08:00 - 09:30', subject: 'Calculus I', room: 'A101', instructor: 'Dr. Sarah Ahmad' },
      { time: '10:00 - 11:30', subject: 'Physics I', room: 'B205', instructor: 'Dr. Omar Hassan' },
      { time: '12:00 - 13:30', subject: 'Biology', room: 'C102', instructor: 'Dr. Nour Khalil' },
    ]
  },
  {
    id: 4,
    day: 'Thursday',
    classes: [
      { time: '09:00 - 10:30', subject: 'English Literature', room: 'D304', instructor: 'Ms. Rania Mansour' },
      { time: '11:00 - 12:30', subject: 'Computer Science', room: 'E201', instructor: 'Dr. Ahmad Zaid' },
      { time: '13:00 - 14:30', subject: 'Physics Lab', room: 'Lab B', instructor: 'Dr. Omar Hassan' },
    ]
  },
  {
    id: 5,
    day: 'Friday',
    classes: [
      { time: '08:00 - 09:30', subject: 'Statistics', room: 'A203', instructor: 'Dr. Fatima Ali' },
      { time: '10:00 - 11:30', subject: 'Biology', room: 'C102', instructor: 'Dr. Nour Khalil' },
    ]
  },
];

const upcomingExams = [
  { subject: 'Calculus I', date: '2024-12-15', time: '09:00', room: 'Hall A' },
  { subject: 'Physics I', date: '2024-12-18', time: '10:00', room: 'Hall B' },
  { subject: 'Chemistry', date: '2024-12-20', time: '14:00', room: 'Hall C' },
];

const SchedulePage: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState('Monday');

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      
      <div className="flex-1 ml-20 md:ml-64">
        <Header />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Schedule</h2>
            <p className="text-gray-600">View your weekly class schedule and upcoming exams</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Weekly Schedule */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="w-5 h-5 mr-2" />
                    Weekly Schedule
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {/* Day Selector */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {scheduleData.map((dayData) => (
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
                    {scheduleData
                      .find(day => day.day === selectedDay)
                      ?.classes.map((classItem, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h3 className="font-semibold text-gray-900 flex items-center">
                                <BookOpen className="w-4 h-4 mr-2 text-red-600" />
                                {classItem.subject}
                              </h3>
                              <p className="text-sm text-gray-600 mt-1">
                                Instructor: {classItem.instructor}
                              </p>
                              <div className="flex items-center space-x-4 mt-2">
                                <span className="flex items-center text-sm text-gray-500">
                                  <Clock className="w-4 h-4 mr-1" />
                                  {classItem.time}
                                </span>
                                <span className="flex items-center text-sm text-gray-500">
                                  <MapPin className="w-4 h-4 mr-1" />
                                  {classItem.room}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar with Upcoming Exams and Quick Info */}
            <div className="space-y-6">
              {/* Upcoming Exams */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Upcoming Exams</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {upcomingExams.map((exam, index) => (
                      <div key={index} className="bg-red-50 border border-red-200 rounded-lg p-3">
                        <h4 className="font-medium text-red-900">{exam.subject}</h4>
                        <div className="text-sm text-red-700 mt-1">
                          <div className="flex items-center">
                            <Calendar className="w-3 h-3 mr-1" />
                            {exam.date}
                          </div>
                          <div className="flex items-center mt-1">
                            <Clock className="w-3 h-3 mr-1" />
                            {exam.time}
                          </div>
                          <div className="flex items-center mt-1">
                            <MapPin className="w-3 h-3 mr-1" />
                            {exam.room}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">This Week</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Classes</span>
                      <span className="font-semibold">16</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Lab Sessions</span>
                      <span className="font-semibold">2</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Study Hours</span>
                      <span className="font-semibold">24</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Free Time</span>
                      <span className="font-semibold">15h</span>
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
                      Download Schedule
                    </Button>
                    <Button variant="outline" className="w-full">
                      Add to Calendar
                    </Button>
                    <Button variant="outline" className="w-full">
                      Set Reminders
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

export default SchedulePage;
