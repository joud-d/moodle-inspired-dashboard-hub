
import React from 'react';
import { FileText } from 'lucide-react';

interface SubjectHeaderProps {
  subject: {
    name: string;
    code: string;
    instructor: string;
    credits: number;
    color: string;
    department: string;
  };
}

const SubjectHeader: React.FC<SubjectHeaderProps> = ({ subject }) => {
  return (
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
  );
};

export default SubjectHeader;
