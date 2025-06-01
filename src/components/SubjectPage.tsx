
import React, { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ExamWarningDialog from './ExamWarningDialog';
import ExamVerificationDialog from './ExamVerificationDialog';
import { toast } from '@/hooks/use-toast';
import { subjectData } from '@/utils/subjectData';
import { getStatusColor, getTypeColor, formatDate, getDaysUntil } from '@/utils/examUtils';
import Sidebar from './Sidebar';
import Header from './Header';
import SubjectHeader from './SubjectHeader';
import StatsCards from './StatsCards';
import ExamCard from './ExamCard';

const SubjectPage: React.FC = () => {
  const { subjectId } = useParams<{ subjectId: string }>();
  const navigate = useNavigate();
  const subject = subjectData[subjectId as keyof typeof subjectData];
  const [selectedExam, setSelectedExam] = useState<any>(null);
  const [verificationDialogOpen, setVerificationDialogOpen] = useState(false);
  const [warningDialogOpen, setWarningDialogOpen] = useState(false);

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
  
  const handleExamClick = (exam: any) => {
    setSelectedExam(exam);
    setVerificationDialogOpen(true);
  };
  
  const handleVerificationComplete = () => {
    setVerificationDialogOpen(false);
    setWarningDialogOpen(true);
  };
  
  const handleProceed = () => {
    toast({
      title: "Exam Started",
      description: `You have started the ${selectedExam?.name}. Good luck!`,
    });
    
    // Navigate to the exam page
    navigate(`/exam/${subjectId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 ml-20 md:ml-64">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Subject Header */}
          <SubjectHeader subject={subject} />

          {/* Quick Stats */}
          <StatsCards subject={subject} getDaysUntil={getDaysUntil} />

          {/* Exams List */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Upcoming Assessments</h3>
            <div className="space-y-4">
              {subject.exams.map((exam) => (
                <ExamCard
                  key={exam.id}
                  exam={exam}
                  getTypeColor={getTypeColor}
                  getStatusColor={getStatusColor}
                  formatDate={formatDate}
                  getDaysUntil={getDaysUntil}
                  onExamClick={handleExamClick}
                />
              ))}
            </div>
          </div>
        </main>
      </div>
      
      {/* Verification Dialog */}
      {selectedExam && (
        <ExamVerificationDialog 
          open={verificationDialogOpen} 
          onOpenChange={setVerificationDialogOpen}
          onVerificationComplete={handleVerificationComplete}
        />
      )}
      
      {/* Exam Warning Dialog */}
      {selectedExam && (
        <ExamWarningDialog 
          open={warningDialogOpen} 
          onOpenChange={setWarningDialogOpen}
          examName={selectedExam.name}
          onProceed={handleProceed}
        />
      )}
    </div>
  );
};

export default SubjectPage;
