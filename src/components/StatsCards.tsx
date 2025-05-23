
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { AlertCircle, Calendar, Clock } from 'lucide-react';

interface StatsCardsProps {
  subject: {
    exams: any[];
  };
  getDaysUntil: (dateString: string) => number;
}

const StatsCards: React.FC<StatsCardsProps> = ({ subject, getDaysUntil }) => {
  return (
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
  );
};

export default StatsCards;
