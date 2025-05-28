
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { GraduationCap, BookOpen, Calendar, Users, LogOut, User, Home, Timer, ArrowLeft, FileText, AlertTriangle, CheckCircle, Clock } from 'lucide-react';
import { examReportsData } from '@/utils/professorData';

interface ExamReportsPageProps {
  onLogout: () => void;
}

const ExamReportsPage: React.FC<ExamReportsPageProps> = ({ onLogout }) => {
  const { examId } = useParams<{ examId: string }>();
  const reports = examReportsData[Number(examId) as keyof typeof examReportsData] || [];
  const [decisions, setDecisions] = useState<{ [key: string]: string }>({});
  const [selectedReport, setSelectedReport] = useState<string | null>(null);

  const handleDecisionChange = (studentId: string, decision: string) => {
    setDecisions(prev => ({ ...prev, [studentId]: decision }));
  };

  const getSeverityIcon = (report: string) => {
    if (report.includes('HIGH') && report.includes('Multiple violations')) {
      return <AlertTriangle className="w-5 h-5 text-red-500" />;
    } else if (report.includes('No suspicious behavior')) {
      return <CheckCircle className="w-5 h-5 text-green-500" />;
    } else {
      return <Clock className="w-5 h-5 text-yellow-500" />;
    }
  };

  const getSeverityText = (report: string) => {
    if (report.includes('HIGH') && report.includes('Multiple violations')) {
      return 'High Risk';
    } else if (report.includes('No suspicious behavior')) {
      return 'No Issues';
    } else {
      return 'Low Risk';
    }
  };

  const getSeverityColor = (report: string) => {
    if (report.includes('HIGH') && report.includes('Multiple violations')) {
      return 'bg-red-100 text-red-800';
    } else if (report.includes('No suspicious behavior')) {
      return 'bg-green-100 text-green-800';
    } else {
      return 'bg-yellow-100 text-yellow-800';
    }
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
                <Button 
                  onClick={() => window.history.back()}
                  variant="outline" 
                  size="sm" 
                  className="bg-white text-red-700 border-white hover:bg-gray-100"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Course
                </Button>
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
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Exam Integrity Reports</h2>
            <p className="text-gray-600">Review AI-generated cheating detection reports for each student</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Reports Table */}
            <div className="lg:col-span-2">
              <Card className="shadow-md border-0">
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Student Name</TableHead>
                        <TableHead>Student ID</TableHead>
                        <TableHead>AI Summary</TableHead>
                        <TableHead>Final Decision</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {reports.map((report) => (
                        <TableRow key={report.studentId}>
                          <TableCell className="font-medium">{report.studentName}</TableCell>
                          <TableCell>{report.studentId}</TableCell>
                          <TableCell>
                            <div className="flex items-center space-x-2">
                              {getSeverityIcon(report.cheatingReport)}
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(report.cheatingReport)}`}>
                                {getSeverityText(report.cheatingReport)}
                              </span>
                            </div>
                          </TableCell>
                          <TableCell>
                            <select
                              value={decisions[report.studentId] || ''}
                              onChange={(e) => handleDecisionChange(report.studentId, e.target.value)}
                              className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:border-red-500 focus:ring-red-500"
                            >
                              <option value="">Select...</option>
                              <option value="no-cheating">No Cheating</option>
                              <option value="cheating">Cheating</option>
                              <option value="needs-review">Needs Review</option>
                            </select>
                          </TableCell>
                          <TableCell>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => setSelectedReport(report.studentId)}
                              className="text-red-600 border-red-600 hover:bg-red-50"
                            >
                              <FileText className="w-4 h-4 mr-2" />
                              View Report
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>

            {/* Report Details */}
            <div className="lg:col-span-1">
              <Card className="shadow-md border-0 sticky top-8">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    {selectedReport ? 'AI Detection Report' : 'Select a Student'}
                  </h3>
                  {selectedReport ? (
                    <div className="space-y-4">
                      {(() => {
                        const report = reports.find(r => r.studentId === selectedReport);
                        return report ? (
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <pre className="text-sm text-gray-700 whitespace-pre-wrap font-mono leading-relaxed">
                              {report.cheatingReport}
                            </pre>
                          </div>
                        ) : null;
                      })()}
                    </div>
                  ) : (
                    <p className="text-gray-500 text-center py-8">
                      Click "View Report" next to a student's name to see their detailed AI-generated cheating detection report.
                    </p>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Save Button */}
          <div className="mt-8 flex justify-end">
            <Button className="bg-red-600 hover:bg-red-700 text-white px-8">
              Save All Decisions
            </Button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ExamReportsPage;
