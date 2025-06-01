
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { ChevronLeft, ChevronRight, Clock } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const examQuestions = [
  {
    id: 1,
    question: "What is the primary purpose of an operating system?",
    options: [
      "To provide a user interface",
      "To manage computer hardware and software resources",
      "To connect to the internet",
      "To create documents"
    ],
    correctAnswer: 1
  },
  {
    id: 2,
    question: "Which of the following is NOT a programming language?",
    options: [
      "Python",
      "JavaScript",
      "HTML",
      "C++"
    ],
    correctAnswer: 2
  },
  {
    id: 3,
    question: "What does CPU stand for?",
    options: [
      "Computer Processing Unit",
      "Central Processing Unit",
      "Core Processing Unit",
      "Control Processing Unit"
    ],
    correctAnswer: 1
  },
  {
    id: 4,
    question: "Which data structure follows the Last-In-First-Out (LIFO) principle?",
    options: [
      "Queue",
      "Array",
      "Stack",
      "Linked List"
    ],
    correctAnswer: 2
  },
  {
    id: 5,
    question: "What is the time complexity of binary search in the worst case?",
    options: [
      "O(n)",
      "O(log n)",
      "O(n²)",
      "O(1)"
    ],
    correctAnswer: 1
  }
];

const ExamPage: React.FC = () => {
  const navigate = useNavigate();
  const { subjectId } = useParams<{ subjectId: string }>();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const [timeElapsed, setTimeElapsed] = useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeElapsed(prev => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswerChange = (value: string) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion]: parseInt(value)
    }));
  };

  const handleNextQuestion = () => {
    if (currentQuestion < examQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const handleEndExam = () => {
    const answeredQuestions = Object.keys(answers).length;
    const totalQuestions = examQuestions.length;
    
    toast({
      title: "Exam Submitted",
      description: `You answered ${answeredQuestions}/${totalQuestions} questions. Time taken: ${formatTime(timeElapsed)}`,
    });
    
    navigate(`/subject/${subjectId}`);
  };

  const currentQuestionData = examQuestions[currentQuestion];
  const isLastQuestion = currentQuestion === examQuestions.length - 1;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-red-700 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-bold text-white">Introduction to Computer Science - Midterm Exam</h1>
            <div className="flex items-center space-x-4 text-white">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span className="text-sm">{formatTime(timeElapsed)}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">
              Question {currentQuestion + 1} of {examQuestions.length}
            </span>
            <span className="text-sm text-gray-500">
              {Object.keys(answers).length}/{examQuestions.length} answered
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-red-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / examQuestions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl">
              {currentQuestionData.question}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <RadioGroup 
              value={answers[currentQuestion]?.toString() || ""}
              onValueChange={handleAnswerChange}
              className="space-y-4"
            >
              {currentQuestionData.options.map((option, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                  <Label 
                    htmlFor={`option-${index}`} 
                    className="text-base cursor-pointer flex-1 py-2"
                  >
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Button
            variant="outline"
            onClick={handlePreviousQuestion}
            disabled={currentQuestion === 0}
            className="flex items-center space-x-2"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </Button>

          <div className="flex space-x-2">
            {examQuestions.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentQuestion(index)}
                className={`w-8 h-8 rounded-full text-sm font-medium transition-colors ${
                  index === currentQuestion
                    ? 'bg-red-600 text-white'
                    : answers[index] !== undefined
                    ? 'bg-green-100 text-green-800 border border-green-300'
                    : 'bg-gray-100 text-gray-600 border border-gray-300'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>

          {isLastQuestion ? (
            <Button
              onClick={handleEndExam}
              className="bg-green-600 hover:bg-green-700 flex items-center space-x-2"
            >
              <span>End Exam</span>
            </Button>
          ) : (
            <Button
              onClick={handleNextQuestion}
              className="flex items-center space-x-2"
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4" />
            </Button>
          )}
        </div>
      </main>
    </div>
  );
};

export default ExamPage;
