
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, ArrowLeft, Calendar, Clock, FileText, AlertCircle, Home, Timer, BookOpen } from 'lucide-react';
import ExamWarningDialog from './ExamWarningDialog';
import { toast } from '@/hooks/use-toast';

const subjectData = {
  'cs101': {
    name: 'Introduction to Computer Science',
    code: 'CS 101',
    instructor: 'Dr. Ahmad Hassan',
    credits: 3,
    color: 'bg-red-500',
    department: 'King Abdullah II School of Information Technology',
    exams: [
      {
        id: 1,
        name: 'Midterm Exam',
        date: '2024-03-15',
        time: '10:00 AM',
        duration: '2 hours',
        location: 'Room A-201',
        type: 'Midterm',
        status: 'upcoming'
      },
      {
        id: 2,
        name: 'Programming Assignment Quiz',
        date: '2024-03-22',
        time: '2:00 PM',
        duration: '1 hour',
        location: 'Computer Lab B',
        type: 'Quiz',
        status: 'upcoming'
      },
      {
        id: 3,
        name: 'Final Exam',
        date: '2024-05-10',
        time: '9:00 AM',
        duration: '3 hours',
        location: 'Main Hall',
        type: 'Final',
        status: 'scheduled'
      }
    ]
  },
  'math201': {
    name: 'Calculus II',
    code: 'MATH 201',
    instructor: 'Dr. Sarah Ahmed',
    credits: 4,
    color: 'bg-red-500',
    department: 'King Abdullah II School of Information Technology',
    exams: [
      {
        id: 1,
        name: 'Integration Techniques Test',
        date: '2024-03-18',
        time: '11:00 AM',
        duration: '1.5 hours',
        location: 'Room C-105',
        type: 'Test',
        status: 'upcoming'
      }
    ]
  }
};

const SubjectPage: React.FC = () => {
  const { subjectId } = useParams<{ subjectId: string }>();
  const subject = subjectData[subjectId as keyof typeof subjectData];
  const [selectedExam, setSelectedExam] = useState<any>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  if (!subject) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Subject Not Found</h1>
          <Link to="/home">
            <Button>Back to Dashboard</Button>
          </Link>
        </div>
      </div>
    );
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming':
        return 'bg-red-100 text-red-800';
      case 'scheduled':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Final':
        return 'bg-red-500';
      case 'Midterm':
        return 'bg-orange-500';
      case 'Quiz':
        return 'bg-blue-500';
      case 'Test':
        return 'bg-green-500';
      default:
        return 'bg-gray-500';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getDaysUntil = (dateString: string) => {
    const examDate = new Date(dateString);
    const today = new Date();
    const diffTime = examDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };
  
  const handleExamClick = (exam: any) => {
    setSelectedExam(exam);
    setDialogOpen(true);
  };
  
  const handleProceed = () => {
    toast({
      title: "Exam Started",
      description: `You have started the ${selectedExam?.name}. Good luck!`,
    });
  };

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
          <Link to="/home" className="flex items-center justify-center md:justify-start px-4 py-3 text-gray-700 hover:bg-gray-100">
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
              <Link to="/home">
                <Button variant="outline" size="sm" className="bg-white text-red-700 border-white hover:bg-gray-100">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Subject Header */}
          <div className="mb-8">
            <div className="flex items-start space-x-4">
              <div className={`w-16 h-16 ${subject.color} rounded-xl flex items-center justify-center`}>
                <FileText className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">{subject.name}</h2>
                <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4 text-gray-600">
                  <span className="font-medium">{subject.code}</span>
                  <span className="hidden md:inline">•</span>
                  <span>{subject.instructor}</span>
                  <span className="hidden md:inline">•</span>
                  <span>{subject.credits} Credit Hours</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">{subject.department}</p>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <AlertCircle className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">
                      {subject.exams.filter(exam => exam.status === 'upcoming').length}
                    </p>
                    <p className="text-sm text-gray-600">Upcoming Exams</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">{subject.exams.length}</p>
                    <p className="text-sm text-gray-600">Total Assessments</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">
                      {Math.min(...subject.exams.filter(exam => exam.status === 'upcoming').map(exam => getDaysUntil(exam.date)))}
                    </p>
                    <p className="text-sm text-gray-600">Days to Next Exam</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Exams List */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Upcoming Assessments</h3>
            <div className="space-y-4">
              {subject.exams.map((exam) => (
                <Card 
                  key={exam.id} 
                  className="border-0 shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => handleExamClick(exam)}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 ${getTypeColor(exam.type)} rounded-lg flex items-center justify-center`}>
                          <FileText className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-lg font-semibold text-gray-900">
                            {exam.name}
                          </CardTitle>
                          <CardDescription className="text-sm text-gray-600 mt-1">
                            {exam.location}
                          </CardDescription>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge className={getStatusColor(exam.status)}>
                          {exam.status === 'upcoming' ? 'Upcoming' : 'Scheduled'}
                        </Badge>
                        {exam.status === 'upcoming' && (
                          <p className="text-xs text-red-600 mt-1 font-medium">
                            {getDaysUntil(exam.date)} days remaining
                          </p>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-600">{formatDate(exam.date)}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-600">{exam.time} ({exam.duration})</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline" className="text-xs">
                          {exam.type}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </main>
      </div>
      
      {/* Exam Warning Dialog */}
      {selectedExam && (
        <ExamWarningDialog 
          open={dialogOpen} 
          onOpenChange={setDialogOpen}
          examName={selectedExam.name}
          onProceed={handleProceed}
        />
      )}
    </div>
  );
};

export default SubjectPage;
