
import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Camera, CheckCircle } from "lucide-react";

interface ExamVerificationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onVerificationComplete: () => void;
}

const ExamVerificationDialog: React.FC<ExamVerificationDialogProps> = ({
  open,
  onOpenChange,
  onVerificationComplete,
}) => {
  const [isVerifying, setIsVerifying] = React.useState(false);
  const [isVerified, setIsVerified] = React.useState(false);

  const handleTakePicture = () => {
    setIsVerifying(true);
    // Simulate taking picture and verification process
    setTimeout(() => {
      setIsVerifying(false);
      setIsVerified(true);
    }, 2000);
  };

  const handleContinue = () => {
    setIsVerified(false);
    onVerificationComplete();
  };

  const handleCancel = () => {
    setIsVerifying(false);
    setIsVerified(false);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <div className="flex items-center justify-center text-blue-600 mb-2">
            <Camera className="h-8 w-8" />
          </div>
          <DialogTitle className="text-center text-xl text-blue-600 font-bold">
            Identity Verification Required
          </DialogTitle>
        </DialogHeader>
        <div className="py-4 space-y-4">
          {!isVerifying && !isVerified && (
            <>
              <p className="text-center">
                A picture will now be taken for verification purposes to confirm your identity before starting the exam.
              </p>
              <div className="bg-blue-50 p-3 rounded-md border border-blue-100">
                <p className="text-sm text-blue-800">
                  Please ensure your face is clearly visible and well-lit. Remove any hats, sunglasses, or face coverings.
                </p>
              </div>
            </>
          )}
          
          {isVerifying && (
            <div className="text-center">
              <div className="animate-pulse">
                <Camera className="h-16 w-16 mx-auto text-blue-600 mb-4" />
              </div>
              <p className="text-lg font-semibold">Taking picture...</p>
              <p className="text-sm text-gray-600">Please remain still</p>
            </div>
          )}
          
          {isVerified && (
            <div className="text-center">
              <CheckCircle className="h-16 w-16 mx-auto text-green-600 mb-4" />
              <p className="text-lg font-semibold text-green-600">Verification Successful!</p>
              <p className="text-sm text-gray-600">Identity confirmed. You may proceed to the exam.</p>
            </div>
          )}
        </div>
        <DialogFooter className="flex flex-col sm:flex-row sm:justify-between gap-2">
          <Button 
            variant="outline"
            onClick={handleCancel}
            className="w-full sm:w-auto"
          >
            Cancel
          </Button>
          {!isVerifying && !isVerified && (
            <Button 
              onClick={handleTakePicture}
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700"
            >
              Take Picture
            </Button>
          )}
          {isVerified && (
            <Button 
              onClick={handleContinue}
              className="w-full sm:w-auto bg-green-600 hover:bg-green-700"
            >
              Continue to Exam
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ExamVerificationDialog;
