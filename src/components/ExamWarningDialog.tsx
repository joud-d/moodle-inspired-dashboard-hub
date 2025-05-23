
import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { AlertCircle, Camera } from "lucide-react";

interface ExamWarningDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  examName: string;
  onProceed: () => void;
}

const ExamWarningDialog: React.FC<ExamWarningDialogProps> = ({
  open,
  onOpenChange,
  examName,
  onProceed,
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <div className="flex items-center justify-center text-red-600 mb-2">
            <AlertCircle className="h-8 w-8" />
          </div>
          <DialogTitle className="text-center text-xl text-red-600 font-bold">
            🚨 Exam Proctoring Notice 🚨
          </DialogTitle>
        </DialogHeader>
        <div className="py-4 space-y-4">
          <p className="font-semibold text-center">
            {examName}
          </p>
          <p>
            This exam is being monitored using a webcam-based cheating detection system to ensure academic integrity.
          </p>
          <p className="font-semibold">By proceeding, you agree to the following:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Your webcam will remain active throughout the exam.</li>
            <li>
              Any suspicious behavior (e.g., looking away frequently, multiple people in the frame, using unauthorized devices) may be flagged and reviewed.
            </li>
            <li>
              All recorded data will be used solely for exam integrity purposes and handled in accordance with privacy regulations.
            </li>
          </ul>
          <div className="bg-blue-50 p-3 rounded-md flex items-start space-x-2 border border-blue-100">
            <Camera className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-blue-800">
              Make sure you're in a well-lit, quiet environment and your face is clearly visible at all times.
            </p>
          </div>
        </div>
        <DialogFooter className="flex flex-col sm:flex-row sm:justify-between gap-2">
          <Button 
            variant="outline"
            onClick={() => onOpenChange(false)}
            className="w-full sm:w-auto"
          >
            Cancel
          </Button>
          <Button 
            onClick={() => {
              onProceed();
              onOpenChange(false);
            }}
            className="w-full sm:w-auto bg-red-600 hover:bg-red-700"
          >
            Start Exam
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ExamWarningDialog;
