
import React from 'react';
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileText, Calendar, Clock } from 'lucide-react';

interface ExamCardProps {
  exam: {
    id: number;
    name: string;
    date: string;
    time: string;
    duration: string;
    location: string;
    type: string;
    status: string;
  };
  getTypeColor: (type: string) => string;
  getStatusColor: (status: string) => string;
  formatDate: (dateString: string) => string;
  getDaysUntil: (dateString: string) => number;
  onExamClick: (exam: any) => void;
}

const ExamCard: React.FC<ExamCardProps> = ({
  exam,
  getTypeColor,
  getStatusColor,
  formatDate,
  getDaysUntil,
  onExamClick
}) => {
  return (
    <Card 
      key={exam.id} 
      className="border-0 shadow-md hover:shadow-lg transition-shadow cursor-pointer"
      onClick={() => onExamClick(exam)}
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
  );
};

export default ExamCard;
